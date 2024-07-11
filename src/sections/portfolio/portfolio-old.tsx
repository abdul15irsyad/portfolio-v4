'use client';

import AOS from 'aos';
import React, { useEffect, useState } from 'react';

import { Empty } from '@/components/empty/empty';
import { FormSelect } from '@/components/form-select/form-select';
import { aosInitConfig } from '@/configs/aos.config';
import { portfolios } from '@/data/portfolios.data';
import PortfolioItem from '@/sections/portfolio/portfolio-item';

export const PortfolioOld = () => {
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
    <div className="portfolio section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">Portfolio</h1>
            <hr />
            <div className="filters">
              <div className="filter filter-year">
                <FormSelect
                  options={[
                    { value: 'all', label: 'All Year', selected: true },
                    { value: '2021', label: '2021', selected: false },
                    { value: '2022', label: '2022', selected: false },
                    { value: '2023', label: '2023', selected: false },
                  ]}
                  handleChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="filter filter-type">
                <FormSelect
                  options={[
                    { value: 'all', label: 'All Type', selected: true },
                    {
                      value: 'fullstack',
                      label: 'Fullstack',
                      selected: false,
                    },
                    { value: 'backend', label: 'Backend', selected: false },
                    { value: 'frontend', label: 'Frontend', selected: false },
                    {
                      value: 'wordpress',
                      label: 'Wordpress',
                      selected: false,
                    },
                  ]}
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
        {filteredPortfolios.length > 0 ? (
          filteredPortfolios.map((portfolio, index) => (
            <PortfolioItem key={index} {...portfolio} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
