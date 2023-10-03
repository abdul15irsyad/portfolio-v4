'use client';

import React, { Dispatch, SetStateAction } from 'react';
import styles from './pagination.module.css';

type Prop = {
  activePage?: number;
  totalPage?: number;
  sibling?: number;
  boundaries?: number;
  position?: 'center' | 'start' | 'end';
  setPage: Dispatch<SetStateAction<number>>;
};

export default ({
  activePage = 1,
  sibling = 2,
  boundaries = 1,
  totalPage = 10,
  setPage,
}: Prop) => {
  const handlePrev = () => {
    if (activePage > 1) setPage(activePage - 1);
  };
  const handleNext = () => {
    if (activePage < totalPage) setPage(activePage + 1);
  };
  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.item} ${
          activePage === 1 ? styles['item-disable'] : ''
        }`}
        onClick={handlePrev}
      >
        <i className="bi bi-chevron-left"></i>
      </div>
      <div className={styles.items}>
        {[...Array(totalPage)].map((_, index) => {
          const page = index + 1;
          const isHide = (page: number) =>
            Math.abs(activePage - page) > sibling &&
            page > 0 + boundaries &&
            page < totalPage - boundaries + 1;
          if (isHide(page)) {
            if (isHide(page - 1)) return null;
            else if (isHide(page + 1)) return <div key={index}>...</div>;
          }
          return (
            <span
              key={index}
              className={`${styles.item} ${
                activePage === page ? styles['item-active'] : ''
              }`}
              onClick={() => setPage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      <div
        className={`${styles.item} ${
          activePage === totalPage ? styles['item-disable'] : ''
        }`}
        onClick={handleNext}
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
};
