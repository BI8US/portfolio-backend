import type { Prisma, resumes } from '@prisma/client';

import prisma from '../prismaClient';
import type {
    ResumeListQuery,
    EducationItem,
    MediaLinkItem,
    ProjectItem,
    WorkExperienceItem,
    SkillGroupItem
} from '../types/resume';

export const fullResumeInclude = {
    educations: { orderBy: { sortOrder: 'asc' } },
    mediaLinks: { orderBy: { sortOrder: 'asc' } },
    projects: { orderBy: { sortOrder: 'asc' } },
    workExperiences: { orderBy: { sortOrder: 'asc' } },
    skillGroups: {
        orderBy: { sortOrder: 'asc' },
        include: {
            skills: { orderBy: { sortOrder: 'asc' } }
        }
    }
} satisfies Prisma.resumesInclude;

export type FullResume = Prisma.resumesGetPayload<{
    include: typeof fullResumeInclude;
}>;

export class ResumeRepository {
    async getAll({ sortBy = 'updatedAt', sortDirection = 'desc' }: ResumeListQuery = {}) {
        return prisma.resumes.findMany({
            select: {
                id: true,
                resumeName: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { [sortBy]: sortDirection },
        });
    }

    async getById(id: number): Promise<FullResume | null> {
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

    async update(id: number, data: Partial<resumes>) {
        return prisma.resumes.update({ where: { id }, data });
    }

    async delete(id: number) {
        return prisma.resumes.delete({ where: { id } });
    }

    async getActiveResume(): Promise<FullResume | null> {
        return prisma.resumes.findFirst({
            where: { isActive: true },
            include: fullResumeInclude,
        });
    }


    async syncEducations(resumeId: number, items: EducationItem[]) {
        const incomingIds = items.map(i => i.id).filter(id => id !== undefined) as number[];
        await prisma.$transaction(async (tx) => {
            await tx.educations.deleteMany({ where: { resumeId, id: { notIn: incomingIds } } });
            for (const item of items) {
                if (item.id) {
                    await tx.educations.update({ where: { id: item.id }, data: { school: item.school, educationName: item.educationName, startDate: item.startDate, endDate: item.endDate, description: item.description, sortOrder: item.sortOrder } });
                } else {
                    await tx.educations.create({ data: { resumeId, school: item.school, educationName: item.educationName, startDate: item.startDate, endDate: item.endDate, description: item.description, sortOrder: item.sortOrder } });
                }
            }
        });
    }

    async syncProjects(resumeId: number, items: ProjectItem[]) {
        const incomingIds = items.map(i => i.id).filter(id => id !== undefined) as number[];
        await prisma.$transaction(async (tx) => {
            await tx.projects.deleteMany({ where: { resumeId, id: { notIn: incomingIds } } });
            for (const item of items) {
                if (item.id) {
                    await tx.projects.update({ where: { id: item.id }, data: { title: item.title, subTitle: item.subTitle, description: item.description, media: item.media, sortOrder: item.sortOrder } });
                } else {
                    await tx.projects.create({ data: { resumeId, title: item.title, subTitle: item.subTitle, description: item.description, media: item.media, sortOrder: item.sortOrder } });
                }
            }
        });
    }

    async syncWorkExperiences(resumeId: number, items: WorkExperienceItem[]) {
        const incomingIds = items.map(i => i.id).filter(id => id !== undefined) as number[];
        await prisma.$transaction(async (tx) => {
            await tx.workExperiences.deleteMany({ where: { resumeId, id: { notIn: incomingIds } } });
            for (const item of items) {
                if (item.id) {
                    await tx.workExperiences.update({ where: { id: item.id }, data: { company: item.company, position: item.position, startDate: item.startDate, endDate: item.endDate, description: item.description, sortOrder: item.sortOrder } });
                } else {
                    await tx.workExperiences.create({ data: { resumeId, company: item.company, position: item.position, startDate: item.startDate, endDate: item.endDate, description: item.description, sortOrder: item.sortOrder } });
                }
            }
        });
    }

    async syncMediaLinks(resumeId: number, items: MediaLinkItem[]) {
        const incomingIds = items.map(i => i.id).filter(id => id !== undefined) as number[];
        await prisma.$transaction(async (tx) => {
            await tx.mediaLinks.deleteMany({ where: { resumeId, id: { notIn: incomingIds } } });
            for (const item of items) {
                if (item.id) {
                    await tx.mediaLinks.update({ where: { id: item.id }, data: { name: item.name, link: item.link, sortOrder: item.sortOrder } });
                } else {
                    await tx.mediaLinks.create({ data: { resumeId, name: item.name, link: item.link, sortOrder: item.sortOrder } });
                }
            }
        });
    }

    async syncSkillGroups(resumeId: number, groups: SkillGroupItem[]) {
        const incomingGroupIds = groups.map(g => g.id).filter(id => id !== undefined) as number[];

        await prisma.$transaction(async (tx) => {
            await tx.skillGroups.deleteMany({
                where: { resumeId, id: { notIn: incomingGroupIds } }
            });

            for (const group of groups) {
                let currentGroupId = group.id;

                if (currentGroupId) {
                    await tx.skillGroups.update({ where: { id: currentGroupId }, data: { name: group.name, sortOrder: group.sortOrder } });
                } else {
                    const newGroup = await tx.skillGroups.create({ data: { resumeId, name: group.name, sortOrder: group.sortOrder } });
                    currentGroupId = newGroup.id;
                }

                const incomingSkillIds = group.skills.map(s => s.id).filter(id => id !== undefined) as number[];
                await tx.skills.deleteMany({
                    where: { skillGroupId: currentGroupId, id: { notIn: incomingSkillIds } }
                });

                for (const skill of group.skills) {
                    if (skill.id) {
                        await tx.skills.update({ where: { id: skill.id }, data: { name: skill.name, sortOrder: skill.sortOrder } });
                    } else {
                        await tx.skills.create({ data: { skillGroupId: currentGroupId, name: skill.name, sortOrder: skill.sortOrder } });
                    }
                }
            }
        });
    }
}