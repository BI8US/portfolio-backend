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
 * - For matched sets: keep user's values (weight/reps/isCompleted) by default.
 * - Preserve extra user-added sets that are beyond the updated plan length.
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

            return {
                ...updatedSet,
                id: draftSet.id,
                weight: draftSet.weight,
                reps: draftSet.reps,
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
            id: draftExercise.id,
            name: draftExercise.name,
            sets: [...mergedSets, ...extraDraftSets],
        };
    });

    const extraDraftExercises = draft.exercises.filter(
        (e) =>
            !updatedPlan.exercises.some((p) => p.id === e.id) &&
            !mergedExercises.some((p) => p.id === e.id),
    );

    return {
        ...updatedPlan,
        exercises: [...mergedExercises, ...extraDraftExercises],
    };
}

