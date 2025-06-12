'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import nProgress from 'nprogress';
import { parseAsInteger, useQueryState } from 'nuqs';
import { Placeholder } from 'react-bootstrap';
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
import { Portfolio } from '@/types/portfolio.type';
import { capitalizeEachWord } from '@/utils/change-case';

import { PortfolioItem2Loading } from './portfolio-item-2-loading';

export const PortfolioNewView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [year, setYear] = useQueryState('year', { defaultValue: 'all' });
  const [type, setType] = useQueryState('type', { defaultValue: 'all' });
  const limit = 6;

  const { data: portfoliosResponse, isLoading: portfoliosLoading } = useQuery({
    queryKey: ['portfolios', { page, limit, type, year }],
    queryFn: async () => {
      nProgress.start();
      const response = await axios.get<{
        message: string;
        data: Portfolio[];
        meta: { totalAllData: number; totalData: number };
      }>('/api/portfolios', {
        params: {
          page,
          limit,
          type,
          year,
        },
      });
      return response.data;
    },
  });

  return (
    <div className="portfolio section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <SectionTitle
              title={capitalizeEachWord(t('portfolio'))}
              subTitle={t('portfolio-desc')}
            />
            <div className="filters">
              <div className="filter filter-year">
                <FormSelect
                  defaultValue={year}
                  options={portfolioYears}
                  handleChange={(e) => setYear(e.target?.value)}
                />
              </div>
              <div className="filter filter-type">
                <FormSelect
                  defaultValue={type}
                  options={portfolioCategories}
                  handleChange={(e) => setType(e.target?.value)}
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
                  className={`col-xxl-4 col-md-6 col-12 gx-4 gy-md-4 gy-3`}
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
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={Math.ceil(
              (portfoliosResponse?.meta?.totalAllData ?? 0) / limit,
            )}
          />
        )}
      </div>
    </div>
  );
};
