import { Metadata } from 'next';
import React from 'react';

import { APP_NAME } from '@/configs/app.config';

export const metadata: Metadata = {
  title: `Portfolio - ${APP_NAME}`,
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
