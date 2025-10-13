import { JobApplicationRepository } from "../repositories/jobApplicationRepository";
import { JobApplicationStatus } from "../enums/jobApplicationStatus";
import {ApplicationResponse, UpdateApplicationRequest} from "../controllers/jobApplicationController";

function mapApplication(app: any): ApplicationResponse {
    return {
        id: app.id.toString(),
        status: app.status ?? "",
        company: app.company ?? "",
        role: app.role ?? "",
        link: app.link ?? undefined,
        contact: app.contact ?? undefined,
        schedule: app.schedule ?? undefined,
        description: app.description ?? undefined,
        notes: app.notes ?? undefined,
        createdAt: app.createdAt.toISOString(),
        updatedAt: app.updatedAt?.toISOString() ?? "",
    };
}

const repo = new JobApplicationRepository();

export class JobApplicationService {
    async getAll() {
        const apps = await repo.getAll();
        return apps.map(mapApplication);
    }

    async getById(id: bigint) {
        const app = await repo.getById(id);
        if (!app) throw new Error("Job application not found");
        return mapApplication(app);
    }

    async create(data: {
        status: string;
        company: string;
        role: string;
    }) {
        if (!Object.values(JobApplicationStatus).includes(data.status as JobApplicationStatus)) {
            throw new Error(`Invalid job application status: ${data.status}`);
        }

        const app = await repo.create({
            status: data.status as string,
            company: data.company,
            role: data.role,
        });
        return mapApplication(app);
    }

    async update(
        id: bigint,
        data: UpdateApplicationRequest
    ) {
        const app = await repo.update(id, {
            status: data.status as string,
            company: data.company,
            role: data.role,
            link: data.link ?? null,
            contact: data.contact ?? null,
            schedule: data.schedule ?? null,
            description: data.description ?? null,
            notes: data.notes ?? null,
        });
        return mapApplication(app);
    }


    async delete(id: bigint) {
        return repo.delete(id);
    }
}
