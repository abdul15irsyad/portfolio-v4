/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, serverActions: true },
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
    ],
  },
};

module.exports = nextConfig;
