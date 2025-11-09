import { Request, Response } from "express";
import { JobApplicationService } from "../services/jobApplicationService";
import {
    CreateApplicationDto,
    UpdateApplicationDto,
    ApplicationParams
} from "../schemas/jobApplication.schema";
import {ParamsDictionary} from "express-serve-static-core";

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
        req: Request<ApplicationParams>,
        res: Response<ApplicationResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const { id } = req.params;
            const application = await jobApplicationService.getById(id);
            res.json(application);
        } catch (err: any) {
            console.error("❌ Error getting job application by id:", err);
            res.status(404).json({ error: err.message });
        }
    }

    async create(
        req: Request<ParamsDictionary, any, CreateApplicationDto>,
        res: Response<ApplicationResponse | ErrorResponse>)
    {
        try {
            const app = await jobApplicationService.create(req.body);
            res.json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(
        req: Request<ApplicationParams, any, UpdateApplicationDto>,
        res: Response<ApplicationResponse | ErrorResponse>)
    {
        try {
            const { id } = req.params;
            const app = await jobApplicationService.update(id, req.body);
            res.json(app);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(
        req: Request<ApplicationParams>,
        res: Response<ErrorResponse | void>
    ): Promise<void> {
        try {
            const { id } = req.params;
            await jobApplicationService.delete(id);
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
