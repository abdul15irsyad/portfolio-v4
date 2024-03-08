import { APP_NAME, ENV } from '@/configs/app.config';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: `Portfolio - ${APP_NAME}`,
};

export default ({ children }: { children: React.ReactNode }) => {
  if (ENV !== 'development') return notFound();
  return <>{children}</>;
};
