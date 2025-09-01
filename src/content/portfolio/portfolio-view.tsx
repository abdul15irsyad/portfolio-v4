'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Empty } from '@/components/empty/empty';
import { FormSelect } from '@/components/form-select/form-select';
import { Pagination } from '@/components/pagination/pagination';
import { SectionTitle } from '@/components/section-title/section-title.component';
import PortfolioItem2 from '@/content/portfolio/portfolio-item-2';
import {
  portfolioCategories,
  portfolioYears,
} from '@/data/portfolio-category.data';
import { portfolios as allPortfolios } from '@/data/portfolios.data';
import { Portfolio } from '@/types/portfolio.type';
import { paginatedArray } from '@/utils/array.util';
import { capitalize } from '@/utils/change-case';

export const PortfolioView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  const [year, setYear] = useState<string | number>('all');
  const [type, setType] = useState<string>('all');
  const limit = 6;
  const [portfolios, setPortofolios] = useState(
    paginatedArray(allPortfolios, { page, limit }),
  );
  const [totalAllData, setTotalAllData] = useState<number>(
    allPortfolios.length,
  );
  const filterPortfolios = useCallback(
    (portfolios: Portfolio[]) =>
      portfolios.filter((portfolio) => {
        return (
          (year !== 'all' ? portfolio.year === +year : true) &&
          (type !== 'all'
            ? portfolio.type?.label?.toLowerCase() === type
            : true)
        );
      }),
    [type, year],
  );

  // on year or type change
  useEffect(() => {
    const filteredPortfolios = filterPortfolios(allPortfolios);
    setPage(1);
    setPortofolios(paginatedArray(filteredPortfolios, { page, limit }));
    setTotalAllData(filteredPortfolios.length);
  }, [year, type, filterPortfolios, page]);

  // on page change
  useEffect(() => {
    const filteredPortfolios = filterPortfolios(allPortfolios);
    setPortofolios(paginatedArray(filteredPortfolios, { page, limit }));
  }, [filterPortfolios, page]);
  return (
    <div className='portfolio section doodle-background'>
      <div className='container'>
        <div className='row header'>
          <div className='col'>
            <SectionTitle title={capitalize(t('portfolio'))} />
            <div className='filters'>
              <div className='filter filter-year'>
                <FormSelect
                  options={portfolioYears}
                  handleChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className='filter filter-type'>
                <FormSelect
                  options={portfolioCategories}
                  handleChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>
            {totalAllData > 0 && (
              <p
                className='text-center text-secondary mt-3 mb-0'
                dangerouslySetInnerHTML={{
                  __html: t('showing-result', {
                    totalData: portfolios.length,
                    totalAllData,
                  }),
                }}
              />
            )}
          </div>
        </div>
        <div className='row porfolios mb-lg-5 mb-3'>
          {portfolios.length > 0 ? (
            portfolios.map((portfolio, index) => (
              <div
                key={index}
                className={`col-xl-4 col-md-6 col-12 gx-4 gy-md-4 gy-3`}
              >
                <PortfolioItem2 {...portfolio} />
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
        {totalAllData > 0 && (
          <Pagination
            position='center'
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={Math.ceil(totalAllData / limit)}
          />
        )}
      </div>
    </div>
  );
};
