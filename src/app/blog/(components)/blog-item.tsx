'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import sanitize from 'sanitize-html';

import { Blog } from '@/types/blog.type';
import { renderTimestamp } from '@/utils/date.util';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { calculateMinutesRead } from '@/utils/string.util';

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { t } = useTranslation();
  const minutesRead = useMemo(
    () =>
      calculateMinutesRead({
        text: sanitize(blog.content),
      }),
    [blog.content],
  );
  return (
    <div className='blog-item'>
      <div className='blog-feature-image'>
        <Link href={`/blog/${blog.slug}`} prefetch={false}>
          <div className='image-link'>
            <Image
              src={blog.featureImage!.url!}
              alt={blog.featureImage!.originalFileName}
              width={400}
              height={100}
            />
          </div>
        </Link>
      </div>
      <div className='blog-text'>
        <Link
          href={`/blog/${blog.slug}`}
          className='blog-title'
          prefetch={false}
        >
          {blog.title}
        </Link>
        <div className='blog-meta'>
          {blog.author && (
            <div className='blog-author'>
              <Image
                src={blog.author.photo?.url ?? '/blog/default-profile.png'}
                alt={blog.author.name}
                className='blog-author-img'
                width={100}
                height={100}
              />
              <span className='blog-author-name'>{blog.author.name}</span>
            </div>
          )}
          <div className='blog-created-at'>
            <i className='bi bi-calendar4-week'></i>
            {renderTimestamp(blog.publishedAt!)}
          </div>
          <div className='blog-min-read d-none d-lg-block'>
            <i className='bi bi-stopwatch'></i>
            {minutesRead} {t('minutes-read')}
          </div>
        </div>
        <div
          className='blog-desc'
          dangerouslySetInnerHTML={{
            __html: sanitize(blog.content, {
              ...defaultSanitizeOptions,
            }),
          }}
        />
        <div className='blog-min-read text-secondary d-block d-lg-none mb-3'>
          <i className='bi bi-stopwatch me-2'></i>
          {minutesRead} {t('minutes-read')}
        </div>
        <div className='blog-tags'>
          {blog.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className='blog-tag'>
              #{tag}
            </span>
          ))}
          {blog.tags!.length > 3 && <span className='blog-tag'>. . .</span>}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
