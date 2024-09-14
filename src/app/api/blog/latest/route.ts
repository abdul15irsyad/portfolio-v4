import { NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import { getLatestBlog } from '@/services/blog.service';
import { handleError } from '@/utils/error.util';

export async function GET() {
  try {
    const blog = await cache(`blog:latest`, () => getLatestBlog());
    if (!blog) {
      return NextResponse.json(
        {
          status: 400,
          message: 'blog not found',
          error: 'not found',
        },
        { status: 400 },
      );
    }
    return NextResponse.json({
      message: 'get latest blog',
      data: blog,
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
