'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Blog } from '@/types/blog.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';
import { renderTimestamp } from '@/utils/date.util';

import BlogShare from './blog-share';

export const BlogDetailSidebar = ({
  blog,
  latestBlogs,
}: {
  blog: Blog;
  latestBlogs: Blog[];
}) => {
  const { t } = useTranslation();
  const url = `/blog/${blog.slug}`;
  return (
    <>
      <div className="blog-detail-share box-container mb-3">
        <h5 className="box-container-title">
          <i className="bi bi-share"></i>
          <span>{capitalize(t('share'))}</span>
        </h5>
        <div className="blog-detail-share-items">
          <BlogShare title={blog.title} url={url} tags={blog.tags} />
        </div>
      </div>
      <div className="blog-detail-latest box-container mb-3">
        <h5 className="box-container-title">
          <i className="bi bi-newspaper"></i>
          <span>{capitalizeEachWord(t('latest-blog'))}</span>
        </h5>
        <div className="blog-detail-latest-items">
          {latestBlogs?.map((latestBlog, index) => (
            <div key={index} className="blog-detail-latest-item">
              <Link href={`/blog/${latestBlog.slug}`}>
                <div className="blog-detail-latest-item-img">
                  <Image
                    src={latestBlog.featureImage?.url ?? ''}
                    alt={latestBlog.featureImage?.originalFileName ?? ''}
                    width={500}
                    height={300}
                  />
                </div>
              </Link>
              <div className="blog-detail-latest-item-text">
                <Link href={`/blog/${latestBlog.slug}`}>
                  <h6 className="blog-detail-latest-item-title">
                    {latestBlog.title}
                  </h6>
                </Link>
                <span className="blog-detail-latest-item-meta">
                  {renderTimestamp(dayjs(latestBlog?.publishedAt).toString())}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
