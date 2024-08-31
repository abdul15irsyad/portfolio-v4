import * as Sentry from '@sentry/nextjs';
import { NextRequest, NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import {
  createContactMe,
  getContactMeWithPagination,
} from '@/services/contact-me.service';
import { cleanNull } from '@/utils/object.util';
import { isNotEmpty } from '@/utils/validation.util';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page') ? +searchParams.get('page')! : 1;
    const limit = searchParams.get('limit') ? +searchParams.get('limit')! : 10;

    const findOptions = {
      page: page ?? undefined,
      limit: limit ?? undefined,
      search: search ?? undefined,
      isApproved: true,
      orderBy: 'approvedAt',
      orderDir: 'desc' as const,
    };

    const { data, totalAllData } = await cache(
      `contact-mes:${JSON.stringify(cleanNull(findOptions))}`,
      () => getContactMeWithPagination(findOptions),
    );

    return NextResponse.json({
      message: 'get contact mes',
      meta: {
        currentPage: page,
        totalPage: limit
          ? Math.ceil(totalAllData / limit)
          : data.length > 0
            ? 1
            : null,
        totalData: data.length,
        totalAllData,
      },
      data,
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    const newContactMe = await createContactMe({
      ...data,
      address: isNotEmpty(data?.address) ? data.address : null,
    });

    // const keys = await redisService.keys('contact-mes');
    // await redisService.del(...(keys as RedisKey[]));

    return NextResponse.json({
      message: 'create contact me',
      data: newContactMe,
    });
  } catch (error) {
    Sentry.captureException(error);
    console.error(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
};
