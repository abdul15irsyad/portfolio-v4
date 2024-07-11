'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Blog } from '@/types/blog.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';
import { renderTimestamp } from '@/utils/date.util';

export const LatestBlog = () => {
  const { t } = useTranslation();
  const {
    data: latestBlog,
    isLoading,
    // error,
  } = useQuery<{ data: Blog }>({
    queryKey: ['latestBlog'],
    queryFn: async () => (await fetch('/api/blog/latest')).json(),
    cacheTime: 0,
    networkMode: 'always',
  });
  return (
    <section className="latest-blog section doodle-background">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="title">{capitalizeEachWord(t('latest-blog'))}</h1>
            <p className="sub-title mb-4 mb-lg-5">
              {capitalize(t('latest-blog-desc'))}
            </p>
            <Link href="/blog" className="btn btn-primary btn-show-all-page">
              {capitalizeEachWord(t('see-item', { item: t('all-blogs') }))}{' '}
              <i className="bi bi-chevron-right"></i>
            </Link>
          </div>
          <div className="col-12 col-lg-6">
            <div className="latest-blog-item" data-aos="fade-up">
              {isLoading ? (
                <>
                  <Placeholder animation="glow">
                    <Placeholder
                      sm={12}
                      style={{
                        height: '224px',
                        borderRadius: '1rem',
                        marginBottom: '.5rem',
                      }}
                    />
                    <div className="text-center">
                      <Placeholder
                        sm={10}
                        style={{
                          display: 'inline-block',
                          height: '20px',
                          marginBottom: '.5rem',
                        }}
                      />
                      <Placeholder sm={4} size="lg" />
                    </div>
                  </Placeholder>
                </>
              ) : (
                <>
                  <Link href={`/blog/${latestBlog?.data.slug}`}>
                    <Image
                      src={latestBlog?.data.featureImage?.url as string}
                      alt={
                        latestBlog?.data.featureImage
                          ?.originalFileName as string
                      }
                      width={500}
                      height={500}
                    />
                  </Link>
                  <Link href={`/blog/${latestBlog?.data.slug}`}>
                    <h2>{latestBlog?.data.title}</h2>
                  </Link>
                  <p>
                    {renderTimestamp(
                      dayjs(latestBlog?.data?.publishedAt).toString(),
                    )}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
