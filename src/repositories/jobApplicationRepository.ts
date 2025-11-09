import prisma from "../prismaClient";
import { Prisma } from "@prisma/client";

export class JobApplicationRepository {
    async getAll() {
        return prisma.jobApplications.findMany({
            select: {
                id: true,
                status: true,
                company: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { createdAt: "desc" },
        });
    }

    async getById(id: bigint) {
        return prisma.jobApplications.findUnique({ where: { id } });
    }

    async create(data: Prisma.jobApplicationsCreateInput) {
        return prisma.jobApplications.create({
            data: data
        });
    }

    async update(
        id: bigint,
        data: Prisma.jobApplicationsUpdateInput
    ) {
        return prisma.jobApplications.update({
            where: { id },
            data: data
        });
    }

    async delete(id: bigint) {
        return prisma.jobApplications.delete({ where: { id } });
    }
}
