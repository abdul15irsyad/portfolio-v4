import { NextRequest, NextResponse } from 'next/server';

import { blogDatas } from '@/data/blogs.data';
import { cache } from '@/redis/redis.util';
import { getBlogWithPagination } from '@/services/blog.service';
import { paginatedArray } from '@/utils/array.util';
import { handleError } from '@/utils/error.util';
import { cleanNull } from '@/utils/object.util';
import { parseBooleanString } from '@/utils/string.util';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const parseSearchParams = (key: string[] | string) =>
      Array.isArray(key) ? key[key.length - 1] : key;
    const searchParams = request.nextUrl.searchParams;
    const page = parseSearchParams(searchParams.get('page')!);
    const limit = parseSearchParams(searchParams.get('limit')!);
    let data: any[];
    let totalPage: number | null;
    let totalAllData: number;

    if (parseBooleanString(process.env.NEXT_PUBLIC_IS_READ_BLOG_FROM_ARRAY)) {
      data = paginatedArray(blogDatas, { page: +page, limit: +limit });
      totalAllData = blogDatas.length;
      totalPage = limit
        ? Math.ceil(totalAllData / +limit)
        : data.length > 0
          ? 1
          : null;
    } else {
      const tag = parseSearchParams(searchParams.get('tag')!);
      const search = parseSearchParams(searchParams.get('search')!);
      const findOptions = {
        page: page ? +page : undefined,
        limit: limit ? +limit : undefined,
        tag,
        search,
      };
      const result = await cache(
        `blogs:${JSON.stringify(cleanNull(findOptions))}`,
        () => getBlogWithPagination(findOptions),
      );
      data = result.data;
      totalPage = result.totalPage;
      totalAllData = result.totalAllData;
    }

    return NextResponse.json({
      message: 'get blogs',
      meta: {
        currentPage: page,
        totalPage,
        totalData: data?.length,
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
}
