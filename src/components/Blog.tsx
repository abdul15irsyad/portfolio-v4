'use client';

import { renderTimestamp } from '@/utils/date.util';
import Image from 'next/image';
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import { Blog } from '@/types/blog.type';
import CopyButtonPlugin from 'highlightjs-copy';
import 'highlight.js/styles/androidstudio.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';
hljs.addPlugin(
  new CopyButtonPlugin({
    hook: (text: string, el) => {
      if (el.result.language === 'bash') {
        text = text.replace('$ ', '');
        text = text.replace(/\n\$\ /g, '\n');
      }
      return text;
    },
  }),
);

const Blog = ({ blog }: { blog: Blog }) => {
  useEffect(() => {
    hljs.initHighlighting();
  });
  return (
    <>
      <h1 className="blog-detail-title">{blog.title}</h1>
      <div className="blog-detail-meta">
        {blog.author && (
          <div className="blog-author">
            <Image
              src={blog.author.photo.url}
              alt={blog.author.photo.originalFileName}
              className="blog-author-img"
              width={100}
              height={100}
            />
            <span className="blog-author-name">{blog.author.name}</span>
          </div>
        )}
        <div className="blog-detail-created-at">
          <i className="bi bi-calendar4-week"></i>
          {renderTimestamp(blog.publishedAt!)}
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
        {blog.tags.map((tag, index) => (
          <div key={index} className="blog-tag">
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
