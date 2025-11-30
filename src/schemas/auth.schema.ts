import { z } from 'zod';

export const registerSchema = z.object({
    body: z.object({
        userName: z.string().min(3, 'Username should be longer than 3'),
        email: z.email('Invalid email address'),
        password: z.string().min(6, 'Password should be at least 6 characters'),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        userName: z.string().min(1, 'Username is required'),
        password: z.string().min(1, 'Password is required'),
    }),
});

export type RegisterDto = z.infer<typeof registerSchema>['body'];
export type LoginDto = z.infer<typeof loginSchema>['body'];
