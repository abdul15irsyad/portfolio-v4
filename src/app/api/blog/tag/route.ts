import { NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import { getAllTags } from '@/services/blog.service';
import { handleError } from '@/utils/error.util';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await cache(`tags`, () => getAllTags());
    return NextResponse.json({
      message: 'get all tags',
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
