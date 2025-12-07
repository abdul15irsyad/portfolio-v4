'use client';

import { Quicksand } from 'next/font/google';
import { Bree_Serif } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { capitalize } from '@/utils/change-case';

import styles from './donate.module.css';

const quicksand = Quicksand({
  style: 'normal',
  subsets: ['latin-ext'],
  fallback: ['sans-serif'],
});

const breeSarif = Bree_Serif({
  style: 'normal',
  subsets: ['latin-ext'],
  fallback: ['sans-serif'],
  weight: ['400'],
});

export default () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.donate} box-container`}>
      <h5 className='box-container-title'>
        <i className='bi bi-gift'></i>
        <span>{capitalize(t('support'))}</span>
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement='top'
          overlay={
            <Popover className={styles['disclaimer-popover']}>
              <Popover.Body>
                <p className='mb-0'>{t('donate-msg')}😇</p>
              </Popover.Body>
            </Popover>
          }
        >
          <span className={styles.disclaimer}>
            <i className='bi bi-info-circle m-0'></i>
          </span>
        </OverlayTrigger>
      </h5>
      <div className='d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center'>
        <Trakteer />
        {/* <NihBuatJajan /> */}
        <BuyMeACoffe />
      </div>
    </div>
  );
};

const BuyMeACoffe = () => (
  <Link
    href='https://buymeacoffee.com/abdul15irsyad'
    target='_blank'
    className={`${styles['buy-me-a-coffe']}`}
  >
    <span className='btn-icon'>
      <Image
        src={'/icons/buy-me-a-coffee.svg'}
        alt='buy-me-a-coffe'
        width={20}
        height={20}
      />
    </span>
    <span className={breeSarif.className}>Buy me a coffee</span>
  </Link>
);

const Trakteer = () => (
  <Link
    href='https://trakteer.id/abdul15irsyad/tip'
    target='_blank'
    rel='noopener noreferrer'
    className={`${styles.trakteer} ${quicksand.className}`}
  >
    <Image
      // src="https://trakteer.id/images/mix/coffee.png"
      src='/coffee.png'
      alt='Traktiran'
      className={`${styles.icon} wiggle`}
      width={20}
      height={20}
    />
    <span>Trakteer</span>
  </Link>
);

// const NihBuatJajan = () => (
//   <Link
//     href="https://www.nihbuatjajan.com/abdul15irsyad"
//     target="_blank"
//     rel="noopener noreferrer"
//     className={styles['nih-buat-jajan']}
//   >
//     <img
//       src="https://d4xyvrfd64gfm.cloudfront.net/buttons/default-cta.png"
//       alt="Nih buat jajan"
//     />
//   </Link>
// );
