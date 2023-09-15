import BlogItem from '@/components/BlogItem';
import React from 'react';
import Empty from '@/components/Empty';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { getAllTags, getBlogWithPagination } from '@/services/blog.service';

const Blog = async ({ searchParams }) => {
  const parseSearchParams = (key: string[] | string) =>
    Array.isArray(key) ? key[key.length - 1] : key;
  const tag = parseSearchParams(searchParams.tag);
  const search = parseSearchParams(searchParams.search);
  const queryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === '') params.delete(name);
    else params.set(name, value);
    return params.toString();
  };
  const {
    data: blogs,
    totalPage,
    totalAllData,
  } = await getBlogWithPagination({ page: 1, limit: 10, tag, search });
  const allTags = await getAllTags();

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
                      showing {blogs.length} of {totalAllData} blogs
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
                {allTags.length > 0 ? (
                  <div className="blog-tags">
                    {allTags.map((tag, index) => (
                      <Link
                        href={`/blog?${queryString('tag', tag as string)}`}
                        key={index}
                        className="blog-tag"
                      >
                        {tag as string}
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
