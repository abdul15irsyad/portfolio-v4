import { cache } from '@/redis/redis.util';
import { getAllTags } from '@/services/blog.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await cache(`tags`, () => getAllTags());
  return NextResponse.json({
    message: 'get all tags',
    data,
  });
}
