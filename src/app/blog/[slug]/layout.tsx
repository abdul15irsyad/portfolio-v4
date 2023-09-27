import { APP_NAME } from '@/configs/app.config';
import { cache } from '@/redis/redis.util';
import { getBlog } from '@/services/blog.service';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import sanitize from 'sanitize-html';

export async function generateMetadata({ params }): Promise<Metadata> {
  const blog = await cache(`blog:${params.slug}`, () =>
    getBlog({ slug: params.slug }),
  );
  // const blog = blogDatas.find(({ slug }) => slug === params.slug);
  if (!blog) notFound();
  const title = `${blog.title} - ${APP_NAME}`;
  const description = `${sanitize(blog.content, {
    ...defaultSanitizeOptions,
  })
    .split(' ')
    .slice(0, 20)
    .join(' ')
    .trim()}...`;

  return {
    title: title,
    keywords: blog.tags,
    description,
    authors: [{ name: blog.author?.name }],
    twitter: {
      card: 'summary',
      title: title,
      images: [blog?.featureImage!.url],
      description,
    },
    openGraph: {
      title: title,
      authors: blog.author?.name,
      images: [blog?.featureImage!.url],
      description,
    },
  };
}

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
