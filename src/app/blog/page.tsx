'use client';

import BlogItem from '@/components/BlogItem';
import React, { useCallback, useEffect, useState } from 'react';
import Empty from '@/components/Empty';
import { Blog } from '@/types/blog.type';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { setQueryString } from '@/utils/url.util';
// import { blogDatas } from '@/data/blogs.data';

const Blog = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [meta, setMeta] = useState<{
    currentPage?: number;
    totalPage?: number;
    totalData?: number;
    totalAllData?: number;
  }>({
    currentPage: page ? +page : 1,
    totalAllData: 0,
  });
  // const blogs = blogDatas;
  // const totalAllData = blogDatas.length;
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.set('limit', '7');
    if (page) searchParams.set('page', page);
    if (tag) searchParams.set('tag', tag);
    if (search) searchParams.set('search', search);
    const url = `/api/blog${
      searchParams.size > 0 ? `?${searchParams.toString()}` : ''
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBlogs(res.data);
        setMeta(res.meta);
      });
  }, [searchParams]);

  useEffect(() => {
    fetch('/api/blog/tag')
      .then((res) => res.json())
      .then((res) => {
        setTags(res.data);
      });
  }, []);

  const queryString = useCallback(setQueryString(searchParams), [searchParams]);

  return (
    <>
      <div className="blog section doodle-background">
        <div className="container">
          <div className="row header">
            <div className="col">
              <h1 className="title">Blog</h1>
              <hr />
              <SearchBar />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-12">
              {(search || tag) && (
                <div className="blog-filter">
                  <div className="blog-filter-text">
                    <h4 className="blog-filter-heading">
                      Result for {search && <span>"{search}"</span>}{' '}
                      {search && tag && 'and'} {tag && <span>#{tag}</span>}
                    </h4>
                    <div className="blog-filter-meta">
                      showing {blogs.length} of {meta.totalAllData} blogs
                    </div>
                  </div>
                  <div className="blog-filter-reset">
                    <Link
                      href="/blog"
                      type="button"
                      className="btn btn-sm btn-outline-danger mt-3"
                    >
                      <i className="bi bi-trash me-1"></i>
                      <span>Clear Filter</span>
                    </Link>
                  </div>
                </div>
              )}
              {blogs.length > 0 ? (
                blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
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
                {tags.length > 0 ? (
                  <div className="blog-tags">
                    {tags.map((tag, index) => (
                      <Link
                        href={`/blog?${queryString('tag', tag)}`}
                        key={index}
                        className="blog-tag"
                        prefetch={false}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-secondary">No Tag</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
