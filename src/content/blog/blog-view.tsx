'use client';

import { useQueryState } from 'nuqs';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClearButton } from '@/components/clear-button';
import Donate from '@/components/donate/donate';
import { Empty } from '@/components/empty/empty';
import { Pagination } from '@/components/pagination/pagination';
import { SearchBar } from '@/components/search-bar/search-bar';
import { SectionTitle } from '@/components/section-title/section-title.component';
import BlogItem from '@/content/blog/blog-item';
import { Blog } from '@/types/blog.type';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

const BLOGS_PER_PAGE = 5;

type BlogViewProps = {
  blogs: Blog[];
  tags: string[];
};

export const BlogView = ({ blogs, tags }: BlogViewProps) => {
  const { t } = useTranslation();
  const [tag, setTag] = useQueryState('tag');
  const [querySearch, setQuerySearch] = useQueryState('q');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isTagsExpand, setIsTagsExpand] = useState<boolean>(false);

  const filteredBlogs = useMemo(() => {
    let result = blogs;
    if (tag) {
      result = result.filter((blog) => blog.tags?.includes(tag));
    }
    if (querySearch) {
      result = result.filter((blog) =>
        blog.title.toLowerCase().includes(querySearch.toLowerCase()),
      );
    }
    return result;
  }, [blogs, tag, querySearch]);

  const totalPage = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE,
  );

  const handleClearFilter = useCallback(() => {
    setTag(null);
    setQuerySearch(null);
    setSearch('');
    setPage(1);
  }, [setTag, setQuerySearch]);

  const handleSetTag = useCallback(
    (newTag: string) => {
      setTag(newTag);
      setPage(1);
    },
    [setTag],
  );

  const handleSetQuerySearch = useCallback(
    (value: string) => {
      setQuerySearch(value);
      setPage(1);
    },
    [setQuerySearch],
  );

  return (
    <>
      <div className='blog section doodle-background'>
        <div className='container'>
          <div className='row header'>
            <div className='col'>
              <SectionTitle
                title={capitalizeEachWord(t('blog'))}
                subTitle={t('blog-desc')}
              />
              <SearchBar
                search={search}
                setSearch={setSearch}
                setQuerySearch={handleSetQuerySearch}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-9 col-12'>
              {(querySearch || tag) && (
                <div className='blog-filter'>
                  <div className='blog-filter-text'>
                    <h4 className='blog-filter-heading'>
                      {capitalize(t('result-for'))}{' '}
                      {querySearch && <span>&quot;{querySearch}&quot;</span>}{' '}
                      {querySearch && tag && t('and')}{' '}
                      {tag && <span>#{tag}</span>}
                    </h4>
                  </div>
                  <div className='blog-filter-reset'>
                    <ClearButton onClick={handleClearFilter} />
                  </div>
                </div>
              )}
              {paginatedBlogs.length === 0 ? (
                <Empty />
              ) : (
                <>
                  {paginatedBlogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                  ))}
                  <div className='blogs-meta'>
                    <div
                      className='meta-text'
                      dangerouslySetInnerHTML={{
                        __html: t('showing-result', {
                          totalData: paginatedBlogs.length,
                          totalAllData: filteredBlogs.length,
                        }),
                      }}
                    ></div>
                    <Pagination
                      setCurrentPage={setPage}
                      currentPage={page}
                      totalPage={totalPage}
                      sibling={2}
                    />
                  </div>
                </>
              )}
            </div>
            <div className='col-xl-3 col-12 blog-sidebar'>
              <div
                className={`all-tags box-container ${isTagsExpand ? 'expand' : ''}`}
              >
                <div className='overlay'>
                  <i
                    className='bi bi-chevron-down'
                    title={`${isTagsExpand ? 'collapse' : 'expand'}`}
                    onClick={() => setIsTagsExpand(!isTagsExpand)}
                  ></i>
                </div>
                <h5 className='all-tags-title box-container-title'>
                  <i className='bi bi-tags'></i>
                  <span>{capitalize(t('tags'))}</span>
                </h5>
                {tags.length > 0 ? (
                  <div className='blog-tags'>
                    {tags.map((tagItem, index) => (
                      <div
                        key={index}
                        onClick={() => handleSetTag(tagItem)}
                        className='blog-tag'
                        title={tagItem}
                      >
                        #{tagItem}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center text-secondary'>
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
