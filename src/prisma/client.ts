import { PrismaClient } from '@prisma/client';

import { BASE_URL } from '@/configs/app.config';

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    result: {
      file: {
        url: {
          needs: { path: true, fileName: true },
          compute(file) {
            return `${BASE_URL}/${file.path}/${file.fileName}`;
          },
        },
      },
      blog: {
        tags: {
          compute(blog) {
            return typeof blog.tags === 'string'
              ? (blog.tags as string)?.split(',')
              : blog.tags;
          },
        },
      },
    },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
