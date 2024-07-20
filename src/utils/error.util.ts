import * as Sentry from '@sentry/nextjs';

export const handleError = (error: unknown) => {
  console.error(error);
  Sentry.captureException(error);
};
