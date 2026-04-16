import { Prisma, jobApplications } from '@prisma/client';

import { JobApplicationStatus } from '../enums/jobApplicationStatus';
import { JobApplicationRepository } from '../repositories/jobApplicationRepository';
import type {
    CreateApplicationDto,
    JobApplicationListItem,
    JobApplicationListQuery,
    UpdateApplicationDto,
} from '../types/jobApplication';

const repo = new JobApplicationRepository();

export class JobApplicationService {

    async getAll(query?: JobApplicationListQuery): Promise<JobApplicationListItem[]> {
        const apps = await repo.getAll(query);
        return apps.map((app) => ({
            id: app.id,
            status: app.status,
            company: app.company,
            role: app.role,
            createdAt: app.createdAt.toISOString(),
            updatedAt: app.updatedAt.toISOString(),
        }));
    }

    async getById(id: number): Promise<jobApplications> {
        const app = await repo.getById(id);
        if (!app) throw new Error('Job application not found');
        return app;
    }

    async create(data: CreateApplicationDto): Promise<jobApplications> {
        if (!Object.values(JobApplicationStatus).includes(data.status as JobApplicationStatus)) {
            throw new Error(`Invalid job application status: ${data.status}`);
        }

        return await repo.create(data as Prisma.jobApplicationsCreateInput);
    }

    async update(id: number, data: UpdateApplicationDto): Promise<jobApplications> {
        return await repo.update(id, data as Prisma.jobApplicationsUpdateInput);
    }

    async delete(id: number): Promise<jobApplications> {
        return await repo.delete(id);
    }
}