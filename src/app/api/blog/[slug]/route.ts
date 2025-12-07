import { Blog as PrismaBlog } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

import { blogDatas } from '@/data/blogs.data';
import { cache } from '@/redis/redis.util';
import { getBlog } from '@/services/blog.service';
import { Blog } from '@/types/blog.type';
import { handleError } from '@/utils/error.util';
import { parseBooleanString } from '@/utils/string.util';

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    let blog: Blog | PrismaBlog | null;
    if (parseBooleanString(process.env.NEXT_PUBLIC_IS_READ_BLOG_FROM_ARRAY)) {
      blog = blogDatas.find((blog) => slug === blog.slug) ?? null;
    } else {
      blog = await cache(`blog:${slug}`, () => getBlog({ slug }));
    }
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
