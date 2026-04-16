import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { ResumeService } from '../services/resumeService';
import { FullResume } from '../repositories/resumeRepository';
import type { ErrorResponse } from '../types/common';
import type {
    CreateResumeDto,
    ResumeListItem,
    ResumeListQuery,
    ResumeParams,
    UpdateEducationsDto,
    UpdateHeaderDto,
    UpdateProjectsDto,
    UpdateSkillGroupsDto,
    UpdateWorkExperiencesDto,
} from '../types/resume';

const resumeService = new ResumeService();

function parseResumeId(id: string): number {
    const parsedId = Number(id);
    if (!Number.isInteger(parsedId) || parsedId <= 0) {
        throw new Error('Invalid resume id');
    }
    return parsedId;
}

export class ResumeController {

    public getAllResumes = async (
        req: Request<ParamsDictionary, unknown, unknown, ResumeListQuery>,
        res: Response<ResumeListItem[] | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resumes = await resumeService.getAll(req.query);
            res.json(resumes);
        } catch (err) {
            console.error('Error fetching resumes:', err);
            res.status(500).json({ error: 'Failed to fetch resumes' });
        }
    };

    public getById = async (
        req: Request<ResumeParams>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resume = await resumeService.getById(parseResumeId(req.params.id));
            res.json(resume);
        } catch (err: any) {
            console.error('Error getting resume by id:', err);
            res.status(404).json({ error: err.message });
        }
    };

    public create = async (
        req: Request<ParamsDictionary, any, CreateResumeDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const createdResume = await resumeService.create(req.body);
            res.status(201).json(createdResume);
        } catch (err) {
            console.error('Error creating resume:', err);
            res.status(500).json({ error: 'Failed to create resume' });
        }
    };

    public updateHeader = async (
        req: Request<ResumeParams, any, UpdateHeaderDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const updatedResume = await resumeService.updateHeader(parseResumeId(req.params.id), req.body);
            res.json(updatedResume);
        } catch (error) {
            console.error('Error updating resume header:', error);
            res.status(500).json({ message: 'Error updating resume header' });
        }
    };

    public updateEducations = async (
        req: Request<ResumeParams, any, UpdateEducationsDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resumeId = parseResumeId(req.params.id);
            await resumeService.updateEducations(resumeId, req.body);
            const updatedResume = await resumeService.getById(resumeId);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating educations:`, error);
            res.status(500).json({ message: `Error updating educations` });
        }
    };

    public updateProjects = async (
        req: Request<ResumeParams, any, UpdateProjectsDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resumeId = parseResumeId(req.params.id);
            await resumeService.updateProjects(resumeId, req.body);
            const updatedResume = await resumeService.getById(resumeId);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating projects:`, error);
            res.status(500).json({ message: `Error updating projects` });
        }
    };

    public updateSkillGroups = async (
        req: Request<ResumeParams, any, UpdateSkillGroupsDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resumeId = parseResumeId(req.params.id);
            await resumeService.updateSkillGroups(resumeId, req.body);
            const updatedResume = await resumeService.getById(resumeId);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating skill groups:`, error);
            res.status(500).json({ message: `Error updating skill groups` });
        }
    };

    public updateWorkExperiences = async (
        req: Request<ResumeParams, any, UpdateWorkExperiencesDto>,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const resumeId = parseResumeId(req.params.id);
            await resumeService.updateWorkExperiences(resumeId, req.body);
            const updatedResume = await resumeService.getById(resumeId);
            res.json(updatedResume);
        } catch (error: any) {
            console.error(`Error updating workExperiences:`, error);
            res.status(500).json({ message: `Error updating workExperiences` });
        }
    };

    public delete = async (req: Request<ResumeParams>, res: Response): Promise<void> => {
        try {
            await resumeService.delete(parseResumeId(req.params.id));
            res.status(204).send();
        } catch (error: any) {
            console.error('Error deleting resume:', error);
            if (error.code === 'P2025') {
                res.status(404).json({ message: 'Resume not found' });
            } else {
                res.status(500).json({ message: 'Error deleting resume' });
            }
        }
    };

    public getActiveResume = async (
        req: Request,
        res: Response<FullResume | ErrorResponse>,
    ): Promise<void> => {
        try {
            const activeResume = await resumeService.getActiveResume();
            res.json(activeResume);
        } catch (err: any) {
            console.error('Error getting active resume:', err);
            res.status(404).json({ error: err.message });
        }
    };
}