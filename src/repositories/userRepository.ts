import prisma from "../prismaClient";

export interface CreateUserData {
    userName: string;
    email: string;
    password: string;
    role: string;
    isActive: boolean;
    createdAt: Date;
}

export class UserRepository {
    async findByUserName(userName: string) {
        return prisma.users.findUnique({ where: { userName } });
    }

    async findByEmail(email: string) {
        return prisma.users.findUnique({ where: { email } });
    }

    async findByUserNameOrEmail(userName: string, email: string) {
        return prisma.users.findFirst({
            where: {
                OR: [{ userName }, { email }],
            },
        });
    }

    async createUser(data: CreateUserData) {
        return prisma.users.create({ data });
    }
}
