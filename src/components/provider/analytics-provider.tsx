'use client';

import Script from 'next/script';
import React from 'react';

import { ENV } from '@/configs/app.config';

interface Props {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: Props) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const REPORT_DOMAIN = 'https://www.google-analytics.com';

  return (
    <>
      {children}
      {/* {ENV === 'production' && ( */}
      <>
        <Script
          id="google-analytics-js-cdn"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GA_MEASUREMENT_ID}', {
                 page_path: window.location.pathname,
                 transport_url: '${REPORT_DOMAIN}',
                 first_party_collection: true
              });
          `,
          }}
        />
      </>
      {/* )} */}
    </>
  );
};
