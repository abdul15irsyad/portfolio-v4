'use client';

import FormSelect from '@/components/FormSelect';
import PortfolioItem from '@/components/PortfolioItem';
import { portfolios } from '@/data/portolios.data';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio section">
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
                />
              </div>
              <div className="filter filter-type">
                <FormSelect
                  options={[
                    { value: 'all', label: 'All Type', selected: true },
                    { value: 'fullstack', label: 'Fullstack', selected: false },
                    { value: 'backend', label: 'Backend', selected: false },
                    { value: 'frontend', label: 'Frontend', selected: false },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        {portfolios.map((portfolio, index) => (
          <PortfolioItem key={index} {...portfolio} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
