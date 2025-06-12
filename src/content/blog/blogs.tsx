'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Empty } from '@/components/empty/empty';
import { Pagination } from '@/components/pagination/pagination';
// import { blogDatas } from '@/data/blogs.data';
import { ApiResponseAll } from '@/types/api-response.type';
import { Blog } from '@/types/blog.type';

import BlogItem from './blog-item';
import LoadingBlogs from './loading-blogs';

export default () => {
  const { t } = useTranslation();
  const [tag] = useQueryState('tag');
  const [search] = useQueryState('q');
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  useEffect(() => {
    setPage(1);
  }, [tag, search, setPage]);

  const { data: blogs, isLoading: isLoadingBlogs } = useQuery({
    queryKey: ['blogs', { page, tag, search }],
    queryFn: async () => {
      const response = await axios.get<ApiResponseAll<Blog>>('/api/blog', {
        params: { page, tag, search, limit: 5 },
      });
      return response.data;
    },
  });

  if (isLoadingBlogs) return <LoadingBlogs count={3} />;

  if (blogs?.data.length === 0) return <Empty />;

  return (
    <>
      {blogs?.data.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      <div className="blogs-meta">
        <div
          className="meta-text"
          dangerouslySetInnerHTML={{
            __html: t('showing-result', {
              totalData: blogs?.data.length,
              totalAllData: blogs?.meta.totalAllData,
            }),
          }}
        ></div>
        <Pagination
          setCurrentPage={setPage}
          currentPage={page}
          totalPage={blogs?.meta.totalPage}
          sibling={2}
        />
      </div>
    </>
  );
};
