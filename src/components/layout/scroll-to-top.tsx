'use client';

import React, { useEffect, useState } from 'react';

import styles from './scroll-to-top.module.css';

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 600) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    <div
      className={styles['scroll-to-top']}
      style={{
        display: show ? 'block' : 'none',
      }}
      onClick={handleScrollTop}
    >
      <div className={styles['button-scroll-to-top']}>
        <i className='bi bi-chevron-up'></i>
      </div>
    </div>
  );
};
