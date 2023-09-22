import { cache } from '@/redis/redis.util';
import { getBlogWithPagination } from '@/services/blog.service';
import { cleanNull } from '@/utils/object.util';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const parseSearchParams = (key: string[] | string) =>
    Array.isArray(key) ? key[key.length - 1] : key;
  const { searchParams } = new URL(request.url);
  const tag = parseSearchParams(searchParams.get('tag')!);
  const search = parseSearchParams(searchParams.get('search')!);
  const page = parseSearchParams(searchParams.get('page')!);
  const limit = parseSearchParams(searchParams.get('limit')!);
  const findOptions = {
    page: page ? +page : undefined,
    limit: limit ? +limit : undefined,
    tag,
    search,
  };
  const { data, totalPage, totalAllData } = await cache(
    `blogs:${JSON.stringify(cleanNull(findOptions))}`,
    () => getBlogWithPagination(findOptions),
  );
  return NextResponse.json({
    message: 'get blogs',
    meta: {
      currentPage: totalAllData > 0 ? 1 ?? 1 : null,
      totalPage,
      totalData: data.length,
      totalAllData,
    },
    data,
  });
}
