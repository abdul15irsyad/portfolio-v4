'use client';

import React from 'react';
import styles from './pagination.module.css';
import { useRouter } from 'next/navigation';

type Prop = {
  activePage?: number;
  totalPage?: number;
  sibling?: number;
  boundaries?: number;
  position?: 'center' | 'start' | 'end';
  // setPage: Dispatch<SetStateAction<number>>;
  queryString: (name: string, value: string) => string;
};

export default ({
  activePage = 1,
  sibling = 2,
  boundaries = 1,
  totalPage = 10, // setPage,
  queryString,
}: Prop) => {
  const router = useRouter();
  const setPage = (page: number) => {
    if (page !== activePage)
      router.push(`/blog?${queryString('page', page.toString())}`);
  };
  const handlePrev = () => {
    // if (activePage > 1) setPage(activePage - 1);
    if (activePage > 1) setPage(activePage - 1);
  };
  const handleNext = () => {
    // if (activePage < totalPage) setPage(activePage + 1);
    if (activePage < totalPage) setPage(activePage + 1);
  };
  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.item} ${activePage === 1 ? styles.disable : ''}`}
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
                activePage === page ? styles.active : ''
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
          activePage === totalPage ? styles.disable : ''
        }`}
        onClick={handleNext}
      >
        <i className="bi bi-chevron-right"></i>
      </div>
    </div>
  );
};
