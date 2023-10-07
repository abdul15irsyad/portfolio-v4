'use client';

import { renderTimestamp } from '@/utils/date.util';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import hljs from 'highlight.js';
import { Blog } from '@/types/blog.type';
import CopyButtonPlugin from 'highlightjs-copy';
import 'highlight.js/styles/androidstudio.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';
import { useRouter } from 'next/navigation';
import { queryString } from '@/utils/url.util';
import dayjs from 'dayjs';
hljs.addPlugin(
  new CopyButtonPlugin({
    hook: (text: string, el: any) => {
      if (el.result.language === 'bash') {
        text = text.replace('$ ', '');
        text = text.replace(/\n\$\ /g, '\n');
      }
      return text;
    },
  }),
);

const Blog = ({ blog, searchParams }: { blog: Blog; searchParams: any }) => {
  const router = useRouter();
  const addQueryString = useCallback(queryString(searchParams), [searchParams]);
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <h1 className="blog-detail-title">{blog.title}</h1>
      <div className="blog-detail-meta">
        {blog.author && (
          <div className="blog-author">
            <Image
              src={blog.author.photo!.url ?? '/blog/default-profile.png'}
              alt={blog.author.name}
              className="blog-author-img"
              width={100}
              height={100}
            />
            <span className="blog-author-name">{blog.author.name}</span>
          </div>
        )}
        <div className="blog-detail-created-at">
          <i className="bi bi-calendar4-week"></i>
          {renderTimestamp(dayjs(blog.publishedAt).toString())}
        </div>
      </div>
      <div className="blog-detail-feature-image">
        <Image
          src={blog.featureImage!.url!}
          alt={blog.featureImage!.originalFileName}
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
        {blog.tags?.map((tag, index) => (
          <div
            key={index}
            className="blog-tag"
            onClick={() => router.push(`/blog?${addQueryString('tag', tag!)}`)}
          >
            #{tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
