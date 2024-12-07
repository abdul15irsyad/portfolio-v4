import React from 'react';

import styles from './section-title.module.css';

export const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  return (
    <>
      <h1 className={`${styles.title} text-center`}>{title}</h1>
      {subTitle && <p className={styles['sub-title']}>{subTitle}</p>}
      <hr />
    </>
  );
};
