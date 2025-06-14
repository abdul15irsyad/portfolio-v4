import { Suspense } from 'react';

import { PortfolioView2 } from '@/content/portfolio/portfolio-view-2';

export default () => {
  return (
    <Suspense>
      <PortfolioView2 />
    </Suspense>
  );
};
