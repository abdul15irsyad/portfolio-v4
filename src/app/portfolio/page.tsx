'use client';

import Empty from '@/components/empty';
import FormSelect from '@/components/form-select';
import { portfolios } from '@/data/portfolios.data';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { aosInitConfig } from '@/configs/aos.config';
import PortfolioItem2 from '@/components/portfolio-item-2';
import {
  portfolioCategories,
  portfolioYears,
} from '@/data/portfolio-category.data';

export default () => {
  const [year, setYear] = useState<string | number>('all');
  const [type, setType] = useState<string>('all');
  const [filteredPortfolios, setFilteredPortofolio] = useState(portfolios);

  useEffect(() => {
    AOS.init(aosInitConfig);
  });

  useEffect(() => {
    setFilteredPortofolio(
      portfolios.filter((portfolio) => {
        return (
          (year !== 'all' ? portfolio.year === +year : true) &&
          (type !== 'all' ? portfolio.type.toLowerCase() === type : true)
        );
      }),
    );
  }, [year, type]);
  return (
    <>
      <div className="portfolio section doodle-background">
        <div className="container">
          <div className="row header">
            <div className="col">
              <h1 className="title">Portfolio</h1>
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
              <p className="text-center text-secondary mt-3 mb-0">
                Showing <strong>{filteredPortfolios.length}</strong> of{' '}
                <strong>{portfolios.length}</strong> portfolios
              </p>
            </div>
          </div>
          <div className="row porfolios">
            {filteredPortfolios.length > 0 ? (
              filteredPortfolios.map((portfolio, index) => (
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
        </div>
      </div>
    </>
  );
};
