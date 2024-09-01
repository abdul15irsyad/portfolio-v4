import { NextRequest, NextResponse } from 'next/server';

import { EXPERIMENTAL } from '@/configs/app.config';
import { cache } from '@/redis/redis.util';
import {
  createContactMe,
  getContactMeWithPagination,
} from '@/services/contact-me.service';
import { handleError } from '@/utils/error.util';
import { cleanNull } from '@/utils/object.util';
import { isNotEmpty } from '@/utils/validation.util';

import { notfound } from '../notfound.util';

export const GET = async (req: NextRequest) => {
  try {
    if (!EXPERIMENTAL) {
      return notfound();
    }
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
    handleError(error);
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
    if (!EXPERIMENTAL) {
      return NextResponse.json(null, { status: 404 });
    }
    const data = await req.json();

    const validationErrors: {
      field: string;
      code: string;
      message: string;
    }[] = [];
    for (const item of Object.entries(data)) {
      if (['name', 'message'].includes(item[0]) && !isNotEmpty(item[1])) {
        validationErrors.push({
          field: item[0],
          code: 'REQUIRED',
          message: 'field is required',
        });
      } else if ((item[1] as string)?.length > 255) {
        validationErrors.push({
          field: item[0],
          code: 'MAX',
          message: 'no more than 255 characters',
        });
      }
    }
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          message: 'bad request',
          code: 'VALIDATION_ERROR',
          errors: validationErrors,
        },
        { status: 400 },
      );
    }

    const newContactMe = await createContactMe({
      name: data?.name,
      address: isNotEmpty(data?.address) ? data.address : null,
      message: data?.message,
    });

    // const keys = await redisService.keys('contact-mes');
    // await redisService.del(...(keys as RedisKey[]));

    return NextResponse.json({
      message: 'create contact me',
      data: newContactMe,
    });
  } catch (error) {
    handleError(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
};
