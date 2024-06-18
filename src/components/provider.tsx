'use client';

import React, { ReactNode } from 'react';
import AnalyticsProvider from './analytics';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/locales/i18n.config';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </I18nextProvider>
  );
};
