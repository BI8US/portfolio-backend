import { ResumeRepository } from "../repositories/resumeRepository";
import type {
    ResumeResponse,
    ResumeListItem,
    EducationItem,
    WorkExperienceItem,
    EducationDescriptionPoint, MediaLinkItem, ProjectItem, SkillItem, WorkExperienceDescriptionPoint
} from "../controllers/resumeController";
import {resumes} from "@prisma/client";

const repo = new ResumeRepository();

type FullResume = any;
type EducationWithPoints = any;
type WorkExperienceWithPoints = any;
type educationDescriptionPoints = any;
type workExperienceDescriptionPoints = any;
type mediaLinks = any;
type projects = any;
type skills = any;


function mapResumeToResponse(resume: FullResume): ResumeResponse {
    return {
        id: resume.id,
        resumeName: resume.resumeName,
        isActive: resume.isActive,
        fullName: resume.fullName || "",
        email: resume.email || "",
        phone: resume.phone || "",
        picture: resume.picture || "",
        summary: resume.summary || "",
        createdAt: resume.createdAt.toISOString(),
        updatedAt: resume.updatedAt.toISOString(),

        educations: (resume.educations || []).map((e: EducationWithPoints): EducationItem => ({
            id: e.id,
            school: e.school || "",
            educationName: e.educationName || "",
            startDate: e.startDate || "",
            endDate: e.endDate || "",
            descriptionPoints: (e.descriptionPoints || []).map((dp: educationDescriptionPoints): EducationDescriptionPoint => ({
                id: dp.id,
                educationEntityId: dp.educationEntityId,
                descriptionPoint: dp.descriptionPoint || ""
            })),
        })),

        mediaLinks: (resume.mediaLinks || []).map((m: mediaLinks): MediaLinkItem => ({
            id: m.id,
            name: m.name || "",
            link: m.link || ""
        })),
        projects: (resume.projects || []).map((p: projects): ProjectItem => ({
            id: p.id,
            title: p.title || "",
            subTitle: p.subTitle || "",
            description: p.description || "",
            media: p.media || ""
        })),
        skills: (resume.skills || []).map((s: skills): SkillItem => ({
            id: s.id,
            name: s.name || "",
            skillGroup: s.skillGroup || ""
        })),

        // 4. WorkExperiences (С вложенными точками)
        workExperiences: (resume.workExperiences || []).map((w: WorkExperienceWithPoints): WorkExperienceItem => ({
            id: w.id,
            company: w.company || "",
            position: w.position || "",
            startDate: w.startDate || "",
            endDate: w.endDate || "",
            descriptionPoints: (w.descriptionPoints || []).map((dp: workExperienceDescriptionPoints): WorkExperienceDescriptionPoint => ({
                id: dp.id,
                WorkExperienceEntityId: dp.WorkExperienceEntityId,
                descriptionPoint: dp.descriptionPoint || ""
            })),
        })),
    } as ResumeResponse;
}

export class ResumeService {

    async getAll(): Promise<ResumeListItem[]> {
        const resumes = await repo.getAll();
        return resumes.map(r => ({
            id: r.id.toString(),
            resumeName: r.resumeName,
            isActive: r.isActive,
            createdAt: r.createdAt.toISOString(),
            updatedAt: r.updatedAt.toISOString()
        }));
    }

    async getById(id: bigint): Promise<ResumeResponse> {
        const resume = await repo.getById(id);
        if (!resume) throw new Error("Resume not found");
        return mapResumeToResponse(resume);
    }

    async create(resumeName: string): Promise<ResumeResponse> {
        const created = await repo.create(resumeName);
        return mapResumeToResponse({ ...created, educations: [], mediaLinks: [], projects: [], skills: [], workExperiences: [] });
    }

    async updateHeader(id: bigint, data: Partial<ResumeResponse>): Promise<ResumeResponse> {
        const prismaData: Partial<Omit<resumes, 'id' | 'createdAt' | 'updatedAt'>> = {
            ...(data.resumeName !== undefined && { resumeName: data.resumeName }),
            ...(data.isActive !== undefined && { isActive: data.isActive }),
            fullName: data.fullName ?? null,
            email: data.email ?? null,
            phone: data.phone ?? null,
            picture: data.picture ?? null,
            summary: data.summary ?? null,
        };

        await repo.update(id, prismaData);

        if (data.isActive) {
            const all = await repo.getAll();
            await Promise.all(
                all
                    .filter(r => BigInt(r.id) !== id)
                    .map(r => repo.update(r.id, { isActive: false }))
            );
        }

        if (data.mediaLinks) {
            await this.updateChildList(id, data.mediaLinks, "mediaLinks");
        }

        return this.getById(id);
    }

    async updateChildList<T>(id: bigint, items: T[], listName: "educations" | "projects" | "skills" | "workExperiences" | "mediaLinks"): Promise<ResumeResponse> {
        await repo.clearChildList(listName, id);

        for (const item of items) {
            const { descriptionPoints, ...rest } = item as any;
            const childData: any = { ...rest, resumeId: id };
            if (descriptionPoints && descriptionPoints.length > 0) {
                childData.descriptionPoints = { create: descriptionPoints.map((dp: any) => ({ descriptionPoint: dp.descriptionPoint })) };
            }
            await repo.createChildItem(listName, childData);
        }

        return this.getById(id);
    }

    async delete(id: bigint): Promise<void> {
        await repo.delete(id);
    }

    async getActiveResume(): Promise<ResumeResponse> {
        const active = await repo.getActiveResume();
        if (!active) throw new Error("No active resume found");
        return mapResumeToResponse(active);
    }
}
