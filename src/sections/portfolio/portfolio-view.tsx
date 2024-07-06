'use client';

import Empty from '@/components/empty';
import FormSelect from '@/components/form-select';
import { portfolios as allPortfolios } from '@/data/portfolios.data';
import React, { useEffect, useState } from 'react';
import PortfolioItem2 from '@/sections/portfolio/portfolio-item-2';
import {
  portfolioCategories,
  portfolioYears,
} from '@/data/portfolio-category.data';
import { paginatedArray } from '@/utils/array.util';
import Pagination from '@/components/pagination';
import { Portfolio } from '@/types/portfolio.type';
import { useTranslation } from 'react-i18next';
import { capitalize } from '@/utils/change-case';

export const PortfolioView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<string | number>('all');
  const [type, setType] = useState<string>('all');
  const limit = 6;
  const [portfolios, setPortofolios] = useState(
    paginatedArray(allPortfolios, { page, limit }),
  );
  const [totalAllData, setTotalAllData] = useState<number>(
    allPortfolios.length,
  );
  const filterPortfolios = (portfolios: Portfolio[]) =>
    portfolios.filter((portfolio) => {
      return (
        (year !== 'all' ? portfolio.year === +year : true) &&
        (type !== 'all' ? portfolio.type.toLowerCase() === type : true)
      );
    });

  // on year or type change
  useEffect(() => {
    const filteredPortfolios = filterPortfolios(allPortfolios);
    setPage(1);
    setPortofolios(paginatedArray(filteredPortfolios, { page, limit }));
    setTotalAllData(filteredPortfolios.length);
  }, [year, type]);

  // on page change
  useEffect(() => {
    const filteredPortfolios = filterPortfolios(allPortfolios);
    setPortofolios(paginatedArray(filteredPortfolios, { page, limit }));
  }, [page]);
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
            {totalAllData > 0 && (
              <p
                className="text-center text-secondary mt-3 mb-0"
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
        <div className="row porfolios mb-lg-5 mb-3">
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
            position="center"
            activePage={page}
            setPage={({ page }) => {
              setPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            totalPage={Math.ceil(totalAllData / limit)}
          />
        )}
      </div>
    </div>
  );
};
