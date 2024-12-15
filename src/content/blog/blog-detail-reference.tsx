'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { BlogReferenceInterface } from '@/types/blog.type';
import { capitalizeEachWord } from '@/utils/change-case';

import styles from './blog-detail-reference.module.css';

export const BlogDetailReferences = ({
  references,
}: {
  references?: BlogReferenceInterface[];
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles['blog-detail-references']}>
      <h5 className={styles.title}>{capitalizeEachWord(t('references'))}</h5>
      {references?.map((reference, index) => (
        <Link
          key={index}
          href={reference!.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['blog-detail-reference']}
          style={{
            height: !reference?.image ? 'fit-content' : undefined,
          }}
        >
          {reference?.image && (
            <img className={styles.image} src={reference?.image} />
          )}
          <div className={styles.text}>
            <h6>{reference?.title}</h6>
            <p className={`${styles.url} mb-1 text-muted`}>{reference?.url}</p>
            <p className={`${styles.desc} mb-0 text-muted`}>
              {reference?.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
