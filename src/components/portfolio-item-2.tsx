'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Portfolio } from '@/types/portfolio.type';
import styles from './portfolio-item-2.module.css';

const PortfolioItem2 = ({
  images,
  href,
  title,
  slug,
  year,
  type,
  desc,
  stacks,
}: Portfolio) => {
  return (
    <div
      className={`row ${styles['portfolio-item-2']} align-items-center`}
      data-aos="fade-up"
    >
      <div className={`col-md-5 col-12 ${styles.image}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={480}
          height={480}
        />
      </div>
      <div className={`col-md-7 col-12 ${styles.detail}`}>
        <h3 className={`${styles.title}`}>
          <Link href={`/portfolio-2/${slug}`} prefetch={false}>
            {title}
          </Link>
        </h3>
        <div className={`${styles.metas}`}>
          <div className={`${styles.meta}`}>{year}</div>
          <div className={`${styles.meta}`}>{type.toLowerCase()}</div>
        </div>
        <div
          className={`${styles.desc}`}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
        <div className={`${styles.bottom}`}>
          <div className="button">
            {href && (
              <Link href={href} target="_blank" className="btn btn-primary">
                <span>Lihat</span>
                <i className="bi bi-box-arrow-up-right ms-2" />
              </Link>
            )}
          </div>
          <div className={`${styles.stacks}`}>
            {stacks.map(({ icon, label }, index) => (
              <OverlayTrigger
                key={index}
                overlay={<Tooltip id={`tooltip-${index}`}>{label}</Tooltip>}
                placement="bottom"
              >
                <div className={`${styles.stack}`}>
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

export default PortfolioItem2;
