'use client';

import { ApiResponseAll } from '@/types/api-response.type';
import { Blog } from '@/types/blog.type';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import LoadingBlogs from './LoadingBlogs';
import Empty from './Empty';
import BlogItem from './BlogItem';

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

  if (isLoadingBlogs) return <LoadingBlogs />;

  if (blogs!.data.length === 0) return <Empty />;

  return (
    <>
      {blogs!.data.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </>
  );
};
