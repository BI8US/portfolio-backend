import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { jobApplications } from '@prisma/client';

import { JobApplicationService } from '../services/jobApplicationService';
import type { ErrorResponse } from '../types/common';
import type {
    ApplicationParams,
    CreateApplicationDto,
    JobApplicationListItem,
    JobApplicationListQuery,
    UpdateApplicationDto,
} from '../types/jobApplication';

const jobApplicationService = new JobApplicationService();

function parseApplicationId(id: string): number {
    const parsedId = Number(id);
    if (!Number.isInteger(parsedId) || parsedId <= 0) {
        throw new Error('Invalid job application id');
    }

    return parsedId;
}

export class JobApplicationController {

    public getAllApplications = async (
        req: Request<ParamsDictionary, unknown, unknown, JobApplicationListQuery>,
        res: Response<JobApplicationListItem[] | ErrorResponse>,
    ): Promise<void> => {
        try {
            const applications = await jobApplicationService.getAll(req.query);
            res.json(applications);
        } catch (err) {
            console.error('Error fetching job applications:', err);
            res.status(500).json({ error: 'Failed to fetch job applications' });
        }
    };

    public getById = async (
        req: Request<ApplicationParams>,
        res: Response<jobApplications | ErrorResponse>,
    ): Promise<void> => {
        try {
            const application = await jobApplicationService.getById(parseApplicationId(req.params.id));
            res.json(application);
        } catch (err: any) {
            console.error('Error getting job application by id:', err);
            res.status(404).json({ error: err.message });
        }
    };

    public create = async (
        req: Request<ParamsDictionary, any, CreateApplicationDto>,
        res: Response<jobApplications | ErrorResponse>,
    ): Promise<void> => {
        try {
            const app = await jobApplicationService.create(req.body);
            res.status(201).json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public update = async (
        req: Request<ApplicationParams, any, UpdateApplicationDto>,
        res: Response<jobApplications | ErrorResponse>, // <-- Используем тип Prisma
    ): Promise<void> => {
        try {
            const app = await jobApplicationService.update(parseApplicationId(req.params.id), req.body);
            res.json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public delete = async (
        req: Request<ApplicationParams>,
        res: Response<ErrorResponse | void>,
    ): Promise<void> => {
        try {
            await jobApplicationService.delete(parseApplicationId(req.params.id));
            res.status(204).send();
        } catch (err: any) {
            console.error('Error deleting job application:', err);
            res.status(404).json({ error: err.message });
        }
    };
}