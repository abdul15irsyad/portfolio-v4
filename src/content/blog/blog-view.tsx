'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useQueryState } from 'nuqs';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClearButton } from '@/components/clear-button';
import Donate from '@/components/donate/donate';
import { SearchBar } from '@/components/search-bar/search-bar';
import { SectionTitle } from '@/components/section-title/section-title.component';
import Blogs from '@/content/blog/blogs';
import LoadingTags from '@/content/blog/loading-tags';
import { ApiResponseAll } from '@/types/api-response.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

export const BlogView = () => {
  const { t } = useTranslation();
  const [tag, setTag] = useQueryState('tag');
  const [querySearch, setQuerySearch] = useQueryState('q');
  const [search, setSearch] = useState('');
  const [isTagsExpand, setIsTagsExpand] = useState<boolean>(false);

  const { data: allTags, isLoading: isLoadingAllTags } = useQuery({
    queryKey: ['allTags'],
    queryFn: async () => {
      const response = await axios.get<ApiResponseAll<string>>('/api/blog/tag');
      return response.data;
    },
    staleTime: 1000 * 60 * 60 * 2,
  });

  const handleClearFilter = useCallback(() => {
    setTag(null);
    setQuerySearch(null);
    setSearch('');
  }, [setTag, setQuerySearch]);

  return (
    <>
      <div className="blog section doodle-background">
        <div className="container">
          <div className="row header">
            <div className="col">
              <SectionTitle
                title={capitalizeEachWord(t('blog'))}
                subTitle={t('blog-desc')}
              />
              <SearchBar
                search={search}
                setSearch={setSearch}
                setQuerySearch={setQuerySearch}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-12">
              {(querySearch || tag) && (
                <div className="blog-filter">
                  <div className="blog-filter-text">
                    <h4 className="blog-filter-heading">
                      {capitalize(t('result-for'))}{' '}
                      {querySearch && <span>&quot;{querySearch}&quot;</span>}{' '}
                      {querySearch && tag && t('and')}{' '}
                      {tag && <span>#{tag}</span>}
                    </h4>
                  </div>
                  <div className="blog-filter-reset">
                    <ClearButton onClick={handleClearFilter} />
                  </div>
                </div>
              )}
              <Blogs />
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
                        <div
                          key={index}
                          onClick={() => setTag(tag)}
                          className="blog-tag"
                          title={tag}
                        >
                          #{tag}
                        </div>
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
