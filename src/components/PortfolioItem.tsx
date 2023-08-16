'use client';

import React from 'react';
import CustomCarousel from './CustomCarousel';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  href?: string | null;
  year: number;
  type: string;
  desc: string;
  stacks: { icon: string; label: string }[];
  images: {
    src: string;
    alt: string;
  }[];
}

const PortfolioItem = ({
  images,
  href,
  title,
  year,
  type,
  desc,
  stacks,
}: Props) => {
  return (
    <div className="row portfolio-item">
      <div className="col-md-5 col-12 portfolio-item-images">
        <CustomCarousel images={images} />
      </div>
      <div className="col-md-7 col-12 portfolio-item-detail">
        <h3 className="portfolio-item-title">
          {href ? (
            <Link href={href} target="_blank">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <div className="portfolio-item-metas">
          <div className="portfolio-item-meta">{year}</div>
          <span>-</span>
          <div className="portfolio-item-meta">{type}</div>
        </div>
        <div
          className="portfolio-item-desc"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
        <div className="portfolio-item-stacks">
          {stacks.map(({ icon, label }) => (
            <div className="portfolio-item-stack">
              <Image
                src={icon}
                alt={label}
                width={28}
                height={28}
                title={label}
              />
            </div>
          ))}
        </div>
        {href && (
          <Link href={href} target="_blank" className="btn btn-primary">
            <span>Open Preview</span>
            <i className="bi bi-chevron-right ms-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
