import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { userName, email, password } = req.body;

            if (!userName || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const token = await authService.register(userName, email, password);
            return res.status(201).json({ token });
        } catch (err: any) {
            console.error("❌ Register error:", err);
            return res.status(400).json({ error: err.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const userName = req.body.username as string;
            const password = req.body.password as string;
            if (!userName || !password) {
                return res.status(400).json({ message: "Username and password are required" });
            }

            const token = await authService.login(userName as unknown as string, password as unknown as string);
            console.log("✅ Login successful for:", userName);
            return res.status(200).json({ token });
        } catch (err: any) {
            console.error("❌ Login error:", err);
            return res.status(401).json({ error: err.message });
        }
    }
}
