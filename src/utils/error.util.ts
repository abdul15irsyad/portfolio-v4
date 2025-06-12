import * as Sentry from '@sentry/nextjs';

export const handleError = (error: unknown) => {
  // eslint-disable-next-line no-console
  console.error(error);
  if (process.env.NODE_ENV !== 'development') Sentry.captureException(error);
};
