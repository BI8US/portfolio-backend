import { Request, Response } from "express";
import { ResumeService } from "../services/resumeService";

const resumeService = new ResumeService();

export class ResumeController {

    async getAllResumes(
        req: Request,
        res: Response<ResumeListItem[] | ErrorResponse>
    ): Promise<void> {
        try {
            const resumes = await resumeService.getAll();
            res.json(resumes);
        } catch (err) {
            console.error("❌ Error fetching resumes:", err);
            res.status(500).json({ error: "Failed to fetch resumes" });
        }
    }

    async getById(
        req: Request<{ id: string }>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID is required" });
                return;
            }

            const numericId = BigInt(id);
            const resume = await resumeService.getById(numericId);
            res.json(resume);
        } catch (err: any) {
            console.error("❌ Error getting resume by id:", err);
            res.status(404).json({ error: err.message });
        }
    }

    async create(
        req: Request<{}, {}, CreateResumeRequest>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const { resumeName } = req.body;
            if (!resumeName) {
                res.status(400).json({ error: "resumeName is required and must be a string" });
                return;
            }

            const createdResume = await resumeService.create(resumeName);
            res.status(201).json(createdResume);
        } catch (err) {
            console.error("❌ Error creating resume:", err);
            res.status(500).json({ error: "Failed to create resume" });
        }
    }

    async updateHeader(
        req: Request<{ id: string }, {}, UpdateHeaderRequest>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID is required" });
                return;
            }

            const numericId = BigInt(id);
            const updatedResume = await resumeService.updateHeader(numericId, req.body);
            res.json(updatedResume);
        } catch (error) {
            console.error("❌ Error updating resume header:", error);
            res.status(500).json({ message: "Error updating resume header" });
        }
    }

    async updateEducations(
        req: Request<{ id: string }, {}, EducationItem[]>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        await this.handleChildListUpdate(req, res, "educations");
    }

    async updateProjects(
        req: Request<{ id: string }, {}, ProjectItem[]>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        await this.handleChildListUpdate(req, res, "projects");
    }

    async updateSkills(
        req: Request<{ id: string }, {}, SkillItem[]>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        await this.handleChildListUpdate(req, res, "skills");
    }

    async updateWorkExperiences(
        req: Request<{ id: string }, {}, WorkExperienceItem[]>,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        await this.handleChildListUpdate(req, res, "workExperiences");
    }

    private async handleChildListUpdate<T>(
        req: Request<{ id: string }, {}, T[]>,
        res: Response<ResumeResponse | ErrorResponse>,
        field: "educations" | "projects" | "skills" | "workExperiences"
    ): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID is required" });
                return;
            }

            const numericId = BigInt(id);

            const items = req.body;
            if (!Array.isArray(items)) {
                res.status(400).json({ error: "Invalid body: expected an array" });
                return;
            }

            const updatedResume = await resumeService.updateChildList(
                numericId,
                items,
                field
            );

            res.json(updatedResume);
        } catch (error: any) {
            console.error(`❌ Error updating ${field}:`, error);
            res.status(500).json({ message: `Error updating ${field}` });
        }
    }

    async delete(req: Request<{ id: string }>, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID is required" });
                return;
            }
            const numericId = BigInt(id);
            await resumeService.delete(numericId);
            res.status(204).send();
        } catch (error: any) {
            console.error("❌ Error deleting resume:", error);
            if (error.code === "P2025") {
                res.status(404).json({ message: "Resume not found" });
            } else {
                res.status(500).json({ message: "Error deleting resume" });
            }
        }
    }

    async getActiveResume(
        req: Request,
        res: Response<ResumeResponse | ErrorResponse>
    ): Promise<void> {
        try {
            const activeResume = await resumeService.getActiveResume();
            res.json(activeResume);
        } catch (err: any) {
            console.error("❌ Error getting active resume:", err);
            res.status(404).json({ error: err.message });
        }
    }
}

interface ErrorResponse {
    error?: string;
    message?: string;
}

export interface ResumeListItem {
    id: string;
    resumeName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

interface CreateResumeRequest {
    resumeName: string;
}

interface UpdateHeaderRequest {
    id?: string;
    resumeName?: string;
    isActive?: boolean;
    fullName?: string;
    email?: string;
    phone?: string;
    picture?: string;
    summary?: string;
    mediaLinks?: MediaLinkItem[];
}

export interface ResumeResponse {
    id: string;
    resumeName: string;
    isActive: boolean;
    fullName?: string;
    email?: string;
    phone?: string;
    picture?: string;
    summary?: string;
    createdAt: string;
    updatedAt: string;
    educations: EducationItem[];
    mediaLinks: MediaLinkItem[];
    projects: ProjectItem[];
    skills: SkillItem[];
    workExperiences: WorkExperienceItem[];
}

export interface EducationItem {
    id: string;
    school: string;
    educationName: string;
    startDate: string;
    endDate: string;
    descriptionPoints: EducationDescriptionPoint[];
}

export interface EducationDescriptionPoint {
    id: string;
    educationEntityId: string;
    descriptionPoint: string;
}

export interface MediaLinkItem {
    id: string;
    name: string;
    link: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    media: string;
}

export interface SkillItem {
    id: string;
    name: string;
    skillGroup: string;
}

export interface WorkExperienceItem {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    descriptionPoints: WorkExperienceDescriptionPoint[];
}

export interface WorkExperienceDescriptionPoint {
    id: string;
    WorkExperienceEntityId: string;
    descriptionPoint: string;
}


