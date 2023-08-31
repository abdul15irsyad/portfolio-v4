'use client';

import BlogItem from '@/components/BlogItem';
import { blogs } from '@/data/blogs.data';
import React, { useCallback } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Empty from '@/components/Empty';
import { useRouter } from 'next/navigation';
import { Blog } from '@/types/blog.type';
import { setQueryString } from '@/utils/url.util';
import { ENV } from '@/configs/app.config';

const Blog = ({ searchParams }) => {
  const router = useRouter();
  const tag = Array.isArray(searchParams.tag)
    ? searchParams.tag[searchParams.tag.length - 1]
    : searchParams.tag;
  let listBlogs: Blog[] = [];
  if (tag) listBlogs = blogs.filter((blog) => blog.tags.includes(tag));
  else listBlogs = blogs;
  const addQueryString = useCallback(setQueryString(searchParams), [
    searchParams,
  ]);
  const allTags = [...new Set(blogs.map((blog) => blog.tags).flat())].sort(
    (a, b) => (a > b ? 1 : -1),
  );
  return (
    <>
      <div className="blog section doodle-background">
        <div className="container">
          <div className="row header">
            <div className="col">
              <h1 className="title">Blog</h1>
              <hr />
              {ENV === 'development' && (
                <InputGroup className="search-bar mb-3">
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <Form.Control placeholder="search blog title..." />
                </InputGroup>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-12">
              {tag && (
                <div className="blog-filter">
                  <h4 className="blog-filter-heading">
                    Result for <span>#{tag}</span>
                  </h4>
                  <div className="blog-filter-meta">
                    showing {listBlogs.length} of {blogs.length} blogs
                  </div>
                </div>
              )}
              {listBlogs.length > 0 ? (
                listBlogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
              ) : (
                <Empty />
              )}
            </div>
            <div className="col-xl-3 col-12 blog-sidebar">
              <div className="all-tags box-container">
                <h5 className="all-tags-title box-container-title">
                  <i className="bi bi-tags"></i>
                  <span>All Tags</span>
                </h5>
                <div className="blog-tags">
                  {allTags.map((tag, index) => (
                    <div
                      key={index}
                      className="blog-tag"
                      onClick={() =>
                        router.push(`/blog?${addQueryString('tag', tag!)}`)
                      }
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
