'use client';

import BlogItem from '@/components/BlogItem';
import React, { useCallback } from 'react';
import Empty from '@/components/Empty';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import LoadingTags from '@/components/LoadingTags';
import LoadingBlogs from '@/components/LoadingBlogs';
import { Blog } from '@/types/blog.type';
import { ApiResponseAll } from '@/types/api-response.type';

export default () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');

  const { data: blogs, isLoading: isLoadingBlogs } = useQuery<
    ApiResponseAll<Blog>
  >({
    queryKey: ['blogs', { page, tag, search }],
    queryFn: async () => {
      const newSearchParams = new URLSearchParams();
      const limit = 7;
      newSearchParams.set('limit', limit.toString());
      if (page) newSearchParams.set('page', page);
      if (tag) newSearchParams.set('tag', tag);
      if (search) newSearchParams.set('search', search);
      const url = `/api/blog${
        newSearchParams.size > 0 ? `?${newSearchParams.toString()}` : ''
      }`;
      return (await fetch(url)).json();
    },
  });

  const { data: tags, isLoading: isLoadingTags } = useQuery<
    ApiResponseAll<string>
  >({
    queryKey: ['allTags'],
    queryFn: async () => (await fetch('/api/blog/tag')).json(),
  });

  const queryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      if (value === '') params.delete(name);
      else params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <div className="blog section doodle-background">
        <div className="container">
          <div className="row header">
            <div className="col">
              <h1 className="title">Blog</h1>
              <hr />
              <SearchBar queryString={queryString} />
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
                      showing {blogs?.data.length} of {blogs?.meta.totalAllData}{' '}
                      blogs
                    </div>
                  </div>
                  <div className="blog-filter-reset">
                    <Link
                      href="/blog?tag="
                      type="button"
                      className="btn btn-sm btn-outline-danger mt-3"
                    >
                      <i className="bi bi-trash me-1"></i>
                      <span>Clear Filter</span>
                    </Link>
                  </div>
                </div>
              )}
              {isLoadingBlogs ? (
                <LoadingBlogs />
              ) : blogs!.data.length > 0 ? (
                blogs!.data.map((blog) => (
                  <BlogItem key={blog.id} blog={blog} />
                ))
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
                {isLoadingTags ? (
                  <LoadingTags sizes={[8, 5, 7, 5, 7, 9, 6]} />
                ) : tags!.data.length > 0 ? (
                  <div className="blog-tags">
                    {tags?.data.map((tag, index) => (
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
