import ComingSoon from '@/components/ComingSoon';
import { blogs } from '@/data/blogs.data';
import { defaultSanitizeOptions } from '@/utils/html.util';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sanitize from 'sanitize-html';

export default () => {
  const isBlogPublished = process.env.NEXT_PUBLIC_IS_BLOG_PUBLISHED
    ? Boolean(JSON.parse(process.env.NEXT_PUBLIC_IS_BLOG_PUBLISHED))
    : false;
  const sortedBlogs = blogs.sort((a, b) =>
    dayjs(a.createdAt).isBefore(b.createdAt) ? 1 : -1,
  );
  return isBlogPublished ? (
    <div className="blog section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">Blog</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-12">
            {sortedBlogs.map((blog) => (
              <div key={blog.id} className="blog-item">
                <div className="blog-feature-image">
                  <Link href={`/blog/${blog.slug}`}>
                    <Image
                      src={blog.featureImage.url}
                      alt={blog.featureImage.originalFileName}
                      width={400}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="blog-text">
                  <Link href={`/blog/${blog.slug}`} className="blog-title">
                    {blog.title}
                  </Link>
                  <div className="blog-meta">
                    <div className="blog-created-at">
                      <i className="bi bi-calendar4-week"></i>
                      {dayjs(blog.createdAt).format('DD MMM YYYY')}
                    </div>
                  </div>
                  <div
                    className="blog-desc"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(blog.content, {
                        ...defaultSanitizeOptions,
                      }),
                    }}
                  />
                  <div className="blog-tags">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="blog-tag">
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="blog-tag">. . .</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-3 col-12">
            <h4>Search</h4>
            <h4>All Tags</h4>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComingSoon />
  );
};
