import { APP_NAME } from '@/configs/app.config';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Blog - ${APP_NAME}`,
  description: 'My blog for sharing about programming or anything',
  twitter: {
    title: `Blog - ${APP_NAME}`,
    description: 'My blog for sharing about programming or anything',
  },
  openGraph: {
    title: `Blog - ${APP_NAME}`,
    description: 'My blog for sharing about programming or anything',
  },
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
