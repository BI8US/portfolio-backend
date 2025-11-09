import { JobApplicationRepository } from "../repositories/jobApplicationRepository";
import { jobApplications, Prisma } from "@prisma/client";
import { JobApplicationStatus } from "../enums/jobApplicationStatus";
import {ApplicationResponse} from "../controllers/jobApplicationController";
import { CreateApplicationDto, UpdateApplicationDto } from "../schemas/jobApplication.schema";

function mapToResponse(app: jobApplications): ApplicationResponse {
    return {
        id: app.id.toString(),
        status: app.status,
        company: app.company,
        role: app.role,
        createdAt: app.createdAt.toISOString(),
        updatedAt: app.updatedAt.toISOString(),
        ...(app.link && { link: app.link }),
        ...(app.contact && { contact: app.contact }),
        ...(app.schedule && { schedule: app.schedule }),
        ...(app.description && { description: app.description }),
        ...(app.notes && { notes: app.notes }),
    };
}

function cleanData<T extends CreateApplicationDto | UpdateApplicationDto>(data: T): Prisma.jobApplicationsUpdateInput {
    (Object.keys(data) as Array<keyof T>).forEach(key => {
        if (data[key] === undefined) {
            delete data[key];
        }
    });
    return data as Prisma.jobApplicationsUpdateInput;
}

const repo = new JobApplicationRepository();

export class JobApplicationService {
    async getAll() {
        const apps = await repo.getAll();
        return apps.map(app => ({
            id: app.id.toString(),
            status: app.status,
            company: app.company,
            role: app.role,
            createdAt: app.createdAt.toISOString(),
            updatedAt: app.updatedAt.toISOString()
        }));
    }

    async getById(id: bigint) {
        const app = await repo.getById(id);
        if (!app) throw new Error("Job application not found");
        return mapToResponse(app);
    }

    async create(data: CreateApplicationDto) {
        if (!Object.values(JobApplicationStatus).includes(data.status as JobApplicationStatus)) {
            throw new Error(`Invalid job application status: ${data.status}`);
        }
        const cleanedData = cleanData(data);
        const app = await repo.create(cleanedData as Prisma.jobApplicationsCreateInput);
        return mapToResponse(app);
    }

    async update(
        id: bigint,
        data: UpdateApplicationDto
    ) {
        const cleanedData = cleanData(data);
        const app = await repo.update(id, cleanedData);
        return mapToResponse(app);
    }


    async delete(id: bigint) {
        return repo.delete(id);
    }
}
