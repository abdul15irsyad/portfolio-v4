import * as Sentry from '@sentry/nextjs';

export const handleError = (error: unknown) => {
  // eslint-disable-next-line no-console
  console.error(error);
  Sentry.captureException(error);
};
