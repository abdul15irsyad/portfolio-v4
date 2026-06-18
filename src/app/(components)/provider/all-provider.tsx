'use client';

import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18next from '@/lib/locales/i18n.config';

import { AnalyticsProvider } from './analytics-provider';
import { ReactQueryProvider } from './react-query-provider';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#eef8fd', // 0
      '#d9eef8', // 1
      '#b6ddf1', // 2
      '#84c6e7', // 3
      '#4da9da', // 4
      '#238dca', // 5
      '#1174b2', // 6
      '#075985', // 7 ← Base / Primary
      '#06486d', // 8
      '#043553', // 9
    ],
  },
  primaryShade: 7,
  fontFamily: 'Outfit, sans-serif',
});

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <ReactQueryProvider>
        <I18nextProvider i18n={i18next}>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </I18nextProvider>
      </ReactQueryProvider>
    </MantineProvider>
  );
};
