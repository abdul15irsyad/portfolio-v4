'use client';

import React from 'react';
import styles from './donate.module.css';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default () => {
  return (
    <div className={`${styles.donate} box-container`}>
      <h5 className="box-container-title">
        <i className="bi bi-gift"></i>
        <span>Support</span>
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="top"
          overlay={
            <Popover className={styles['disclaimer-popover']}>
              <Popover.Body>
                <h6>Disclaimer</h6>
                <p className="mb-0">
                  blog yang dibuat banyak terinspirasi dari blog-blog lain yang
                  ada di internet, terima kasih banyak jika mau men-support blog
                  ini 🙏🏽
                </p>
              </Popover.Body>
            </Popover>
          }
        >
          <span className={styles.disclaimer}>
            <i className="bi bi-info-circle m-0"></i>
          </span>
        </OverlayTrigger>
      </h5>
      <a href="https://www.nihbuatjajan.com/abdul15irsyad" target="_blank">
        <img
          src="https://d4xyvrfd64gfm.cloudfront.net/buttons/default-cta.png"
          alt="Nih buat jajan"
          style={{ width: '70%' }}
        />
      </a>
    </div>
  );
};
