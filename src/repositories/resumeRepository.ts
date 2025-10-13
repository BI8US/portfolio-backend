import prisma from "../prismaClient";
import type {resumes} from "@prisma/client";

export interface DbResumeListItem {
    id: bigint;
    resumeName: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

type ChildListName = "educations" | "projects" | "skills" | "workExperiences" | "mediaLinks";

export class ResumeRepository {

    async getAll(): Promise<DbResumeListItem[]> {
        return prisma.resumes.findMany({
            select: {
                id: true,
                resumeName: true,
                isActive: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async getById(id: bigint) {
        return prisma.resumes.findUnique({
            where: { id },
            include: {
                educations: { include: { descriptionPoints: true } },
                mediaLinks: true,
                projects: true,
                skills: true,
                workExperiences: { include: { descriptionPoints: true } }
            }
        });
    }

    async create(resumeName: string) {
        return prisma.resumes.create({
            data: {
                resumeName,
                isActive: false,
                fullName: "",
                email: "",
                phone: "",
                picture: null,
                summary: "",
            }
        });
    }

    async update(id: bigint, data: Partial<resumes>) {
        return prisma.resumes.update({ where: { id }, data });
    }

    async delete(id: bigint) {
        return prisma.resumes.delete({ where: { id } });
    }

    async getActiveResume() {
        return prisma.resumes.findFirst({
            where: { isActive: true },
            include: {
                educations: { include: { descriptionPoints: true } },
                mediaLinks: true,
                projects: true,
                skills: true,
                workExperiences: { include: { descriptionPoints: true } }
            }
        });
    }

    async clearChildList(listName: ChildListName, resumeId: bigint) {
        const modelMap: Record<ChildListName, any> = {
            educations: prisma.educations,
            projects: prisma.projects,
            skills: prisma.skills,
            workExperiences: prisma.workExperiences,
            mediaLinks: prisma.mediaLinks
        };

        const model = modelMap[listName];

        return model.deleteMany({ where: { resumeId } });
    }

    async createChildItem(listName: ChildListName, data: any) {
        const modelMap: Record<ChildListName, any> = {
            educations: prisma.educations,
            projects: prisma.projects,
            skills: prisma.skills,
            workExperiences: prisma.workExperiences,
            mediaLinks: prisma.mediaLinks
        };

        const model = modelMap[listName];

        return model.create({ data });
    }
}
