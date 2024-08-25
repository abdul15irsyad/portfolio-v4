import { notFound } from 'next/navigation';
import React from 'react';

// import { blogDatas } from '@/data/blogs.data';
import { cache } from '@/redis/redis.util';
import { BlogDetailView } from '@/sections/blog/blog-detail-view';
import { getBlog, getLatestBlog } from '@/services/blog.service';
import { BlogReferenceInterface } from '@/types/blog.type';
import { extractSeoData } from '@/utils/seo.util';

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
  const blogReferences: BlogReferenceInterface[] = await Promise.all(
    blog.referenceURLs?.map(
      async (referenceURL) =>
        await cache(
          `seo-data:${referenceURL}`,
          () => extractSeoData(referenceURL),
          60 * 60 * 24 * 7,
        ),
      // await extractSeoData(referenceURL),
    ) ?? [],
  );

  return (
    <BlogDetailView
      blog={{ ...blog, references: blogReferences! }}
      searchParams={searchParams}
      latestBlogs={latestBlogs}
    />
  );
};

export default BlogDetailPage;
