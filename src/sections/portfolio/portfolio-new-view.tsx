'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Empty } from '@/components/empty/empty';
import { FormSelect } from '@/components/form-select/form-select';
import { Pagination } from '@/components/pagination/pagination';
import {
  portfolioCategories,
  portfolioYears,
} from '@/data/portfolio-category.data';
import PortfolioItem2 from '@/sections/portfolio/portfolio-item-2';
import { Portfolio } from '@/types/portfolio.type';
import { capitalize } from '@/utils/change-case';

import { PortfolioItem2Loading } from './portfolio-item-2-loading';

export const PortfolioNewView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<string | number>('all');
  const [type, setType] = useState<string>('all');
  const limit = 6;
  const { data: portfoliosResponse, isLoading: portfoliosLoading } = useQuery<{
    msg: string;
    data: Portfolio[];
    meta: { totalAllData: number; totalData: number };
  }>({
    queryKey: ['portfolios', { page, limit, type, year }],
    queryFn: async () => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('limit', limit.toString());
      if (page) newSearchParams.set('page', page.toString());
      if (type) newSearchParams.set('type', type);
      if (year) newSearchParams.set('year', year.toString());
      const url = `/api/portfolios?${newSearchParams.toString()}`;
      return (await fetch(url)).json();
    },
    cacheTime: 0,
  });

  // on year or type change
  useEffect(() => setPage(1), [year, type]);

  return (
    <div className="portfolio section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">{capitalize(t('portfolio'))}</h1>
            <hr />
            <div className="filters">
              <div className="filter filter-year">
                <FormSelect
                  options={portfolioYears}
                  handleChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="filter filter-type">
                <FormSelect
                  options={portfolioCategories}
                  handleChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>
            {!portfoliosLoading ? (
              (portfoliosResponse?.meta?.totalAllData ?? 0) > 0 && (
                <p
                  className="text-center text-secondary mt-3 mb-0"
                  dangerouslySetInnerHTML={{
                    __html: t('showing-result', {
                      totalData: portfoliosResponse?.meta?.totalData,
                      totalAllData: portfoliosResponse?.meta?.totalAllData,
                    }),
                  }}
                />
              )
            ) : (
              <Placeholder animation="glow">
                <Placeholder style={{ height: '40px' }} />
              </Placeholder>
            )}
          </div>
        </div>
        <div className="row porfolios mb-lg-5 mb-3">
          {!portfoliosLoading ? (
            (portfoliosResponse?.data?.length ?? 0) > 0 ? (
              portfoliosResponse?.data?.map((portfolio, index) => (
                <div
                  key={index}
                  className={`col-xl-4 col-md-6 col-12 gx-4 gy-md-4 gy-3`}
                >
                  <PortfolioItem2 {...portfolio} />
                </div>
              ))
            ) : (
              <Empty />
            )
          ) : (
            <PortfolioItem2Loading count={limit} />
          )}
        </div>
        {(portfoliosResponse?.meta?.totalAllData ?? 0) > 0 && (
          <Pagination
            position="center"
            activePage={page}
            setPage={({ page }) => {
              setPage(page);
              // window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            totalPage={Math.ceil(
              (portfoliosResponse?.meta?.totalAllData ?? 0) / limit,
            )}
          />
        )}
      </div>
    </div>
  );
};
