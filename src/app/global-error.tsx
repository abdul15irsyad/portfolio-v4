'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

import { handleError } from '@/utils/error.util';

export default ({ error }: { error: Error }) => {
  useEffect(() => {
    handleError(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
};
