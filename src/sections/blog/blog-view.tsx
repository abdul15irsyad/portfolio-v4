'use client';

import Blogs from '@/sections/blog/blogs';
import Donate from '@/components/donate/donate';
import LoadingTags from '@/sections/blog/loading-tags';
import { SearchBar } from '@/components/search-bar/search-bar';
import { ENV } from '@/configs/app.config';
import { ApiResponseAll } from '@/types/api-response.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BlogView = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const [isTagsExpand, setIsTagsExpand] = useState<boolean>(false);

  const { data: allTags, isLoading: isLoadingAllTags } = useQuery<
    ApiResponseAll<string>
  >({
    queryKey: ['allTags'],
    queryFn: async () => (await fetch('/api/blog/tag')).json(),
    cacheTime: 0,
  });

  const queryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      if (name !== 'page') params.delete('page');
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
              <h1 className="title">{capitalize(t('blog'))}</h1>
              <p className="sub-title">{t('blog-desc')}</p>
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
                      {capitalize(t('result-for'))}{' '}
                      {search && <span>"{search}"</span>}{' '}
                      {search && tag && t('and')} {tag && <span>#{tag}</span>}
                    </h4>
                  </div>
                  <div className="blog-filter-reset">
                    <Link
                      href="/blog"
                      type="button"
                      className="btn btn-sm btn-outline-danger mt-3"
                      title="clear filter"
                    >
                      <i className="bi bi-trash me-1"></i>
                      <span>{capitalizeEachWord(t('clear-filter'))}</span>
                    </Link>
                  </div>
                </div>
              )}
              <Blogs
                limit={ENV === 'production' ? 5 : 5}
                queryString={queryString}
              />
            </div>
            <div className="col-xl-3 col-12 blog-sidebar">
              <div
                className={`all-tags box-container ${
                  isLoadingAllTags ? 'is-loading' : ''
                } ${isTagsExpand ? 'expand' : ''}`}
              >
                <div className="overlay">
                  <i
                    className="bi bi-chevron-down"
                    title={`${isTagsExpand ? 'collapse' : 'expand'}`}
                    onClick={() => setIsTagsExpand(!isTagsExpand)}
                  ></i>
                </div>
                <h5 className="all-tags-title box-container-title">
                  <i className="bi bi-tags"></i>
                  <span>{capitalize(t('tags'))}</span>
                </h5>
                {isLoadingAllTags ? (
                  <LoadingTags sizes={[8, 5, 7, 5, 7, 9, 6]} />
                ) : allTags!.data.length > 0 ? (
                  <>
                    <div className="blog-tags">
                      {allTags?.data.map((tag, index) => (
                        <Link
                          href={`/blog?${queryString('tag', tag)}`}
                          key={index}
                          className="blog-tag"
                          title={tag}
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center text-secondary">
                    {capitalizeEachWord(t('no-tag'))}
                  </div>
                )}
              </div>
              <Donate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
