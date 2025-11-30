import { resumes } from '@prisma/client';

import type {
    EducationDescriptionPoint,
    EducationItem,
    MediaLinkItem,
    ProjectItem,
    ResumeListItem,
    ResumeResponse,
    SkillItem,
    WorkExperienceDescriptionPoint,
    WorkExperienceItem,
} from '../controllers/resumeController';
import { FullResume, ResumeRepository } from '../repositories/resumeRepository';
import { CreateResumeDto, UpdateHeaderDto } from '../schemas/resume.schema';

const repo = new ResumeRepository();

function mapResumeToResponse(resume: FullResume): ResumeResponse {
    return {
        id: resume.id.toString(),
        resumeName: resume.resumeName,
        isActive: resume.isActive,

        fullName: resume.fullName || '',
        email: resume.email || '',
        phone: resume.phone || '',
        picture: resume.picture || '',
        summary: resume.summary || '',
        location: resume.location || '',
        intro: resume.intro || '',

        createdAt: resume.createdAt.toISOString(),
        updatedAt: resume.updatedAt.toISOString(),

        educations: (resume.educations || []).map(
            (e): EducationItem => ({
                id: e.id.toString(),
                school: e.school || '',
                educationName: e.educationName || '',
                startDate: e.startDate || '',
                endDate: e.endDate || '',
                descriptionPoints: (e.descriptionPoints || []).map(
                    (dp): EducationDescriptionPoint => ({
                        id: dp.id.toString(),
                        educationEntityId: dp.educationEntityId.toString(),
                        descriptionPoint: dp.descriptionPoint || '',
                    }),
                ),
            }),
        ),

        mediaLinks: (resume.mediaLinks || []).map(
            (m): MediaLinkItem => ({
                id: m.id.toString(),
                name: m.name || '',
                link: m.link || '',
            }),
        ),

        projects: (resume.projects || []).map(
            (p): ProjectItem => ({
                id: p.id.toString(),
                title: p.title || '',
                subTitle: p.subTitle || '',
                description: p.description || '',
                media: p.media || '',
            }),
        ),

        skills: (resume.skills || []).map(
            (s): SkillItem => ({
                id: s.id.toString(),
                name: s.name || '',
                skillGroup: s.skillGroup || '',
            }),
        ),

        workExperiences: (resume.workExperiences || []).map(
            (w): WorkExperienceItem => ({
                id: w.id.toString(),
                company: w.company || '',
                position: w.position || '',
                startDate: w.startDate || '',
                endDate: w.endDate || '',
                descriptionPoints: (w.descriptionPoints || []).map(
                    (dp): WorkExperienceDescriptionPoint => ({
                        id: dp.id.toString(),
                        workExperienceEntityId: dp.workExperienceEntityId.toString(),
                        descriptionPoint: dp.descriptionPoint || '',
                    }),
                ),
            }),
        ),
    } as ResumeResponse;
}

function cleanHeaderData(data: Omit<UpdateHeaderDto, 'mediaLinks'>): Partial<resumes> {
    (Object.keys(data) as Array<keyof typeof data>).forEach((key) => {
        if (data[key] === undefined) {
            delete data[key];
        }
    });
    return data as Partial<resumes>;
}

export class ResumeService {
    async getAll(): Promise<ResumeListItem[]> {
        const resumes = await repo.getAll();
        return resumes.map((r) => ({
            id: r.id.toString(),
            resumeName: r.resumeName,
            isActive: r.isActive,
            createdAt: r.createdAt.toISOString(),
            updatedAt: r.updatedAt.toISOString(),
        }));
    }

    async getById(id: bigint): Promise<ResumeResponse> {
        const resume = await repo.getById(id);
        if (!resume) throw new Error('Resume not found');
        return mapResumeToResponse(resume);
    }

    async create(data: CreateResumeDto): Promise<ResumeResponse> {
        const created = await repo.create(data.resumeName);
        return mapResumeToResponse({
            ...created,
            educations: [],
            mediaLinks: [],
            projects: [],
            skills: [],
            workExperiences: [],
        });
    }

    async updateHeader(id: bigint, data: UpdateHeaderDto): Promise<ResumeResponse> {
        const { mediaLinks, ...headerData } = data;
        const cleanedHeaderData = cleanHeaderData(headerData);
        await repo.update(id, cleanedHeaderData);
        if (data.isActive) {
            const all = await repo.getAll();
            await Promise.all(
                all
                    .filter((r) => r.id.toString() !== id.toString())
                    .map((r) => repo.update(r.id, { isActive: false })),
            );
        }
        if (mediaLinks) {
            await this.updateMediaLinks(id, mediaLinks);
        }

        return this.getById(id);
    }

    private async updateMediaLinks(resumeId: bigint, items: MediaLinkItem[]) {
        await repo.clearChildList('mediaLinks', resumeId);
        for (const item of items) {
            const { id, ...rest } = item;
            const data = {
                ...rest,
                resume: {
                    connect: { id: resumeId },
                },
            };
            await repo.createMediaLinkItem(data);
        }
    }

    async updateEducations(resumeId: bigint, items: EducationItem[]): Promise<void> {
        await repo.clearChildList('educations', resumeId);

        for (const item of items) {
            const { id, descriptionPoints, ...rest } = item;
            const data = {
                ...rest,
                descriptionPoints: {
                    create: descriptionPoints.map((dp) => ({
                        descriptionPoint: dp.descriptionPoint,
                    })),
                },
                resume: {
                    connect: { id: resumeId },
                },
            };
            await repo.createEducationItem(data);
        }
    }

    async updateWorkExperiences(resumeId: bigint, items: WorkExperienceItem[]): Promise<void> {
        await repo.clearChildList('workExperiences', resumeId);

        for (const item of items) {
            const { id, descriptionPoints, ...rest } = item;
            const data = {
                ...rest,
                descriptionPoints: {
                    create: descriptionPoints.map((dp) => ({
                        descriptionPoint: dp.descriptionPoint,
                    })),
                },
                resume: {
                    connect: { id: resumeId },
                },
            };
            await repo.createWorkExperienceItem(data);
        }
    }

    async updateProjects(resumeId: bigint, items: ProjectItem[]): Promise<void> {
        await repo.clearChildList('projects', resumeId);

        for (const item of items) {
            const { id, ...rest } = item;
            const data = {
                ...rest,
                resume: {
                    connect: { id: resumeId },
                },
            };
            await repo.createProjectItem(data);
        }
    }

    async updateSkills(resumeId: bigint, items: SkillItem[]): Promise<void> {
        await repo.clearChildList('skills', resumeId);

        for (const item of items) {
            const { id, ...rest } = item;
            const data = {
                ...rest,
                resume: {
                    connect: { id: resumeId },
                },
            };
            await repo.createSkillItem(data);
        }
    }

    async delete(id: bigint): Promise<void> {
        await repo.delete(id);
    }

    async getActiveResume(): Promise<ResumeResponse> {
        const active = await repo.getActiveResume();
        if (!active) throw new Error('No active resume found');
        return mapResumeToResponse(active);
    }
}
