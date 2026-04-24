import { Prisma, Workout, WorkoutChatMessage } from '@prisma/client';

import prisma from '../prismaClient';

export class WorkoutRepository {
    async getProfileByUserId(userId: number) {
        return prisma.userProfile.findUnique({ where: { userId } });
    }

    async createProfile(data: Prisma.UserProfileCreateInput) {
        return prisma.userProfile.create({ data });
    }

    async updateProfile(userId: number, data: Prisma.UserProfileUpdateInput) {
        return prisma.userProfile.update({
            where: { userId },
            data,
        });
    }

    async listWorkoutsByUserId(userId: number): Promise<Workout[]> {
        return prisma.workout.findMany({
            where: { userId },
            orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
        });
    }

    async createWorkout(data: Prisma.WorkoutCreateInput): Promise<Workout> {
        return prisma.workout.create({ data });
    }

    async getWorkoutById(id: string): Promise<Workout | null> {
        return prisma.workout.findUnique({ where: { id } });
    }

    async deleteWorkoutById(id: string): Promise<Workout> {
        return prisma.workout.delete({ where: { id } });
    }

    async getLastCompletedWorkout(userId: number): Promise<Workout | null> {
        return prisma.workout.findFirst({
            where: { userId, status: 'COMPLETED' },
            orderBy: [{ date: 'desc' }, { updatedAt: 'desc' }],
        });
    }

    async getLastCompletedWorkouts(userId: number, limit = 5): Promise<Workout[]> {
        return prisma.workout.findMany({
            where: { userId, status: 'COMPLETED' },
            orderBy: [{ date: 'desc' }, { updatedAt: 'desc' }],
            take: limit,
        });
    }

    async markCompleted(id: string, actualData: Prisma.InputJsonValue): Promise<Workout> {
        return prisma.workout.update({
            where: { id },
            data: {
                status: 'COMPLETED',
                actualData,
            },
        });
    }

    async updatePlannedData(id: string, plannedData: Prisma.InputJsonValue, title?: string): Promise<Workout> {
        return prisma.workout.update({
            where: { id },
            data: {
                plannedData,
                ...(title ? { title } : {}),
            },
        });
    }

    async createChatMessage(data: Prisma.WorkoutChatMessageCreateInput): Promise<WorkoutChatMessage> {
        return prisma.workoutChatMessage.create({ data });
    }

    async listChatMessages(workoutId: string, userId: number, limit = 20): Promise<WorkoutChatMessage[]> {
        const items = await prisma.workoutChatMessage.findMany({
            where: { workoutId, userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });

        return items.reverse();
    }
}

