import { Request, Response } from "express";
import { JobApplicationService } from "../services/jobApplicationService";

const jobApplicationService = new JobApplicationService();

export class JobApplicationController {

    async getAllApplications(
        req: Request,
        res: Response<ApplicationListItem[] | ErrorResponse>
    ): Promise<void>  {
        try {
            const applications = await jobApplicationService.getAll();
            res.json(applications);
        } catch (err) {
            console.error("❌ Error fetching job applications:", err);
            res.status(500).json({ error: "Failed to fetch job applications" });
        }
    }

    async getById(
        req: Request<{ id: string }>,
        res: Response<ApplicationResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(404).json({ error: "ID is required" });
                return;
            }

            const numericId = BigInt(id);
            const resume= await jobApplicationService.getById(numericId);
            res.json(resume);
        } catch (err: any) {
            console.error("❌ Error getting job application by id:", err);
            res.status(404).json({ error: err.message });
        }
    }

    async create(req: Request<{}, {}, CreateApplicationRequest>, res: Response<ApplicationResponse | ErrorResponse>) {
        try {
            const app = await jobApplicationService.create(req.body);
            res.json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req: Request<{ id: string }, {}, UpdateApplicationRequest>, res: Response<ApplicationResponse | ErrorResponse>) {
        try {
            const numericId = BigInt(req.params.id);
            const app = await jobApplicationService.update(numericId, req.body);
            res.json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(
        req: Request<{ id: string }>,
        res: Response
    ): Promise<void> {
        try {
            const numericId = BigInt(req.params.id);
            await jobApplicationService.delete(numericId);
            res.status(204).send();
        } catch (err: any) {
            console.error("❌ Error deleting job application:", err);
            res.status(404).json({ error: err.message });
        }
    }

}

interface ErrorResponse {
    error?: string;
    message?: string;
}

export interface ApplicationResponse {
    id: string;
    link?: string;
    contact?: string;
    status: string;
    company: string;
    role: string;
    schedule?: string;
    description?: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

interface ApplicationListItem {
    id: string;
    status: string;
    company: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

interface CreateApplicationRequest {
    status: string;
    company: string;
    role: string;
}

export interface UpdateApplicationRequest {
    id?: string;
    link?: string;
    contact?: string;
    status: string;
    company: string;
    role: string;
    schedule?: string;
    description?: string;
    notes?: string;
}