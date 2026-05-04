import type { ExerciseData, SetData, WorkoutPlan } from '../types/workout';

function normalizeExerciseName(name: string) {
    return name
        .trim()
        .toLocaleLowerCase()
        .replace(/ё/g, 'е')
        .replace(/[\s\-–—_]+/g, ' ')
        .replace(/[^\p{L}\p{N} ]/gu, '')
        .trim();
}

function buildExerciseIndexByName(exercises: ExerciseData[]) {
    const map = new Map<string, ExerciseData[]>();
    for (const ex of exercises) {
        const key = normalizeExerciseName(ex.name);
        const list = map.get(key) ?? [];
        list.push(ex);
        map.set(key, list);
    }
    return map;
}

/**
 * Reconciles an AI-produced updated plan with the user's current in-gym draft.
 * Goal: keep user progress (done/weights/reps, extra sets) and preserve stable ids
 * even when the AI regenerates ids.
 *
 * Strategy:
 * - Match exercises by id first; otherwise by normalized name (first unused candidate).
 * - Match sets by id first; otherwise by index.
 * - For matched sets: if the user already completed the set in the draft, freeze that set's
 *   weight/reps (they already did it). Otherwise use the coach/updated prescription; still
 *   merge isCompleted from the draft for incomplete sets.
 * - Preserve extra user-added sets that are beyond the updated plan length.
 * - Do NOT re-append draft-only exercises: if the coach removed an exercise, it must stay removed.
 * - Exercise title and id follow the updated plan; draft only supplies in-progress set data.
 */
export function reconcileUpdatedPlanWithDraft(
    updatedPlan: WorkoutPlan,
    draft: WorkoutPlan,
): WorkoutPlan {
    const draftByExerciseId = new Map(draft.exercises.map((e) => [e.id, e]));
    const draftByName = buildExerciseIndexByName(draft.exercises);
    const usedDraftExerciseIds = new Set<string>();

    const mergedExercises: ExerciseData[] = updatedPlan.exercises.map((updatedExercise) => {
        let draftExercise = draftByExerciseId.get(updatedExercise.id) ?? null;
        if (!draftExercise) {
            const key = normalizeExerciseName(updatedExercise.name);
            const candidates = draftByName.get(key) ?? [];
            const next = candidates.find((c) => !usedDraftExerciseIds.has(c.id)) ?? null;
            if (next) {
                draftExercise = next;
            }
        }

        if (!draftExercise) {
            return updatedExercise;
        }

        usedDraftExerciseIds.add(draftExercise.id);

        const draftSetsById = new Map(draftExercise.sets.map((s) => [s.id, s]));

        const mergedSets: SetData[] = updatedExercise.sets.map((updatedSet, idx) => {
            const draftSetById = draftSetsById.get(updatedSet.id);
            const draftSetByIndex = draftExercise.sets[idx];
            const draftSet = draftSetById ?? draftSetByIndex ?? null;

            if (!draftSet) {
                return updatedSet;
            }

            if (draftSet.isCompleted) {
                return {
                    ...updatedSet,
                    id: updatedSet.id,
                    weight: draftSet.weight,
                    reps: draftSet.reps,
                    isCompleted: true,
                };
            }

            // isCompleted: still from draft (not updatedSet) so AI cannot "check off" sets for the user.
            return {
                ...updatedSet,
                id: updatedSet.id,
                weight: updatedSet.weight,
                reps: updatedSet.reps,
                isCompleted: draftSet.isCompleted,
            };
        });

        const extraDraftSets = draftExercise.sets.filter(
            (s, idx) =>
                !updatedExercise.sets.some((p) => p.id === s.id) &&
                idx >= updatedExercise.sets.length,
        );

        return {
            ...updatedExercise,
            // Keep coach/AI structure and naming; only merge in user set progress.
            id: updatedExercise.id,
            name: updatedExercise.name,
            sets: [...mergedSets, ...extraDraftSets],
        };
    });

    return {
        ...updatedPlan,
        exercises: mergedExercises,
    };
}

