import React from 'react';
import { notFound } from 'next/navigation';
import { BackButton } from '@/components/back-button';
import { portfolios } from '@/data/portfolios.data';
import { Metadata } from 'next';
import { APP_NAME, BASE_URL } from '@/configs/app.config';
import sanitize from 'sanitize-html';
import { defaultSanitizeOptions } from '@/utils/html.util';
import { commonMetaData } from '@/app/layout';
import Portfolio2Detail from '@/components/portfolio-2-detail';

export async function generateMetadata({ params }): Promise<Metadata> {
  const portfolio = portfolios.find(({ slug }) => slug === params.slug);
  if (!portfolio) return commonMetaData;
  const title = `${portfolio?.title} - ${APP_NAME}`;
  const description = `${sanitize(portfolio.desc, {
    ...defaultSanitizeOptions,
  })
    .split(' ')
    .slice(0, 20)
    .join(' ')
    .trim()}...`;
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
  return (
    <div className="portfolio-detail section doodle-background">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Portfolio2Detail portfolio={portfolio} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};
