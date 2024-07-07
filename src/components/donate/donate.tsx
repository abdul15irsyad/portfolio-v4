'use client';

import React from 'react';
import styles from './donate.module.css';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { capitalize } from '@/utils/change-case';
import { Quicksand } from 'next/font/google';

import Link from 'next/link';

const quicksand = Quicksand({
  style: 'normal',
  subsets: ['latin-ext'],
  fallback: ['sans-serif'],
});

export default () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.donate} box-container`}>
      <h5 className="box-container-title">
        <i className="bi bi-gift"></i>
        <span>{capitalize(t('support'))}</span>
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="top"
          overlay={
            <Popover className={styles['disclaimer-popover']}>
              <Popover.Body>
                <p className="mb-0">{t('donate-msg')}😇</p>
              </Popover.Body>
            </Popover>
          }
        >
          <span className={styles.disclaimer}>
            <i className="bi bi-info-circle m-0"></i>
          </span>
        </OverlayTrigger>
      </h5>
      <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
        <Trakteer />
        <NihBuatJajan />
      </div>
    </div>
  );
};

const Trakteer = () => (
  <div>
    <Link
      href="https://trakteer.id/abdul15irsyad/tip"
      target="_blank"
      className={`${styles.trakteer} ${quicksand.className}`}
    >
      <img
        src="https://trakteer.id/images/mix/coffee.png"
        alt="Traktiran"
        className={`${styles.icon} wiggle`}
      />
      <span>Trakteer Saya Kopi</span>
    </Link>
  </div>
);

const NihBuatJajan = () => (
  <div>
    <Link
      href="https://www.nihbuatjajan.com/abdul15irsyad"
      target="_blank"
      style={{ width: '80%', maxWidth: '200px' }}
    >
      <img
        src="https://d4xyvrfd64gfm.cloudfront.net/buttons/default-cta.png"
        alt="Nih buat jajan"
      />
    </Link>
  </div>
);
