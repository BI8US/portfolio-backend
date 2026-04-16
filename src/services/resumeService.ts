import { resumes } from '@prisma/client';
import { FullResume, ResumeRepository } from '../repositories/resumeRepository';
import type {
    EducationItem,
    MediaLinkItem,
    ProjectItem,
    SkillGroupItem,
    WorkExperienceItem,
    CreateResumeDto,
    UpdateHeaderDto,
    ResumeListQuery, ResumeListItem,
} from '../types/resume';

const repo = new ResumeRepository();

function cleanHeaderData(data: Omit<UpdateHeaderDto, 'mediaLinks'>): Partial<resumes> {
    const cleaned = { ...data };
    (Object.keys(cleaned) as Array<keyof typeof cleaned>).forEach((key) => {
        if (cleaned[key] === undefined) {
            delete cleaned[key];
        }
    });
    return cleaned as Partial<resumes>;
}

export class ResumeService {
    async getAll(query?: ResumeListQuery): Promise<ResumeListItem[]> {
        const resumes = await repo.getAll(query);

        return resumes.map((r) => ({
            id: r.id,
            resumeName: r.resumeName,
            isActive: r.isActive,
            createdAt: r.createdAt.toISOString(),
            updatedAt: r.updatedAt.toISOString(),
        }));
    }

    async getById(id: number): Promise<FullResume> {
        const resume = await repo.getById(id);
        if (!resume) throw new Error('Resume not found');
        return resume;
    }

    async create(data: CreateResumeDto): Promise<FullResume> {
        const created = await repo.create(data.resumeName);
        return this.getById(created.id);
    }

    async updateHeader(id: number, data: UpdateHeaderDto): Promise<FullResume> {
        const { mediaLinks, ...headerData } = data;
        const cleanedHeaderData = cleanHeaderData(headerData);

        await repo.update(id, cleanedHeaderData);

        if (data.isActive) {
            const all = await repo.getAll();
            await Promise.all(
                all
                    .filter((r) => r.id !== id)
                    .map((r) => repo.update(r.id, { isActive: false })),
            );
        }

        if (mediaLinks) {
            await repo.syncMediaLinks(id, mediaLinks);
        }

        return this.getById(id);
    }

    async updateEducations(resumeId: number, items: EducationItem[]): Promise<void> {
        await repo.syncEducations(resumeId, items);
    }

    async updateWorkExperiences(resumeId: number, items: WorkExperienceItem[]): Promise<void> {
        await repo.syncWorkExperiences(resumeId, items);
    }

    async updateProjects(resumeId: number, items: ProjectItem[]): Promise<void> {
        await repo.syncProjects(resumeId, items);
    }

    async updateSkillGroups(resumeId: number, items: SkillGroupItem[]): Promise<void> {
        await repo.syncSkillGroups(resumeId, items);
    }

    async delete(id: number): Promise<void> {
        await repo.delete(id);
    }

    async getActiveResume(): Promise<FullResume> {
        const active = await repo.getActiveResume();
        if (!active) throw new Error('No active resume found');
        return active;
    }
}