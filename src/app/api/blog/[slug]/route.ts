import { cache } from '@/redis/redis.util';
import { getBlog } from '@/services/blog.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const blog = await cache(`blog:${slug}`, () => getBlog({ slug }));
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
    message: 'get blog',
    data: blog,
  });
}
