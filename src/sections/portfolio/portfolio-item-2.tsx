'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import sanitize from 'sanitize-html';

import { Portfolio } from '@/types/portfolio.type';
import { defaultSanitizeOptions } from '@/utils/html.util';

import styles from './portfolio-item-2.module.css';

const PortfolioItem2 = ({
  images,
  title,
  slug,
  year,
  type,
  stacks,
  translates,
  desc,
}: Portfolio) => {
  const { i18n } = useTranslation();
  const translatedDesc = translates?.find(
    ({ lang }) => lang === i18n.language,
  )?.desc;
  return (
    <div className={`${styles['portfolio-item-2']} align-items-center`}>
      <Link href={`/portfolio/${slug}`} prefetch={false}>
        <div className={`${styles.image}`}>
          {/* <div className={`${styles.overlay}`}></div> */}
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={1080}
            height={1080}
          />
        </div>
      </Link>
      <div className={`${styles.detail}`}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className={`${styles.metas}`}>
            <div className={`${styles.meta}`}>{year}</div>
            <div className={`${styles.meta}`}>{type.toLowerCase()}</div>
          </div>
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
        <h3 className={`${styles.title}`}>
          <Link href={`/portfolio/${slug}`} prefetch={false}>
            {title}
          </Link>
        </h3>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: sanitize(translatedDesc ?? desc!, defaultSanitizeOptions),
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioItem2;
