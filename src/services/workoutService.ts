import { Prisma, UserProfile, Workout } from '@prisma/client';

import { WorkoutRepository } from '../repositories/workoutRepository';
import { AiWorkoutService } from './aiWorkoutService';
import type { WorkoutPlan } from '../types/workout';

export interface UpsertUserProfileDto {
    weight: number;
    height: number;
    age: number;
    experienceLevel: string;
    goals: string;
    sportsBackground?: string | null;
    language?: 'ru' | 'en';
}

export class WorkoutService {
    private repo = new WorkoutRepository();
    private ai = new AiWorkoutService();

    async listWorkouts(userId: number): Promise<Workout[]> {
        return await this.repo.listWorkoutsByUserId(userId);
    }

    async getOrCreateProfile(userId: number): Promise<UserProfile> {
        const existing = await this.repo.getProfileByUserId(userId);
        if (existing) return existing;

        return await this.repo.createProfile({
            user: { connect: { id: userId } },
            weight: 0,
            height: 0,
            age: 18,
            experienceLevel: 'BEGINNER',
            goals: 'GENERAL',
            sportsBackground: null,
            language: 'ru',
        });
    }

    async updateProfile(userId: number, dto: UpsertUserProfileDto): Promise<UserProfile> {
        const existing = await this.repo.getProfileByUserId(userId);
        if (!existing) {
            return await this.repo.createProfile({
                user: { connect: { id: userId } },
                weight: dto.weight,
                height: dto.height,
                age: dto.age,
                experienceLevel: dto.experienceLevel,
                goals: dto.goals,
                sportsBackground: dto.sportsBackground ?? null,
                language: dto.language ?? 'ru',
            });
        }

        return await this.repo.updateProfile(userId, {
            weight: dto.weight,
            height: dto.height,
            age: dto.age,
            experienceLevel: dto.experienceLevel,
            goals: dto.goals,
            sportsBackground: dto.sportsBackground ?? null,
            language: dto.language ?? existing.language,
        });
    }

    async createPlan(userId: number, userRequest: string, lang?: 'ru' | 'en'): Promise<Workout> {
        const profile = await this.getOrCreateProfile(userId);
        const effectiveLang: 'ru' | 'en' =
            lang === 'en' || lang === 'ru' ? lang : profile.language === 'en' ? 'en' : 'ru';
        const lastCompletedWorkouts = await this.repo.getLastCompletedWorkouts(userId, 5);
        const plan = await this.ai.createWorkoutPlan(profile, lastCompletedWorkouts, userRequest, effectiveLang);

        return await this.repo.createWorkout({
            user: { connect: { id: userId } },
            title: plan.title,
            status: 'PLANNED',
            plannedData: plan as unknown as Prisma.InputJsonValue,
            aiFeedback: plan.aiMessage,
        });
    }

    async completeWorkout(userId: number, workoutId: string, actualData: WorkoutPlan | unknown): Promise<Workout> {
        const workout = await this.repo.getWorkoutById(workoutId);
        if (!workout || workout.userId !== userId) {
            throw new Error('Workout not found');
        }

        return await this.repo.markCompleted(workoutId, actualData as Prisma.InputJsonValue);
    }

    async deleteWorkout(userId: number, workoutId: string): Promise<void> {
        const workout = await this.repo.getWorkoutById(workoutId);
        if (!workout || workout.userId !== userId) {
            throw new Error('Workout not found');
        }

        await this.repo.deleteWorkoutById(workoutId);
    }

    async chatAboutWorkout(
        userId: number,
        workoutId: string,
        message: string,
    ): Promise<{ reply: string; updatedPlan: WorkoutPlan | null; timestamp: string }> {
        const workout = await this.repo.getWorkoutById(workoutId);
        if (!workout || workout.userId !== userId) {
            throw new Error('Workout not found');
        }

        const profile = await this.getOrCreateProfile(userId);
        const lastCompletedWorkouts = await this.repo.getLastCompletedWorkouts(userId, 5);

        const existingHistory = await this.repo.listChatMessages(workoutId, userId, 20);

        await this.repo.createChatMessage({
            workout: { connect: { id: workoutId } },
            user: { connect: { id: userId } },
            role: 'USER',
            text: message,
        });

        const nowIso = new Date().toISOString();
        const currentPlan = workout.plannedData as unknown as WorkoutPlan;

        const chatHistory = [
            ...existingHistory.map((m) => ({
                role: (m.role === 'AI' ? 'AI' : 'USER') as 'USER' | 'AI',
                text: m.text,
                createdAtIso: m.createdAt.toISOString(),
            })),
            { role: 'USER' as const, text: message, createdAtIso: nowIso },
        ];

        const { reply, updatedPlan } = await this.ai.chatAboutWorkout({
            profile,
            currentPlan,
            lastCompletedWorkouts,
            chatHistory,
            userMessage: message,
            nowIso,
        });

        const aiMessage = await this.repo.createChatMessage({
            workout: { connect: { id: workoutId } },
            user: { connect: { id: userId } },
            role: 'AI',
            text: reply,
        });

        if (updatedPlan) {
            await this.repo.updatePlannedData(
                workoutId,
                updatedPlan as unknown as Prisma.InputJsonValue,
                updatedPlan.title,
            );
        }

        return { reply, updatedPlan, timestamp: aiMessage.createdAt.toISOString() };
    }

    async getWorkoutChatMessages(
        userId: number,
        workoutId: string,
        limit = 50,
    ): Promise<Array<{ role: 'user' | 'ai'; text: string; timestamp: string }>> {
        const workout = await this.repo.getWorkoutById(workoutId);
        if (!workout || workout.userId !== userId) {
            throw new Error('Workout not found');
        }

        const items = await this.repo.listChatMessages(workoutId, userId, limit);
        return items.map((m) => ({
            role: m.role === 'AI' ? 'ai' : 'user',
            text: m.text,
            timestamp: m.createdAt.toISOString(),
        }));
    }
}

