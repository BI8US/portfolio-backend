import { Prisma } from '@prisma/client';

import prisma from '../prismaClient';
import type { JobApplicationListQuery } from '../types/jobApplication';

export class JobApplicationRepository {
    async getAll({ sortBy = 'createdAt', sortDirection = 'desc' }: JobApplicationListQuery = {}) {
        return prisma.jobApplications.findMany({
            select: {
                id: true,
                status: true,
                company: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { [sortBy]: sortDirection },
        });
    }

    async getById(id: number) {
        return prisma.jobApplications.findUnique({ where: { id } });
    }

    async create(data: Prisma.jobApplicationsCreateInput) {
        return prisma.jobApplications.create({
            data: data,
        });
    }

    async update(id: number, data: Prisma.jobApplicationsUpdateInput) {
        return prisma.jobApplications.update({
            where: { id },
            data: data,
        });
    }

    async delete(id: number) {
        return prisma.jobApplications.delete({ where: { id } });
    }
}
