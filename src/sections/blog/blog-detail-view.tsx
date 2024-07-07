import React from 'react';
import Blog from './blog';
import { Blog as BlogType } from '@/types/blog.type';
import { BlogDetailSidebar } from './blog-detail-sidebar';
import Donate from '@/components/donate/donate';
import { BackButton } from '@/components/back-button/back-button';

export const BlogDetailView = ({
  blog,
  latestBlogs,
  searchParams,
}: {
  blog: BlogType;
  latestBlogs: any[];
  searchParams: any;
}) => {
  return (
    <div className="blog-detail section doodle-background">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Blog blog={blog} searchParams={searchParams} />
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <BlogDetailSidebar blog={blog} latestBlogs={latestBlogs} />
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
