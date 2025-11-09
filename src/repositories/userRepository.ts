import prisma from "../prismaClient";
import {Prisma} from "@prisma/client";

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

    async createUser(data: Prisma.usersCreateInput) {
        return prisma.users.create({ data });
    }
}
