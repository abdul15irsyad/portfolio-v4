import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { workExperiences } from '@/data/work-experiences.data';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

const Experience = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="experience section" id="experience">
      <div className="container">
        <h2 className="title text-center">
          <strong>{capitalizeEachWord(t('work-experience'))}</strong>
        </h2>
        <hr />
        {workExperiences.map(
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
            return (
              <div key={index} className="row" data-aos="fade-up">
                <div className="col-lg-5 col-12">
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
                            <span className="company">{company.name}</span>
                          </OverlayTrigger>
                        ) : (
                          <span className="company">{company.name}</span>
                        )}
                      </div>
                      {monthDiff > 0 && (
                        <div className="d-inline-block work-duration mt-1">
                          {workDuration}
                        </div>
                      )}
                    </div>
                    <div className="right align-self-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={48}
                        height={48}
                        className="ms-lg-3 me-lg-0 me-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <p>
                    {translates?.find(({ lang }) => lang === i18n.language)
                      ?.desc ?? desc}
                  </p>
                  {techStacks?.map((techStack, index) => (
                    <span key={index} className="blog-tag">
                      {techStack}
                    </span>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Experience;
