'use client';

import { renderTimestamp } from '@/utils/date.util';
import Image from 'next/image';
import React from 'react';

const Blog = ({ blog }) => {
  return (
    <>
      <div className="blog-detail-meta">
        <div className="blog-detail-created-at">
          <i className="bi bi-calendar4-week"></i>
          {renderTimestamp(blog.createdAt)}
        </div>
      </div>
      <div className="blog-detail-feature-image">
        <Image
          src={blog.featureImage.url}
          alt={blog.featureImage.originalFileName}
          width={1000}
          height={300}
          quality={100}
        />
      </div>
      <div
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="blog-detail-tags">
        {blog.tags.map((tag) => (
          <div className="blog-tag">{tag}</div>
        ))}
      </div>
    </>
  );
};

export default Blog;
