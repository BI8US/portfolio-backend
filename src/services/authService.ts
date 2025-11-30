import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UserRepository } from '../repositories/userRepository';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) || 86400;

const userRepository = new UserRepository();

export class AuthService {
    async login(userName: string, password: string): Promise<string> {
        const user = await userRepository.findByUserName(userName);
        if (!user || !user.password) throw new Error('Invalid username or password');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Invalid username or password');

        return this.generateToken(user.id, user.userName, user.role);
    }

    async register(userName: string, email: string, password: string): Promise<string> {
        const existingUser = await userRepository.findByUserNameOrEmail(userName, email);
        if (existingUser) throw new Error('Username or email already exists');

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userRepository.createUser({
            userName,
            email,
            password: hashedPassword,
            role: 'USER',
            isActive: true,
            createdAt: new Date(),
        });

        return this.generateToken(newUser.id, newUser.userName, newUser.role);
    }

    private generateToken(id: bigint, userName: string, role: string): string {
        return jwt.sign({ id: id.toString(), userName, role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
    }
}
