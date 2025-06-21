import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import sanitize from 'sanitize-html';

import { APP_NAME, BASE_URL } from '@/configs/app.config';
import { blogDatas } from '@/data/blogs.data';
import { cache } from '@/redis/redis.util';
import { getBlog } from '@/services/blog.service';
import { Blog } from '@/types/blog.type';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { parseBooleanString } from '@/utils/string.util';

export async function generateMetadata({ params }): Promise<Metadata> {
  let blog: Blog | null;
  if (parseBooleanString(process.env.NEXT_PUBLIC_IS_READ_BLOG_FROM_ARRAY)) {
    blog = blogDatas.find(({ slug }) => slug === params.slug) ?? null;
  } else {
    blog = await cache(`blog:${params.slug}`, () =>
      getBlog({ slug: params.slug }),
    );
  }
  if (!blog) notFound();
  const title = `${blog.title} - ${APP_NAME}`;
  const description = `${sanitize(blog.content, {
    ...defaultSanitizeOptions,
  })
    .split(' ')
    .slice(0, 20)
    .join(' ')
    .trim()}...`;

  const commonMetaData = {
    title: title,
    images: blog?.featureImage!.url ? [blog?.featureImage!.url] : undefined,
    description,
  };

  return {
    title: title,
    keywords: blog.tags,
    description,
    authors: [{ name: blog.author?.name }],
    twitter: {
      card: 'summary',
      ...commonMetaData,
    },
    openGraph: {
      url: `${BASE_URL}/blog/${blog.slug}`,
      tags: blog.tags,
      type: 'article',
      locale: 'id_ID',
      authors: blog.author?.name,
      ...commonMetaData,
    },
  };
}

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
