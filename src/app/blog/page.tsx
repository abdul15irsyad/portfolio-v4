import { Suspense } from 'react';

import { cache } from '@/lib/redis/redis.util';
import { getAllTags, getBlogs } from '@/services/blog.service';
import { Blog } from '@/types/blog.type';

import { BlogView } from './(components)/blog-view';

export default async () => {
  const blogs = (await cache('blogs:all', () => getBlogs())) as Blog[];
  const tags = (await cache('tags:all', () => getAllTags())) as string[];

  return (
    <Suspense>
      <BlogView blogs={blogs} tags={tags} />
    </Suspense>
  );
};
