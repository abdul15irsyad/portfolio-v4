'use client';

import { ApiResponseAll } from '@/types/api-response.type';
import { Blog } from '@/types/blog.type';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import LoadingBlogs from './loading-blogs';
import Empty from './empty';
import BlogItem from './blog-item';
import Pagination from './pagination';
// import { useEffect, useState } from 'react';

type Prop = {
  limit?: number;
  queryString: (name: string, value: string) => string;
};

export default ({ limit = 5, queryString }: Prop) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const page = searchParams.get('page') ? +searchParams.get('page')! : 1;
  // const [page, setPage] = useState<number>(1);

  // useEffect(() => {
  //   setPage(1);
  // }, [tag, search]);

  // useEffect(() => {
  //   scrollTo({ top: 0 });
  // }, [page]);

  const { data: blogs, isLoading: isLoadingBlogs } = useQuery<
    ApiResponseAll<Blog>
  >({
    queryKey: ['blogs', { page, tag, search }],
    queryFn: async () => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('limit', limit.toString());
      if (page) newSearchParams.set('page', page.toString());
      if (tag) newSearchParams.set('tag', tag);
      if (search) newSearchParams.set('search', search);
      const url = `/api/blog${
        newSearchParams.size > 0 ? `?${newSearchParams.toString()}` : ''
      }`;
      return (await fetch(url)).json();
    },
  });

  if (isLoadingBlogs) return <LoadingBlogs count={3} />;

  if (blogs?.data.length === 0) return <Empty />;

  return (
    <>
      {blogs?.data.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      <div className="blogs-meta">
        <div className="meta-text">
          menampilkan <b>{blogs?.data.length}</b> dari{' '}
          <b>{blogs?.meta.totalAllData}</b> blog
        </div>
        <Pagination
          // setPage={setPage}
          activePage={page}
          totalPage={blogs?.meta.totalPage}
          sibling={1}
          queryString={queryString}
        />
      </div>
    </>
  );
};
