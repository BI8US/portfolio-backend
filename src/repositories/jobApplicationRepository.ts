import prisma from "../prismaClient";
import { JobApplicationStatus } from "../enums/jobApplicationStatus";

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

    async create(data: {
        status: string;
        company: string;
        role: string;
    }) {
        return prisma.jobApplications.create({
            data: {
                status: data.status,
                company: data.company,
                role: data.role,
            }
        });
    }

    async update(
        id: bigint,
        data: {
            status: string;
            company: string;
            role: string;
            link?: string | null;
            contact?: string | null;
            schedule?: string | null;
            description?: string | null;
            notes?: string | null;
        }
    ) {
        return prisma.jobApplications.update({
            where: { id },
            data: {
                status: data.status,
                company: data.company,
                role: data.role,
                link: data.link ?? null,
                contact: data.contact ?? null,
                schedule: data.schedule ?? null,
                description: data.description ?? null,
                notes: data.notes ?? null,
            },
        });
    }

    async delete(id: bigint) {
        return prisma.jobApplications.delete({ where: { id } });
    }
}
