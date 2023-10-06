import React from 'react';
import { notFound } from 'next/navigation';
import BlogShare from '@/components/blog-share';
import Blog from '@/components/blog';
import Link from 'next/link';
import { getBlog } from '@/services/blog.service';
import { cache } from '@/redis/redis.util';
// import { blogDatas } from '@/data/blogs.data';

export default async ({ params, searchParams }) => {
  const blog = await cache(`blog:${params.slug}`, () =>
    getBlog({ slug: params.slug }),
  );
  // const blog = blogDatas.find(({ slug }) => slug === params.slug);
  if (!blog) notFound();
  return (
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Blog blog={blog} searchParams={searchParams} />
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <div className="blog-detail-share box-container">
              <h5 className="box-container-title">
                <i className="bi bi-share"></i>
                <span>Share</span>
              </h5>
              <div className="blog-detail-share-items">
                <BlogShare url={`/blog/${blog.slug}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link href="/blog" className="btn btn-outline-secondary">
              <i className="bi bi-chevron-left me-2"></i>
              <span>Kembali</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
