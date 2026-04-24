import type { UserProfile, Workout } from '@prisma/client';

import type { WorkoutPlan } from '../types/workout';

function safeJsonParse(text: string): unknown {
    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

function isWorkoutPlan(value: any): value is WorkoutPlan {
    return (
        value &&
        typeof value === 'object' &&
        typeof value.title === 'string' &&
        typeof value.focus === 'string' &&
        Array.isArray(value.exercises) &&
        typeof value.aiMessage === 'string'
    );
}

function buildProfileSummary(profile: UserProfile): string {
    return `age: ${profile.age}, weight: ${profile.weight}, height: ${profile.height}, level: ${profile.experienceLevel}, goals: ${profile.goals}, injuries: ${profile.sportsBackground || 'none'}`;
}

const WORKOUT_PLAN_JSON_SCHEMA = {
    name: 'WorkoutPlan',
    schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
            title: { type: 'string' },
            focus: { type: 'string' },
            exercises: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        restTimeSeconds: { type: 'number' },
                        sets: {
                            type: 'array',
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    id: { type: 'string' },
                                    weight: { type: 'number' },
                                    reps: { type: 'number' },
                                    isCompleted: { type: 'boolean' },
                                },
                                required: ['id', 'weight', 'reps', 'isCompleted'],
                            },
                        },
                    },
                    required: ['id', 'name', 'restTimeSeconds', 'sets'],
                },
            },
            aiMessage: { type: 'string' },
        },
        required: ['title', 'focus', 'exercises', 'aiMessage'],
    },
    strict: true,
} as const;

const WORKOUT_CHAT_JSON_SCHEMA = {
    name: 'WorkoutChatResponse',
    schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
            reply: { type: 'string' },
            updatedPlan: {
                anyOf: [
                    WORKOUT_PLAN_JSON_SCHEMA.schema,
                    { type: 'null' },
                ],
            },
        },
        required: ['reply', 'updatedPlan'],
    },
    strict: true,
} as const;

async function callOpenAiJson(systemPrompt: string, userPrompt: string): Promise<WorkoutPlan> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return {
            title: 'Full Body (MVP)',
            focus: 'full_body',
            exercises: [
                {
                    id: 'ex-1',
                    name: 'Goblet Squat',
                    restTimeSeconds: 90,
                    sets: [
                        { id: 'set-1', weight: 12, reps: 12, isCompleted: false },
                        { id: 'set-2', weight: 12, reps: 12, isCompleted: false },
                        { id: 'set-3', weight: 12, reps: 12, isCompleted: false },
                    ],
                },
            ],
            aiMessage:
                'OPENAI_API_KEY is missing — returning a mock plan. Set OPENAI_API_KEY to enable AI generation.',
        };
    }

    const endpoint = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model,
            temperature: 0.4,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            response_format: {
                type: 'json_schema',
                json_schema: WORKOUT_PLAN_JSON_SCHEMA,
            },
        }),
    });

    if (!resp.ok) {
        const body = await resp.text().catch(() => '');
        throw new Error(`OpenAI API error: ${resp.status} ${resp.statusText} ${body}`.trim());
    }

    const data: any = await resp.json();
    const contentText = data?.choices?.[0]?.message?.content;
    if (typeof contentText !== 'string') {
        throw new Error('OpenAI API returned unexpected response (no message content)');
    }

    const parsed = safeJsonParse(contentText);
    if (!isWorkoutPlan(parsed)) {
        throw new Error('AI response is not a valid WorkoutPlan JSON');
    }

    return parsed;
}

function isWorkoutChatResponse(value: any): value is { reply: string; updatedPlan: WorkoutPlan | null } {
    return (
        value &&
        typeof value === 'object' &&
        typeof value.reply === 'string' &&
        (value.updatedPlan === null || isWorkoutPlan(value.updatedPlan))
    );
}

async function callOpenAiChatJson(
    systemPrompt: string,
    userPrompt: string,
): Promise<{ reply: string; updatedPlan: WorkoutPlan | null }> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return {
            reply: 'OPENAI_API_KEY is missing — AI chat is unavailable. Set OPENAI_API_KEY to enable chat.',
            updatedPlan: null,
        };
    }

    const endpoint = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

    const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model,
            temperature: 0.4,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            response_format: {
                type: 'json_schema',
                json_schema: WORKOUT_CHAT_JSON_SCHEMA,
            },
        }),
    });

    if (!resp.ok) {
        const body = await resp.text().catch(() => '');
        throw new Error(`OpenAI API error: ${resp.status} ${resp.statusText} ${body}`.trim());
    }

    const data: any = await resp.json();
    const contentText = data?.choices?.[0]?.message?.content;
    if (typeof contentText !== 'string') {
        throw new Error('OpenAI API returned unexpected response (no message content)');
    }

    const parsed = safeJsonParse(contentText);
    if (!isWorkoutChatResponse(parsed)) {
        throw new Error('AI response is not a valid WorkoutChat JSON');
    }

    return parsed;
}

