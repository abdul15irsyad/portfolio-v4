import React from 'react';
import { notFound } from 'next/navigation';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { Metadata } from 'next';
import sanitize from 'sanitize-html';
import { APP_NAME, BASE_URL } from '@/configs/app.config';
import BlogShare from '@/components/BlogShare';
import Blog from '@/components/Blog';
import Link from 'next/link';
import { prisma } from '@/prisma/client';
import dayjs from 'dayjs';

export async function generateMetadata({ params }): Promise<Metadata> {
  const blog = await prisma.blog.findUnique({
    where: {
      slug: params.slug,
      publishedAt: { not: null, lte: dayjs().toDate() },
    },
    include: { featureImage: true, author: { include: { photo: true } } },
  });
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

const BlogDetail = async ({ params, searchParams }) => {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
    include: { featureImage: true, author: { include: { photo: true } } },
  });
  if (!blog) notFound();
  return (
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Blog blog={blog} searchParams={searchParams} />
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <div className="blog-detail-share box-container">
              <h5 className="box-container-title">
                <i className="bi bi-share"></i>
                <span>Share</span>
              </h5>
              <div className="blog-detail-share-items">
                <BlogShare blogUrl={`${BASE_URL}/blog/${blog.slug}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link href="/blog" className="btn btn-outline-secondary">
              <i className="bi bi-chevron-left me-2"></i>
              <span>Kembali</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
