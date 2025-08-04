import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  environment: process.env.NEXT_PUBLIC_ENV,
  enabled: process.env.NEXT_PUBLIC_ENV !== 'local',
  dsn: SENTRY_DSN,
  integrations: [],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
