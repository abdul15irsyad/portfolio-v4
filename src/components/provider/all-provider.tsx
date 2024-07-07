'use client';

import React, { ReactNode } from 'react';
import { AnalyticsProvider } from './analytics-provider';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18n.config';
import { ReactQueryProvider } from './react-query-provider';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <I18nextProvider i18n={i18next}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </I18nextProvider>
    </ReactQueryProvider>
  );
};
