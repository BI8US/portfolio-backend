import type { Prisma, resumes } from '@prisma/client';

import prisma from '../prismaClient';

export interface DbResumeListItem {
    id: bigint;
    resumeName: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

type ChildListName = 'educations' | 'projects' | 'skills' | 'workExperiences' | 'mediaLinks';

export const fullResumeInclude = {
    educations: { include: { descriptionPoints: true } },
    mediaLinks: true,
    projects: true,
    skills: true,
    workExperiences: { include: { descriptionPoints: true } },
} satisfies Prisma.resumesInclude;

export type FullResume = Prisma.resumesGetPayload<{
    include: typeof fullResumeInclude;
}>;

export class ResumeRepository {
    async getAll(): Promise<DbResumeListItem[]> {
        return prisma.resumes.findMany({
            select: {
                id: true,
                resumeName: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    async getById(id: bigint): Promise<FullResume | null> {
        return prisma.resumes.findUnique({
            where: { id },
            include: fullResumeInclude,
        });
    }

    async create(resumeName: string) {
        return prisma.resumes.create({
            data: {
                resumeName,
                isActive: false,
                fullName: '',
                email: '',
                phone: '',
                picture: '/images/avatar.jpg',
                summary: '',
                location: null,
                intro: null,
            },
        });
    }

    async update(id: bigint, data: Partial<resumes>) {
        return prisma.resumes.update({ where: { id }, data });
    }

    async delete(id: bigint) {
        return prisma.resumes.delete({ where: { id } });
    }

    async getActiveResume(): Promise<FullResume | null> {
        return prisma.resumes.findFirst({
            where: { isActive: true },
            include: fullResumeInclude,
        });
    }

    async clearChildList(listName: ChildListName, resumeId: bigint) {
        type DeletableModel = {
            deleteMany: (args: { where: { resumeId: bigint } }) => Promise<Prisma.BatchPayload>;
        };

        const modelMap: Record<ChildListName, DeletableModel> = {
            educations: prisma.educations,
            projects: prisma.projects,
            skills: prisma.skills,
            workExperiences: prisma.workExperiences,
            mediaLinks: prisma.mediaLinks,
        };

        const model = modelMap[listName];

        return model.deleteMany({ where: { resumeId } });
    }

    async createEducationItem(data: Prisma.educationsCreateInput) {
        return prisma.educations.create({ data });
    }

    async createWorkExperienceItem(data: Prisma.workExperiencesCreateInput) {
        return prisma.workExperiences.create({ data });
    }

    async createProjectItem(data: Prisma.projectsCreateInput) {
        return prisma.projects.create({ data });
    }

    async createSkillItem(data: Prisma.skillsCreateInput) {
        return prisma.skills.create({ data });
    }

    async createMediaLinkItem(data: Prisma.mediaLinksCreateInput) {
        return prisma.mediaLinks.create({ data });
    }
}
