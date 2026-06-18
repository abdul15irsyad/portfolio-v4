import { Suspense } from 'react';

import { PortfolioView2 } from '@/app/portfolio/(components)/portfolio-view-2';

export default () => {
  return (
    <Suspense>
      <PortfolioView2 />
    </Suspense>
  );
};
