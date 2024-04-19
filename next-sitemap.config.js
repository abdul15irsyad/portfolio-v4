/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL ?? 'https://irsyadabdul.my.id',
  generateRobotsTxt: true,
  exclude: ['/api*', '/portfolio-old'],
};
