import { Suspense } from 'react';

import { BlogView } from '@/content/blog/blog-view';

export default async () => {
  return (
    <Suspense>
      <BlogView />
    </Suspense>
  );
};
