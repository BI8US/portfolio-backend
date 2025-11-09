import { z } from 'zod';

const params = z.object({
    id: z.string().transform((val, ctx) => {
        try {
            return BigInt(val);
        } catch (e) {
            ctx.addIssue({
                code: "custom",
                message: 'ID must be a valid number',
            });
            return z.NEVER;
        }
    }),
});

const nullableString = z.string().nullish();

export const createApplicationSchema = z.object({
    body: z.object({
        status: z.string().min(1, "Status is required"),
        company: z.string().min(1, "Company is required"),
        role: z.string().min(1, "Role is required"),
        link: nullableString.optional(),
        contact: nullableString.optional(),
        schedule: nullableString.optional(),
        description: nullableString.optional(),
        notes: nullableString.optional(),
    })
});

export const updateApplicationSchema = z.object({
    params,
    body: z.object({
        status: z.string().min(1),
        company: z.string().min(1),
        role: z.string().min(1),
        link: nullableString,
        contact: nullableString,
        schedule: nullableString,
        description: nullableString,
        notes: nullableString,
    }).partial()
});

export const getOrDeleteApplicationSchema = z.object({
    params,
});

export type CreateApplicationDto = z.infer<typeof createApplicationSchema>['body'];
export type UpdateApplicationDto = z.infer<typeof updateApplicationSchema>['body'];
export type ApplicationParams = z.output<typeof getOrDeleteApplicationSchema>['params'];