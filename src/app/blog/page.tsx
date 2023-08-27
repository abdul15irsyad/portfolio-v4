'use client';

import BlogItem from '@/components/BlogItem';
import ComingSoon from '@/components/ComingSoon';
import { blogs } from '@/data/blogs.data';
import dayjs from 'dayjs';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export default () => {
  const isBlogPublished = process.env.NEXT_PUBLIC_IS_BLOG_PUBLISHED
    ? Boolean(JSON.parse(process.env.NEXT_PUBLIC_IS_BLOG_PUBLISHED))
    : false;
  const sortedBlogs = blogs.sort((a, b) =>
    dayjs(a.createdAt).isBefore(b.createdAt) ? 1 : -1,
  );
  const allTags = [...new Set(blogs.map((blog) => blog.tags).flat())].sort(
    (a, b) => (a > b ? 1 : -1),
  );
  return isBlogPublished ? (
    <div className="blog section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">Blog</h1>
            <hr />
            <InputGroup className="search-bar mb-3">
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control placeholder="search blog title..." />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-12">
            {sortedBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="col-xl-3 col-12 blog-sidebar">
            <div className="all-tags box-container">
              <h5 className="all-tags-title box-container-title">
                <i className="bi bi-tags"></i>
                <span>All Tags</span>
              </h5>
              {allTags.map((tag, index) => (
                <div key={index} className="blog-tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComingSoon />
  );
};