export class AiWorkoutService {
    async createWorkoutPlan(profile: UserProfile, lastWorkouts: Workout[], userRequest: string): Promise<WorkoutPlan> {
        const systemPrompt =
            'You are an elite AI fitness coach. Your job is to create a workout (strict JSON) based on the user profile, the user’s recent workouts (if any), and today’s request.\n\n' +
            'Profile: {profile}\n' +
            'Last 5 completed workouts (actual results, newest → oldest): {lastWorkouts}\n' +
            'Today request: {userRequest}\n\n' +
            'YOUR DECISION LOGIC (pick one of two paths):\n' +
            "PATH A (Adaptation): If the user is simply continuing training (e.g. 'back day' or no major change), use the MOST RECENT workout as a strict template. Also consider the trend across the last 5 workouts: progress/regression, fatigue, and repeated muscle focus. Apply progression: if they generally hit the plan, increase weights/reps; if they underperformed, decrease.\n" +
            "PATH B (New program): If the request implies a change in environment, goal, or equipment (e.g. 'I’m at home', 'knee pain', 'want cardio'), create a COMPLETELY NEW program. Use recent workouts ONLY to infer general strength levels (working weights) and recovery, but do not copy the same exercises.\n\n" +
            "Return ONLY valid JSON matching the WorkoutPlan schema. In 'aiMessage', briefly explain your choice (e.g. 'You exceeded the plan, +2.5kg on bench' OR 'You’re at home, built a bodyweight plan').";

        const lastWorkoutsForPrompt = (lastWorkouts || []).map((w) => ({
            id: w.id,
            date: w.date,
            title: w.title,
            status: w.status,
            plannedData: w.plannedData,
            actualData: w.actualData,
        }));

        const filledSystemPrompt = systemPrompt
            .replace('{profile}', JSON.stringify(profile))
            .replace('{lastWorkouts}', JSON.stringify(lastWorkoutsForPrompt))
            .replace('{userRequest}', userRequest);

        const userPrompt = `Profile (summary): ${buildProfileSummary(profile)}. Request: ${userRequest}. Return ONLY JSON.`;
        return await callOpenAiJson(filledSystemPrompt, userPrompt);
    }

    async chatAboutWorkout(params: {
        profile: UserProfile;
        currentPlan: WorkoutPlan;
        lastCompletedWorkouts: Workout[];
        chatHistory: Array<{ role: 'USER' | 'AI'; text: string; createdAtIso: string }>;
        userMessage: string;
        nowIso: string;
    }): Promise<{ reply: string; updatedPlan: WorkoutPlan | null }> {
        const {
            profile,
            currentPlan,
            lastCompletedWorkouts,
            chatHistory,
            userMessage,
            nowIso,
        } = params;

        const historyText =
            chatHistory.length === 0
                ? 'none'
                : chatHistory.map((m) => `[${m.createdAtIso}] ${m.role}: ${m.text}`).join('\n');

        const lastWorkoutsBlock = (lastCompletedWorkouts || []).map((w) => ({
            date: w.date,
            title: w.title,
            plannedData: w.plannedData,
            actualData: w.actualData,
        }));

        const systemPrompt =
            'You are an elite fitness coach. The user is asking a question or requesting changes to their current workout.\n' +
            `Current time (UTC ISO): ${nowIso}\n` +
            `User profile: ${buildProfileSummary(profile)}\n` +
            `Last 5 completed workouts (if any): ${JSON.stringify(lastWorkoutsBlock)}\n` +
            `Chat history (UTC ISO):\n${historyText}\n` +
            `Current plan: ${JSON.stringify(currentPlan)}\n` +
            `User message: ${userMessage}\n` +
            'Return strict JSON with the following structure:\n' +
            '{\n' +
            '  "reply": "Your detailed answer, advice, or explanation",\n' +
            '  "updatedPlan": <Updated WorkoutPlan object IF the user requested changes. If no changes are needed, return null>\n' +
            '}';

        const userPrompt = `User message: ${userMessage}. Return ONLY JSON.`;
        return await callOpenAiChatJson(systemPrompt, userPrompt);
    }
}

