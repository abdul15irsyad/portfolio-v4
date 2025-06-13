import { Suspense } from 'react';

import { PortfolioNewView } from '@/content/portfolio/portfolio-new-view';

export default () => {
  return (
    <Suspense>
      <PortfolioNewView />
    </Suspense>
  );
};
