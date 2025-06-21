import { notFound } from 'next/navigation';
import React from 'react';

import { BlogDetailView } from '@/content/blog/blog-detail-view';
import { blogDatas } from '@/data/blogs.data';
import { cache } from '@/redis/redis.util';
import { getBlog, getLatestBlog } from '@/services/blog.service';
import { Blog, BlogReferenceInterface } from '@/types/blog.type';
import { extractSeoData } from '@/utils/seo.util';
import { parseBooleanString } from '@/utils/string.util';

const BlogDetailPage = async ({ params }) => {
  let blog: Blog | null;
  if (parseBooleanString(process.env.NEXT_PUBLIC_IS_READ_BLOG_FROM_ARRAY)) {
    blog = blogDatas.find(({ slug }) => slug === params.slug) ?? null;
  } else {
    blog = await cache(`blog:${params.slug}`, () =>
      getBlog({ slug: params.slug }),
    );
  }
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
      latestBlogs={latestBlogs}
    />
  );
};

export default BlogDetailPage;
