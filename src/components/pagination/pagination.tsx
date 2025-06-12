'use client';

import { Options } from 'nuqs';
import React from 'react';

import styles from './pagination.module.css';

type Prop = {
  currentPage?: number;
  totalPage?: number;
  sibling?: number;
  boundaries?: number;
  position?: 'center' | 'start' | 'end';
  setCurrentPage:
    | ((
        value: number | ((old: number) => number | null) | null,
        options?: Options | undefined,
      ) => Promise<URLSearchParams>)
    | React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({
  currentPage = 1,
  sibling = 2,
  boundaries = 1,
  totalPage = 10,
  position,
  setCurrentPage,
}: Prop) => {
  return (
    <div className={styles.pagination} style={{ justifyContent: position }}>
      <div
        className={`${styles.item} ${currentPage === 1 ? styles.disable : ''}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <i className="bi bi-chevron-left"></i>
      </div>
      <div className={styles.items}>
        {[...Array(totalPage)].map((_, index) => {
          const page = index + 1;
          const isHide = (page: number) =>
            Math.abs(currentPage - page) > sibling &&
            page > 0 + boundaries &&
            page < totalPage - boundaries + 1;
          if (isHide(page)) {
            if (isHide(page - 1)) return null;
            else if (isHide(page + 1))
              return (
                <div key={index} className={`${styles.item} ${styles.dot}`}>
                  ...
                </div>
              );
          }
          return (
            <span
              key={index}
              className={`${styles.item} ${
                currentPage === page ? styles.active : ''
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      <div
        className={`${styles.item} ${currentPage === totalPage ? styles.disable : ''}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
};
