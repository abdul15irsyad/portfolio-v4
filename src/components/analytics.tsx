'use client';

import React from 'react';
import Script from 'next/script';
import { ENV } from '@/configs/app.config';

interface Props {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: Props) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const DOMAIN = 'https://www.googletagmanager.com';
  const REPORT_DOMAIN = 'https://www.google-analytics.com';

  return (
    <>
      {children}
      {ENV === 'production' && (
        <>
          <Script
            id="google-analytics-js-cdn"
            src={`${DOMAIN}/gtag/js?id=${GA_MEASUREMENT_ID}`}
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
      )}
    </>
  );
}
