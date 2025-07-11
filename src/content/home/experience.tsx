import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { workExperiences } from '@/data/work-experiences.data';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

export const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div className="experience section" id="experience">
      <div className="container">
        <h2 className="title text-center">
          <strong>{capitalizeEachWord(t('work-experience'))}</strong>
        </h2>
        <hr />
        <AnimatePresence>
          {workExperiences
            .slice(0, isShowMore ? undefined : 3)
            .map(
              (
                {
                  position,
                  startDate,
                  endDate,
                  company,
                  desc,
                  translates,
                  techStacks,
                },
                index,
              ) => {
                const start = {
                  short: dayjs(startDate).format('MMM YYYY'),
                  long: dayjs(startDate).format('MMMM YYYY'),
                };
                const end = endDate
                  ? {
                      short: dayjs(endDate).format('MMM YYYY'),
                      long: dayjs(endDate).format('MMMM YYYY'),
                    }
                  : {
                      short: capitalize(t('present-short')),
                      long: capitalize(t('present')),
                    };

                endDate = endDate ?? new Date();
                const monthDiff = dayjs(endDate).diff(startDate, 'months');
                const workDuration =
                  monthDiff / 12 >= 1
                    ? `${Math.floor(monthDiff / 12)} ${t('year')}${
                        Math.floor(monthDiff % 12) > 0
                          ? ` ${Math.floor(monthDiff % 12)} ${t('month')}`
                          : ''
                      }`
                    : `${monthDiff} ${t('month')}`;
                const weekDiff = dayjs(endDate).diff(startDate, 'weeks');

                const companyName = company.url ? (
                  <Link href={company.url} className="company" target="_blank">
                    {company.name}
                  </Link>
                ) : (
                  <span className="company">{company.name}</span>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="row"
                  >
                    <div className="col-lg-4 col-12">
                      <div className="d-flex justify-content-lg-end">
                        <div className="left">
                          <div className="position">{position}</div>
                          <div className="timespan-n-company justify-content-lg-end">
                            {/* <span className="timespan d-none d-md-block">{`${start.long} - ${end.long}`}</span> */}
                            <span className="timespan">{`${start.short} - ${end.short}`}</span>
                            {company.fullname ? (
                              <OverlayTrigger
                                overlay={<Tooltip>{company.fullname}</Tooltip>}
                                placement="top"
                              >
                                {companyName}
                              </OverlayTrigger>
                            ) : (
                              companyName
                            )}
                          </div>
                          <div className="d-inline-block work-duration mt-1">
                            {monthDiff > 0 ? workDuration : `${weekDiff} week`}
                          </div>
                        </div>
                        <div className="right align-self-center">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={48}
                            height={48}
                            className="ms-lg-3 me-lg-0 me-3"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12">
                      <div className="mb-3">
                        <div
                          className="default-text"
                          dangerouslySetInnerHTML={{
                            __html:
                              translates?.find(
                                ({ lang }) => lang === i18n.language,
                              )?.desc ??
                              desc ??
                              '',
                          }}
                        />
                        {/* <ReadMoreHtmlContent
                          fullHtml={
                            translates?.find(
                              ({ lang }) => lang === i18n.language,
                            )?.desc ??
                            desc ??
                            ''
                          }
                        /> */}
                      </div>
                      {techStacks?.map((techStack, index) => (
                        <span key={index} className="blog-tag">
                          {techStack}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              },
            )}
        </AnimatePresence>
        <div className="d-flex justify-content-center pt-3">
          <Button
            variant="light"
            size="sm"
            style={{
              borderRadius: 8,
              padding: '.25rem .75rem',
            }}
            onClick={() => setIsShowMore((value) => !value)}
          >
            show {isShowMore ? 'less' : 'more'}
          </Button>
        </div>
      </div>
    </div>
  );
};
