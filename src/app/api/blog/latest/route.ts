import { NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import { getLatestBlog } from '@/services/blog.service';

export async function GET() {
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
}
