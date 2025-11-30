import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function convertBigIntToString(result: any): any {
    if (result === null || result === undefined) {
        return result;
    }

    if (typeof result === 'bigint') {
        return result.toString();
    }

    if (Array.isArray(result)) {
        return result.map((item) => convertBigIntToString(item));
    }

    if (typeof result === 'object') {
        for (const key in result) {
            if (Object.prototype.hasOwnProperty.call(result, key)) {
                result[key] = convertBigIntToString(result[key]);
            }
        }
    }

    return result;
}

const extendedPrismaClient = prisma.$extends({
    query: {
        $allModels: {
            $allOperations: async ({ args, query }) => {
                const result = await query(args);
                return convertBigIntToString(result);
            },
        },
    },
});

export default extendedPrismaClient;
