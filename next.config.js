const { withSentryConfig } = require('@sentry/nextjs');
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  reactStrictMode: process.env.APP_ENV !== 'production',
  images: {
    remotePatterns:
      process.env.APP_ENV === 'production'
        ? [
            {
              protocol: 'https',
              hostname: 'irsyadabdul.my.id',
            },
          ]
        : [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '4000',
            },
            // {
            //   protocol: 'https',
            //   hostname: 'ktz1zlfp-4000.asse.devtunnels.ms',
            // },
          ],
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: 'project-abdul',
  project: 'portfolio-v4',
  // authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  telemetry: false,
  hideSourceMaps: true,
});
