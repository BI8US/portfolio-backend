import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import {
    CreateResumeDto,
    ResumeParams,
    UpdateEducationsDto,
    UpdateHeaderDto,
    UpdateProjectsDto,
    UpdateSkillsDto,
    UpdateWorkExperiencesDto,
} from '../schemas/resume.schema';
import { ResumeService } from '../services/resumeService';

const resumeService = new ResumeService();

export class ResumeController {
    async getAllResumes(
        req: Request,
        res: Response<ResumeListItem[] | ErrorResponse>,
    ): Promise<void> {
        try {
            const resumes = await resumeService.getAll();
            res.json(resumes);
        } catch (err) {
            console.error('Error fetching resumes:', err);
            res.status(500).json({ error: 'Failed to fetch resumes' });
        }
    }

    async getById(
        req: Request<ResumeParams>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const resume = await resumeService.getById(id);
            res.json(resume);
        } catch (err: any) {
            console.error('Error getting resume by id:', err);
            res.status(404).json({ error: err.message });
        }
    }

    async create(
        req: Request<ParamsDictionary, any, CreateResumeDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const createdResume = await resumeService.create(req.body);
            res.status(201).json(createdResume);
        } catch (err) {
            console.error('Error creating resume:', err);
            res.status(500).json({ error: 'Failed to create resume' });
        }
    }

    async updateHeader(
        req: Request<ResumeParams, any, UpdateHeaderDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const updatedResume = await resumeService.updateHeader(id, req.body);
            res.json(updatedResume);
        } catch (error) {
            console.error('Error updating resume header:', error);
            res.status(500).json({ message: 'Error updating resume header' });
        }
    }

    async updateEducations(
        req: Request<ResumeParams, any, UpdateEducationsDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const items = req.body;
            await resumeService.updateEducations(id, items);
            const updatedResume = await resumeService.getById(id);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating educations:`, error);
            res.status(500).json({ message: `Error updating educations` });
        }
    }

    async updateProjects(
        req: Request<ResumeParams, any, UpdateProjectsDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const items = req.body;
            await resumeService.updateProjects(id, items);
            const updatedResume = await resumeService.getById(id);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating projects:`, error);
            res.status(500).json({ message: `Error updating projects` });
        }
    }

    async updateSkills(
        req: Request<ResumeParams, any, UpdateSkillsDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const items = req.body;
            await resumeService.updateSkills(id, items);
            const updatedResume = await resumeService.getById(id);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating skills:`, error);
            res.status(500).json({ message: `Error updating skills` });
        }
    }

    async updateWorkExperiences(
        req: Request<ResumeParams, any, UpdateWorkExperiencesDto>,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const { id } = req.params;
            const items = req.body;
            await resumeService.updateWorkExperiences(id, items);
            const updatedResume = await resumeService.getById(id);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating workExperiences:`, error);
            res.status(500).json({ message: `Error updating workExperiences` });
        }
    }

    async delete(req: Request<ResumeParams>, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await resumeService.delete(id);
            res.status(204).send();
        } catch (error: any) {
            console.error('Error deleting resume:', error);
            if (error.code === 'P2025') {
                res.status(404).json({ message: 'Resume not found' });
            } else {
                res.status(500).json({ message: 'Error deleting resume' });
            }
        }
    }

    async getActiveResume(
        req: Request,
        res: Response<ResumeResponse | ErrorResponse>,
    ): Promise<void> {
        try {
            const activeResume = await resumeService.getActiveResume();
            res.json(activeResume);
        } catch (err: any) {
            console.error('Error getting active resume:', err);
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

export interface ResumeResponse {
    id: string;
    resumeName: string;
    isActive: boolean;
    fullName?: string;
    email?: string;
    phone?: string;
    picture?: string;
    summary?: string;
    location?: string | undefined;
    intro?: string | undefined;
    createdAt: string;
    updatedAt: string;
    educations: EducationItem[];
    mediaLinks: MediaLinkItem[];
    projects: ProjectItem[];
    skills: SkillItem[];
    workExperiences: WorkExperienceItem[];
}

export interface EducationItem {
    id?: string | undefined;
    school: string;
    educationName: string;
    startDate: string;
    endDate: string;
    descriptionPoints: EducationDescriptionPoint[];
}

export interface EducationDescriptionPoint {
    id?: string | undefined;
    educationEntityId: string;
    descriptionPoint: string;
}

export interface MediaLinkItem {
    id?: string | undefined;
    name: string;
    link: string;
}

export interface ProjectItem {
    id?: string | undefined;
    title: string;
    subTitle: string;
    description: string;
    media: string;
}

export interface SkillItem {
    id?: string | undefined;
    name: string;
    skillGroup: string;
}

export interface WorkExperienceItem {
    id?: string | undefined;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    descriptionPoints: WorkExperienceDescriptionPoint[];
}

export interface WorkExperienceDescriptionPoint {
    id?: string | undefined;
    workExperienceEntityId: string;
    descriptionPoint: string;
}
