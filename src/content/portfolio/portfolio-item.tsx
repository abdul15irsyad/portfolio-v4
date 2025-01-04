'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { CustomCarousel } from '@/components/custom-carousel/custom-carousel';
import { Portfolio } from '@/types/portfolio.type';

const PortfolioItem = ({
  images,
  href,
  title,
  year,
  type,
  desc,
  stacks,
}: Portfolio) => {
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  return (
    <div className="row portfolio-item align-items-center" data-aos="fade-up">
      <div className="col-md-5 col-12 portfolio-item-images">
        <CustomCarousel
          images={images}
          activeIndex={carouselActiveIndex}
          setActiveIndex={setCarouselActiveIndex}
        />
      </div>
      <div className="col-md-7 col-12 portfolio-item-detail">
        <h3 className="portfolio-item-title">{title}</h3>
        <div className="portfolio-item-metas">
          <div className="portfolio-item-meta">{year}</div>
          <div className="portfolio-item-meta">{type.label.toLowerCase()}</div>
        </div>
        <div
          className="portfolio-item-desc"
          dangerouslySetInnerHTML={{ __html: desc ?? '' }}
        ></div>
        <div className="portfolio-bottom">
          <div className="portfolio-button">
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Lihat</span>
                <i className="bi bi-box-arrow-up-right ms-2" />
              </Link>
            )}
          </div>
          <div className="portfolio-item-stacks">
            {stacks.map(({ icon, label }, index) => (
              <OverlayTrigger
                key={index}
                overlay={<Tooltip id={`tooltip-${index}`}>{label}</Tooltip>}
                placement="bottom"
              >
                <div className="portfolio-item-stack">
                  <Image src={icon} alt={label} width={28} height={28} />
                </div>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
