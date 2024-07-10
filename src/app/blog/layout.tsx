import { Metadata } from 'next';
import React from 'react';

import { APP_NAME, BASE_URL } from '@/configs/app.config';

export const metadata: Metadata = {
  title: `Blog - ${APP_NAME}`,
  description: 'My blog for sharing about programming or anything',
  twitter: {
    title: `Blog - ${APP_NAME}`,
    images: `${BASE_URL}/meta-image.jpg`,
    description: 'My blog for sharing about programming or anything',
  },
  openGraph: {
    title: `Blog - ${APP_NAME}`,
    images: `${BASE_URL}/meta-image.jpg`,
    description: 'My blog for sharing about programming or anything',
  },
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
