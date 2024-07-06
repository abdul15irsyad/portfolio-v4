import React from 'react';
import { notFound } from 'next/navigation';
import { getBlog, getLatestBlog } from '@/services/blog.service';
import { cache } from '@/redis/redis.util';
import { BlogDetailView } from '@/sections/blog/blog-detail-view';
// import { blogDatas } from '@/data/blogs.data';

const BlogDetailPage = async ({ params, searchParams }) => {
  const blog = await cache(`blog:${params.slug}`, () =>
    getBlog({ slug: params.slug }),
  );
  // const blog = blogDatas.find(({ slug }) => slug === params.slug);
  if (!blog) notFound();
  const limit = 5;
  const latestBlogs = (
    (await cache(`blog:latest:{"limit":${limit}}`, () =>
      getLatestBlog({ limit }),
    )) as any[]
  )
    .filter((latestBlog) => latestBlog.id !== blog.id)
    .slice(0, 2);
  return (
    <BlogDetailView
      blog={blog}
      searchParams={searchParams}
      latestBlogs={latestBlogs}
    />
  );
};

export default BlogDetailPage;
