'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Portfolio } from '@/types/portfolio.type';
import styles from './portfolio-item-2.module.css';

const PortfolioItem2 = ({
  images,
  title,
  slug,
  year,
  type,
  stacks,
}: Portfolio) => {
  return (
    <div
      className={`${styles['portfolio-item-2']} align-items-center`}
      data-aos="fade-up"
    >
      <div className={`${styles.image}`}>
        <div className={`${styles.overlay}`}>
          <div className={`${styles.stacks}`}>
            {stacks.map(({ icon, label }, index) => (
              <OverlayTrigger
                key={index}
                overlay={<Tooltip id={`tooltip-${index}`}>{label}</Tooltip>}
                placement="top"
              >
                <div className={`${styles.stack}`}>
                  <Image src={icon} alt={label} width={28} height={28} />
                </div>
              </OverlayTrigger>
            ))}
          </div>
        </div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={480}
          height={480}
        />
      </div>
      <div className={`${styles.detail}`}>
        <div className={`${styles.metas}`}>
          <div className={`${styles.meta}`}>{year}</div>
          <div className={`${styles.meta}`}>{type.toLowerCase()}</div>
        </div>
        <h3 className={`${styles.title}`}>
          <Link href={`/portfolio-2/${slug}`} prefetch={false}>
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default PortfolioItem2;
