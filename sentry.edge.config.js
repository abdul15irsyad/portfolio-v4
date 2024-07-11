import * as Sentry from '@sentry/nextjs';
import getConfig from 'next/config';

const SENTRY_DSN = getConfig()?.publicRuntimeConfig?.SENTRY_DSN;

Sentry.init({
  environment: process.env.NEXT_PUBLIC_ENV,
  enabled: process.env.NEXT_PUBLIC_ENV !== 'local',

  dsn: SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
