import React from 'react';

import { BackButton } from '@/components/back-button/back-button';
import { Portfolio } from '@/types/portfolio.type';

import Portfolio2Detail from './portfolio-2-detail';

export const PortfolioDetailView = ({
  portfolio,
}: {
  portfolio: Portfolio;
}) => {
  return (
    <div className='portfolio-detail section doodle-background'>
      <div className='container-lg'>
        <div className='row'>
          <div className='col-12'>
            <Portfolio2Detail portfolio={portfolio} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};
