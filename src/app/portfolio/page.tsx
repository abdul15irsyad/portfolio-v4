'use client';

import FormSelect from '@/components/FormSelect';
import PortfolioItem from '@/components/PortfolioItem';
import { portfolios } from '@/data/portolios.data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [year, setYear] = useState<string | number>('all');
  const [type, setType] = useState<string>('all');
  const [filteredPortfolios, setFilteredPortofolio] = useState(portfolios);
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
                  handleChange={(e) => setYear(e.target.value)}
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
          <div className="empty">
            <div className="empty-img">
              <Image src="/empty.png" alt="No Data" width={200} height={200} />
            </div>
            <div className="empty-text">
              <h2>Empty Data</h2>
              <p>sorry, there is no data found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
