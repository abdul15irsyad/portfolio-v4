import { renderTimestamp } from '@/utils/date.util';
import { defaultSanitizeOptions } from '@/utils/html.util';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sanitize from 'sanitize-html';

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
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
            {renderTimestamp(blog.createdAt)}
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
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && <span className="blog-tag">. . .</span>}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
