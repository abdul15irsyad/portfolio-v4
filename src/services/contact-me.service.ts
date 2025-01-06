import { Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

import { prisma } from '@/prisma/client';
import { PaginationParam } from '@/types/pagination.type';

export const createContactMe = async (data: {
  name: string;
  email: string;
  address?: string;
  message: string;
}) => {
  return await prisma.contactMe.create({
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
      message: true,
    },
    data: {
      id: uuidv4(),
      ...data,
    },
  });
};

export const getContactMeWithPagination = async ({
  page,
  limit,
  search,
  orderBy,
  orderDir,
  isApproved,
}: PaginationParam & { isApproved?: boolean } = {}) => {
  page = page ?? 1;
  limit = limit ?? 10;
  orderBy = orderBy ?? 'createdAt';
  orderDir = orderDir ?? 'desc';

  const whereOptions: Prisma.ContactMeWhereInput = {
    OR: search
      ? [{ name: { contains: search, mode: 'insensitive' } }]
      : undefined,
    approvedAt:
      isApproved !== undefined
        ? isApproved
          ? { not: null }
          : null
        : undefined,
  };

  const totalAllData = await prisma.contactMe.count({
    where: whereOptions,
  });

  const data = await prisma.contactMe.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      message: true,
      createdAt: true,
    },
    where: whereOptions,
    take: limit,
    skip: limit ? (page - 1) * limit : undefined,
    orderBy: { [orderBy]: orderDir },
  });

  return {
    totalAllData,
    data,
  };
};
