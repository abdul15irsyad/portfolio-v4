'use client';

import { renderTimestamp } from '@/utils/date.util';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import hljs from 'highlight.js';
import { Blog as BlogInterface } from '@/types/blog.type';
import CopyButtonPlugin from 'highlightjs-copy';
import 'highlight.js/styles/androidstudio.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';
import { useRouter } from 'next/navigation';
import { queryString } from '@/utils/url.util';
import dayjs from 'dayjs';
import ImagePreview, { Modal } from './image-preview';
import Link from 'next/link';
import { calculateMinutesRead } from '@/utils/string.util';
import { useTranslation } from 'react-i18next';
import sanitize from 'sanitize-html';
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

const Blog = ({
  blog,
  searchParams,
}: {
  blog: BlogInterface;
  searchParams: any;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const minutesRead = useMemo(
    () =>
      calculateMinutesRead({
        text: sanitize(blog.content),
      }),
    [blog.content],
  );
  const addQueryString = useCallback(queryString(searchParams), [searchParams]);
  useEffect(() => hljs.highlightAll());
  const [modal, setModal] = useState<Modal>({});
  const content = useRef<HTMLDivElement>(null);
  const body = document.querySelector('body');
  useEffect(() => {
    const images = content.current?.querySelectorAll('img');
    images?.forEach((image) => {
      image.addEventListener('click', () => {
        setModal({
          ...modal,
          show: true,
          image: image.src,
          size: image.getAttribute('class')?.split('-')[1] as
            | 'sm'
            | 'md'
            | 'lg',
          caption: image.getAttribute('title') as string,
        });
        body!.style.overflow = 'hidden';
      });
    });
  });

  return (
    <>
      <div className="blog-detail">
        <h1 className="blog-detail-title">{blog.title}</h1>
        <div className="blog-detail-meta">
          {blog.author &&
            (blog.author?.url ? (
              <Link
                href={blog.author.url}
                target="_blank"
                className="blog-author"
              >
                <Image
                  src={blog.author.photo?.url ?? '/blog/default-profile.png'}
                  alt={blog.author.name}
                  className="blog-author-img"
                  width={100}
                  height={100}
                />
                <span className="blog-author-name">{blog.author.name}</span>
              </Link>
            ) : (
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
            ))}
          <div className="blog-detail-created-at">
            <i className="bi bi-calendar4-week"></i>
            {renderTimestamp(dayjs(blog.publishedAt).toString())}
          </div>
          <div className="blog-detail-min-read">
            <i className="bi bi-stopwatch"></i>
            {minutesRead} {t('minutes-read')}
          </div>
        </div>
        <div className="blog-detail-feature-image">
          <Image
            src={blog.featureImage!.url!}
            alt={blog.featureImage!.originalFileName}
            width={1000}
            height={300}
            quality={100}
            priority={true}
          />
        </div>
        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
          ref={content}
        />
        <ImagePreview modal={modal} setModal={setModal} />
        <div className="blog-detail-tags">
          {blog.tags?.map((tag, index) => (
            <div
              key={index}
              className="blog-tag"
              onClick={() =>
                router.push(`/blog?${addQueryString('tag', tag!)}`)
              }
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
