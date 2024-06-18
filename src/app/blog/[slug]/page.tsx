import React from 'react';
import { notFound } from 'next/navigation';
import Blog from '@/components/blog';
import { getBlog, getLatestBlog } from '@/services/blog.service';
import { cache } from '@/redis/redis.util';
import { BackButton } from '@/components/back-button';
import Donate from '@/components/donate';
import { BlogDetailSidebar } from '@/components/blog-detail-sidebar';
// import { blogDatas } from '@/data/blogs.data';

export default async ({ params, searchParams }) => {
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
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Blog blog={blog} searchParams={searchParams} />
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <BlogDetailSidebar blog={blog} latestBlogs={latestBlogs} />
            <Donate />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};
