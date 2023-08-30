import { APP_NAME } from '@/configs/app.config';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Side Project - ${APP_NAME}`,
};

export default ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
