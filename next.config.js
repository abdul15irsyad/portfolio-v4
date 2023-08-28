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
        hostname: 'irsyadabdul.my.id',
      },
    ],
  },
};

module.exports = nextConfig;
