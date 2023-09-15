import { prisma } from '@/prisma/client';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';

export const getBlogWithPagination = async ({
  page,
  limit,
  search,
  orderBy,
  orderDir,
  tag,
}: {
  page?: number;
  limit?: number;
  search?: string;
  orderBy?: string;
  orderDir?: 'asc' | 'desc';
  tag?: string;
} = {}) => {
  page = page ?? 1;
  limit = limit ?? 10;
  orderBy = orderBy ?? 'createdAt';
  orderDir = orderDir ?? 'desc';
  const filter: Prisma.BlogWhereInput = {
    publishedAt: { not: null, lte: dayjs().toDate() },
    tags: tag ? { has: tag } : undefined,
  };

  const whereOptions: Prisma.BlogWhereInput = {
    OR: [{ title: { contains: search, mode: 'insensitive' }, ...filter }],
  };

  const totalAllData = await prisma.blog.count({ where: whereOptions });

  const data = await prisma.blog.findMany({
    where: whereOptions,
    take: limit,
    skip: limit ? (page - 1) * limit : undefined,
    orderBy: { [orderBy]: orderDir },
    include: { featureImage: true, author: { include: { photo: true } } },
  });
  const totalPage = limit
    ? Math.ceil(totalAllData / limit)
    : data.length > 0
    ? 1
    : null;
  return {
    totalPage,
    totalAllData,
    data,
  };
};

export const getAllTags = async (): Promise<string[]> => {
  const blogs = await prisma.blog.findMany({
    where: {
      publishedAt: { not: null, lte: dayjs().toDate() },
    },
    select: { tags: true },
  });
  return [...new Set(blogs!.map((blog) => blog.tags).flat())].sort((a, b) =>
    a > b ? 1 : -1,
  );
};
