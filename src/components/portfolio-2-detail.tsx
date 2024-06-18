'use client';

import { Portfolio } from '@/types/portfolio.type';
import Link from 'next/link';
import React from 'react';
import CustomCarousel from './custom-carousel';
import Image from 'next/image';
import styles from './portfolio-2-detail.module.css';
import PortfolioTeam from './portfolio-team';
import { useTranslation } from 'react-i18next';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

const Portfolio2Detail = ({ portfolio }: { portfolio: Portfolio }) => {
  const { t, i18n } = useTranslation();
  const {
    title,
    images,
    year,
    type,
    href,
    stacks,
    challenges,
    teams,
    translates,
  } = portfolio;
  const desc =
    translates?.find(({ lang }) => lang === i18n.language)?.desc ??
    portfolio.desc!;
  return (
    <div className={`${styles.portfolio} row`}>
      <div className={`${styles.images} col-md-5 col-12`}>
        <CustomCarousel images={images} />
      </div>
      <div className={`${styles.detail} col-md-7 col-12`}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metas}>
          {[year, type.toLowerCase()].map((item, index) => (
            <div key={index} className={styles.meta}>
              {item}
            </div>
          ))}
        </div>
        <div className={`${styles.section} ${styles['desc-section']}`}>
          <h5 className={styles['section-title']}>
            {capitalize(t('description'))}
          </h5>
          <div dangerouslySetInnerHTML={{ __html: desc }}></div>
        </div>
        {challenges && challenges?.length > 0 && (
          <div className={`${styles.section} ${styles['challenges-section']}`}>
            <h5 className={styles['section-title']}>
              {capitalize(t('challenge'))}
            </h5>
            <div className={styles.challenges}>
              {challenges.map((challenge, index) => {
                return (
                  <div key={index} className={styles.challenge}>
                    <i className="bi bi-check-square-fill"></i>
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          challenge.translates?.find(
                            ({ lang }) => lang === i18n.language,
                          )?.desc ?? challenge.desc!,
                      }}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className={`${styles.section} ${styles['stacks-section']}`}>
          <h5 className={styles['section-title']}>
            {capitalizeEachWord(t('tech-stacks'))}
          </h5>
          <div className={styles.stacks}>
            {stacks.map(({ icon, label }, index) => (
              <div key={index} className={styles.stack}>
                <Image src={icon} alt={label} width={28} height={28} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        {teams && teams.length > 0 && (
          <div className={`${styles.section} ${styles['teams-section']}`}>
            <h5 className={styles['section-title']}>
              {capitalize(t('teams'))}
            </h5>
            <div className={styles.teams}>
              {teams.map((team, index) => (
                <PortfolioTeam key={index} team={team} />
              ))}
            </div>
          </div>
        )}
        <div className={styles.button}>
          {href && (
            <Link
              href={href}
              target="_blank"
              className="btn btn-md btn-primary"
            >
              <i className="bi bi-box-arrow-up-right me-2" />
              <span>
                {capitalizeEachWord(t('see-item', { item: 'Website' }))}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio2Detail;
