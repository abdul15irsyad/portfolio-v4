import React from 'react';
import { notFound } from 'next/navigation';
import { getBlog } from './service';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { Metadata } from 'next';
import sanitize from 'sanitize-html';
import { BASE_URL } from '@/configs/app.config';
import BlogShare from '@/components/BlogShare';
import Blog from '@/components/Blog';

export async function generateMetadata({ params }): Promise<Metadata> {
  const blog = getBlog(params.slug);
  if (!blog) notFound();
  const title = `${blog.title} - Irsyad Abdul`;
  const description = sanitize(blog.content, {
    ...defaultSanitizeOptions,
  })
    .split(' ')
    .slice(0, 50)
    .join(' ');

  return {
    title: title,
    description,
    twitter: {
      title: title,
      images: [blog?.featureImage.url],
      description,
    },
    openGraph: {
      title: title,
      images: [blog?.featureImage.url],
      description,
    },
  };
}

const BlogDetail = ({ params }) => {
  const blog = getBlog(params.slug);
  if (!blog) notFound();
  return (
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1 className="blog-detail-title">{blog.title}</h1>
            <Blog blog={blog} />
          </div>
          <div className="col-xl-3 blog-sidebar">
            <div className="blog-detail-share box-container">
              <h5 className="box-container-title">
                <i className="bi bi-share"></i>
                <span>Share this page</span>
              </h5>
              <BlogShare blogUrl={`${BASE_URL}/blog/${blog.slug}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
