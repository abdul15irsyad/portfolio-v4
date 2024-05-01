import React from 'react';
import { notFound } from 'next/navigation';
import BlogShare from '@/components/blog-share';
import Blog from '@/components/blog';
import Link from 'next/link';
import { getBlog, getLatestBlog } from '@/services/blog.service';
import { cache } from '@/redis/redis.util';
import Image from 'next/image';
import { renderTimestamp } from '@/utils/date.util';
import dayjs from 'dayjs';
import { BackButton } from '@/components/back-button';
import Donate from '@/components/donate';
// import { blogDatas } from '@/data/blogs.data';

export default async ({ params, searchParams }) => {
  const blog = await cache(`blog:${params.slug}`, () =>
    getBlog({ slug: params.slug }),
  );
  // const blog = blogDatas.find(({ slug }) => slug === params.slug);
  if (!blog) notFound();
  const limit = 5;
  const latestBlogs = (
    (await cache(`blog:latest:{"limit":${limit}}`, () =>
      getLatestBlog({ limit }),
    )) as any[]
  )
    .filter((latestBlog) => latestBlog.id !== blog.id)
    .slice(0, 2);
  return (
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Blog blog={blog} searchParams={searchParams} />
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <div className="blog-detail-share box-container mb-3">
              <h5 className="box-container-title">
                <i className="bi bi-share"></i>
                <span>Bagikan</span>
              </h5>
              <div className="blog-detail-share-items">
                <BlogShare
                  title={blog.title}
                  url={`/blog/${blog.slug}`}
                  tags={blog.tags}
                />
              </div>
            </div>
            <div className="blog-detail-latest box-container mb-3">
              <h5 className="box-container-title">
                <i className="bi bi-newspaper"></i>
                <span>Blog Terbaru</span>
              </h5>
              <div className="blog-detail-latest-items">
                {latestBlogs?.map((latestBlog) => (
                  <div className="blog-detail-latest-item">
                    <Link href={`/blog/${latestBlog.slug}`}>
                      <Image
                        src={latestBlog.featureImage?.url}
                        className="blog-detail-latest-item-img"
                        alt={latestBlog.featureImage?.originalFileName}
                        width={500}
                        height={300}
                      ></Image>
                    </Link>
                    <div className="blog-detail-latest-item-text">
                      <Link href={`/blog/${latestBlog.slug}`}>
                        <h6 className="blog-detail-latest-item-title">
                          {latestBlog.title}
                        </h6>
                      </Link>
                      <span className="blog-detail-latest-item-meta">
                        {renderTimestamp(
                          dayjs(latestBlog?.publishedAt).toString(),
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Donate />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};
