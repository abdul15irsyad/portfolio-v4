const { withSentryConfig } = require('@sentry/nextjs');
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: process.env.NEXT_PUBLIC_ENV ?? 'development',
  reactStrictMode: process.env.NEXT_PUBLIC_ENV !== 'production',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
      },
      {
        protocol: 'https',
        hostname: 'ktz1zlfp-4000.asse.devtunnels.ms',
      },
      {
        protocol: 'https',
        hostname: 'irsyadabdul.my.id',
      },
      {
        protocol: 'https',
        hostname: 'trakteer.id',
      },
    ],
  },
  publicRuntimeConfig: {
    SENTRY_DSN: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: 'freelance-abdul',
  project: 'portfolio-v4',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
