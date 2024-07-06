import React from 'react';
import { notFound } from 'next/navigation';
import { portfolios } from '@/data/portfolios.data';
import { Metadata } from 'next';
import { APP_NAME, BASE_URL } from '@/configs/app.config';
import sanitize from 'sanitize-html';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { commonMetaData } from '@/app/layout';
import { PortfolioDetailView } from '@/sections/portfolio/portfolio-detail-view';

export async function generateMetadata({ params }): Promise<Metadata> {
  const portfolio = portfolios.find(({ slug }) => slug === params.slug);
  if (!portfolio) return commonMetaData;
  const title = `${portfolio?.title} (${portfolio.year}) - ${APP_NAME}`;
  const porfolioDesc = portfolio.translates?.find(({ lang }) => lang === 'id')
    ?.desc;
  const description = porfolioDesc
    ? `${sanitize(porfolioDesc ?? '', {
        ...defaultSanitizeOptions,
      })
        .split(' ')
        .filter((word) => word !== '')
        .slice(0, 20)
        .join(' ')
        .trim()}...`
    : undefined;
  const metaData = {
    title: title,
    images: [portfolio?.images[0]!.src],
    description: description ?? commonMetaData.description,
  };

  return {
    title: title,
    description,
    twitter: {
      card: 'summary',
      ...metaData,
    },
    openGraph: {
      url: `${BASE_URL}/portfolio/${portfolio.slug}`,
      type: 'article',
      locale: 'id_ID',
      ...metaData,
    },
  };
}

export default async ({ params }) => {
  const portfolio = portfolios.find(({ slug }) => slug === params.slug);
  if (!portfolio) notFound();
  return <PortfolioDetailView portfolio={portfolio} />;
};
