'use client';

import { ApiResponseAll } from '@/types/api-response.type';
import { Blog } from '@/types/blog.type';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingBlogs from '../../components/loading-blogs';
import Empty from '../../components/empty';
import BlogItem from './blog-item';
import Pagination from '../../components/pagination';
import { useTranslation } from 'react-i18next';
// import { blogDatas } from '@/data/blogs.data';

type Prop = {
  limit?: number;
  queryString: (name: string, value: string) => string;
};

export default ({ limit = 5, queryString }: Prop) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const activePage = searchParams.get('page') ? +searchParams.get('page')! : 1;
  const setPage = ({
    page,
    activePage,
  }: {
    page: number;
    activePage: number;
  }) => {
    if (page !== activePage && queryString !== undefined)
      router.push(`/blog?${queryString('page', page.toString())}`);
  };

  const { data: blogs, isLoading: isLoadingBlogs } = useQuery<
    ApiResponseAll<Blog>
  >({
    queryKey: ['blogs', { page: activePage, tag, search }],
    queryFn: async () => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('limit', limit.toString());
      if (activePage) newSearchParams.set('page', activePage.toString());
      if (tag) newSearchParams.set('tag', tag);
      if (search) newSearchParams.set('search', search);
      // return {
      //   data: blogDatas.slice((activePage - 1) * limit, limit),
      //   message: 'test',
      //   meta: {
      //     currentPage: activePage,
      //     totalPage: limit
      //       ? Math.ceil(blogDatas.length / limit)
      //       : blogDatas.slice((activePage - 1) * limit, limit).length > 0
      //       ? 1
      //       : null,
      //     totalData: blogDatas.slice((activePage - 1) * limit, limit).length,
      //     totalAllData: blogDatas.length,
      //   },
      // } as any;
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
          setPage={setPage}
          activePage={activePage}
          totalPage={blogs?.meta.totalPage}
          sibling={2}
        />
      </div>
    </>
  );
};
