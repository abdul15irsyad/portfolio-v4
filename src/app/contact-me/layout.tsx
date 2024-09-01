import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

import { APP_NAME, EXPERIMENTAL } from '@/configs/app.config';

export const metadata: Metadata = {
  title: `Contact - ${APP_NAME}`,
};

export default ({ children }: { children: React.ReactNode }) => {
  if (!EXPERIMENTAL) {
    return notFound();
  }
  return <>{children}</>;
};
