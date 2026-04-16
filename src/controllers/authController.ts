import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { AuthService } from '../services/authService';
import type { LoginDto, RegisterDto } from '../types/auth';

const authService = new AuthService();

export class AuthController {

    public register = async (req: Request<ParamsDictionary, any, RegisterDto>, res: Response) => {
        try {
            const { userName, email, password } = req.body;
            const token = await authService.register(userName, email, password);
            return res.status(201).json({ token });
        } catch (err: any) {
            console.error('Register error:', err);
            return res.status(400).json({ error: err.message });
        }
    };

    public login = async (req: Request<ParamsDictionary, any, LoginDto>, res: Response) => {
        try {
            const { userName, password } = req.body;
            const token = await authService.login(userName, password);
            return res.status(200).json({ token });
        } catch (err: any) {
            return res.status(401).json({ error: err.message });
        }
    };
}