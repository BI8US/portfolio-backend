import { NextFunction, Request, Response } from 'express';
import { z, ZodError, ZodObject } from 'zod';

export const validate =
    (schema: ZodObject<any>) => (req: Request<any>, res: Response, next: NextFunction) => {
        try {
            const parsed = schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });

            if (parsed.body) req.body = parsed.body;
            if (parsed.params) req.params = parsed.params;

            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({
                    message: 'Validation failed.',
                    errors: z.treeifyError(error),
                });
            }

            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
