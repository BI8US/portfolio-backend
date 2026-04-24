import type { UserProfile, Workout } from '@prisma/client';
import type { Response } from 'express';
import type { ParamsDictionary } from 'express-serve-static-core';

import type { AuthRequest } from '../middleware/authMiddleware';
import type { ErrorResponse, IdParams } from '../types/common';
import type { WorkoutPlan } from '../types/workout';
import { WorkoutService } from '../services/workoutService';

const workoutService = new WorkoutService();

export interface GenerateWorkoutDto {
    userRequest: string;
}

export interface CompleteWorkoutDto {
    actualData: WorkoutPlan | unknown;
}

export interface UpdateProfileDto {
    weight: number;
    height: number;
    age: number;
    experienceLevel: string;
    goals: string;
    sportsBackground?: string | null;
}

export interface WorkoutChatDto {
    message: string;
}

export class WorkoutController {
    public listWorkouts = async (
        req: AuthRequest<ParamsDictionary>,
        res: Response<Workout[] | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const workouts = await workoutService.listWorkouts(userId);
            res.json(workouts);
        } catch (err) {
            console.error('Error listing workouts:', err);
            res.status(500).json({ error: 'Failed to fetch workouts' });
        }
    };

    public getOrCreateProfile = async (
        req: AuthRequest<ParamsDictionary>,
        res: Response<UserProfile | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const profile = await workoutService.getOrCreateProfile(userId);
            res.json(profile);
        } catch (err) {
            console.error('Error getting profile:', err);
            res.status(500).json({ error: 'Failed to get profile' });
        }
    };

    public updateProfile = async (
        req: AuthRequest<ParamsDictionary, UpdateProfileDto>,
        res: Response<UserProfile | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const profile = await workoutService.updateProfile(userId, req.body);
            res.json(profile);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public createPlan = async (
        req: AuthRequest<ParamsDictionary, GenerateWorkoutDto>,
        res: Response<Workout | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const userRequest = req.body?.userRequest;
            if (!userRequest || typeof userRequest !== 'string') {
                res.status(400).json({ error: 'userRequest is required' });
                return;
            }

            const workout = await workoutService.createPlan(userId, userRequest);
            res.status(201).json(workout);
        } catch (err: any) {
            console.error('Error creating workout plan:', err);
            res.status(400).json({ error: err.message });
        }
    };

    public complete = async (
        req: AuthRequest<IdParams, CompleteWorkoutDto>,
        res: Response<Workout | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Workout id is required' });
                return;
            }

            const actualData = req.body?.actualData;
            if (actualData === undefined) {
                res.status(400).json({ error: 'actualData is required' });
                return;
            }

            const updated = await workoutService.completeWorkout(userId, id, actualData);
            res.json(updated);
        } catch (err: any) {
            console.error('Error completing workout:', err);
            res.status(400).json({ error: err.message });
        }
    };

    public delete = async (
        req: AuthRequest<IdParams>,
        res: Response<void | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Workout id is required' });
                return;
            }

            await workoutService.deleteWorkout(userId, id);
            res.status(204).send();
        } catch (err: any) {
            console.error('Error deleting workout:', err);
            res.status(400).json({ error: err.message });
        }
    };

    public chat = async (
        req: AuthRequest<IdParams, WorkoutChatDto>,
        res: Response<{ reply: string; updatedPlan: WorkoutPlan | null; timestamp: string } | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Workout id is required' });
                return;
            }

            const message = req.body?.message;
            if (!message || typeof message !== 'string') {
                res.status(400).json({ error: 'message is required' });
                return;
            }

            const result = await workoutService.chatAboutWorkout(userId, id, message);
            res.json(result);
        } catch (err: any) {
            console.error('Error chatting about workout:', err);
            res.status(400).json({ error: err.message });
        }
    };

    public getChatMessages = async (
        req: AuthRequest<IdParams, unknown, { limit?: string }>,
        res: Response<Array<{ role: 'user' | 'ai'; text: string; timestamp: string }> | ErrorResponse>,
    ): Promise<void> => {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Workout id is required' });
                return;
            }

            const limitRaw = req.query?.limit;
            const limit = limitRaw ? Number(limitRaw) : 50;
            const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(200, limit)) : 50;

            const items = await workoutService.getWorkoutChatMessages(userId, id, safeLimit);
            res.json(items);
        } catch (err: any) {
            console.error('Error getting workout chat messages:', err);
            res.status(400).json({ error: err.message });
        }
    };
}

