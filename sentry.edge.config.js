import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN;

Sentry.init({
  environment: process.env.APP_ENV,
  enabled: process.env.APP_ENV !== 'local',
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
});
