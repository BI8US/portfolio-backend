import { z } from 'zod';

const params = z.object({
    id: z.string().transform((val, ctx) => {
        try {
            return BigInt(val);
        } catch (e) {
            ctx.addIssue({ code: 'custom', message: 'ID must be a valid number' });
            return z.NEVER;
        }
    }),
});

const nullableString = z
    .string()
    .nullish()
    .transform((val) => val ?? null);

const educationDescriptionPointSchema = z.object({
    id: z.string().optional(),
    educationEntityId: z.string(),
    descriptionPoint: z.string(),
});

const workExperienceDescriptionPointSchema = z.object({
    id: z.string().optional(),
    workExperienceEntityId: z.string(),
    descriptionPoint: z.string(),
});

const mediaLinkSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    link: z.string(),
});

const projectSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    subTitle: z.string(),
    description: z.string(),
    media: z.string(),
});

const skillSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    skillGroup: z.string(),
});

const educationSchema = z.object({
    id: z.string().optional(),
    school: z.string(),
    educationName: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    descriptionPoints: z.array(educationDescriptionPointSchema),
});

const workExperienceSchema = z.object({
    id: z.string().optional(),
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    descriptionPoints: z.array(workExperienceDescriptionPointSchema),
});

export const getOrDeleteResumeSchema = z.object({
    params,
});

export const createResumeSchema = z.object({
    body: z.object({
        resumeName: z.string().min(1, 'Resume name is required'),
    }),
});

export const updateHeaderSchema = z.object({
    params,
    body: z
        .object({
            resumeName: z.string().min(1),
            isActive: z.boolean(),
            fullName: nullableString,
            email: nullableString,
            phone: nullableString,
            picture: nullableString,
            summary: nullableString,
            location: nullableString,
            intro: nullableString,
            mediaLinks: z.array(mediaLinkSchema),
        })
        .partial(),
});

export const updateEducationsSchema = z.object({
    params,
    body: z.array(educationSchema),
});

export const updateProjectsSchema = z.object({
    params,
    body: z.array(projectSchema),
});

export const updateSkillsSchema = z.object({
    params,
    body: z.array(skillSchema),
});

export const updateWorkExperiencesSchema = z.object({
    params,
    body: z.array(workExperienceSchema),
});

export type ResumeParams = z.output<typeof params>;
export type CreateResumeDto = z.infer<typeof createResumeSchema>['body'];
export type UpdateHeaderDto = z.infer<typeof updateHeaderSchema>['body'];
export type UpdateEducationsDto = z.infer<typeof updateEducationsSchema>['body'];
export type UpdateProjectsDto = z.infer<typeof updateProjectsSchema>['body'];
export type UpdateSkillsDto = z.infer<typeof updateSkillsSchema>['body'];
export type UpdateWorkExperiencesDto = z.infer<typeof updateWorkExperiencesSchema>['body'];
