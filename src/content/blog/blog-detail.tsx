'use client';

import 'highlight.js/styles/androidstudio.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';

import dayjs from 'dayjs';
import hljs from 'highlight.js';
import CopyButtonPlugin from 'highlightjs-copy';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import sanitize from 'sanitize-html';

import ImagePreview, { Modal } from '@/components/image-preview/image-preview';
import { Blog as BlogInterface } from '@/types/blog.type';
import { renderTimestamp } from '@/utils/date.util';
import { calculateMinutesRead } from '@/utils/string.util';

import { BlogDetailReferences } from './blog-detail-reference';

hljs.configure({
  ignoreUnescapedHTML: true,
});
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

export const BlogDetail = ({ blog }: { blog: BlogInterface }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const minutesRead = useMemo(
    () =>
      calculateMinutesRead({
        text: sanitize(blog.content),
      }),
    [blog.content],
  );
  useEffect(() => {
    document.querySelectorAll('[data-highlighted="yes"]').forEach((block) => {
      block.removeAttribute('data-highlighted');
    });
    hljs.highlightAll();
  });
  const [modal, setModal] = useState<Modal>({});
  const blogContent = useRef<HTMLDivElement>(null);
  const body = document.querySelector('body');
  useEffect(() => {
    const images = blogContent.current?.querySelectorAll<HTMLImageElement>(
      ':not(.img-wrapper) > img',
    );
    images?.forEach((image) => {
      // encapsulate element
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('img-wrapper');
      const newImage = image.cloneNode(true);
      newImage.addEventListener('click', () => {
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
      imageWrapper.appendChild(newImage);
      image.parentNode?.replaceChild(imageWrapper, image);

      // add caption
      if (image.hasAttribute('title')) {
        const imageTitle = image.getAttribute('title');
        const caption = document.createElement('p');
        caption.classList.add('text-muted');
        caption.style.fontSize = '90%';
        caption.style.marginBottom = '0';
        caption.style.textAlign = 'center';
        caption.textContent = imageTitle;
        imageWrapper.appendChild(caption);
      }
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
                rel="noopener noreferrer"
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
          ref={blogContent}
        />
        <div className="blog-detail-tags">
          {blog.tags?.map((tag, index) => (
            <div
              key={index}
              className="blog-tag"
              onClick={() => {
                nProgress.start();
                router.push(`/blog?tag=${tag}`);
              }}
            >
              #{tag}
            </div>
          ))}
        </div>
        {(blog?.referenceURLs?.length ?? 0) > 0 && (
          <BlogDetailReferences references={blog?.references} />
        )}
        <ImagePreview modal={modal} setModal={setModal} />
      </div>
    </>
  );
};
