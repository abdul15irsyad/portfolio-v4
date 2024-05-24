import { workExperiences } from '@/data/work-experiences.data';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <div className="container">
        <h2 className="title text-center">
          <strong>Work Experience</strong>
        </h2>
        <hr />
        {workExperiences.map(
          ({ position, startDate, endDate, company, desc }, index) => {
            const start = {
              short: dayjs(startDate).format('MMM YYYY'),
              long: dayjs(startDate).format('MMMM YYYY'),
            };
            const end = endDate
              ? {
                  short: dayjs(endDate).format('MMM YYYY'),
                  long: dayjs(endDate).format('MMMM YYYY'),
                }
              : { short: 'Skrg', long: 'Sekarang' };

            endDate = endDate ?? new Date();
            const monthDiff = dayjs(endDate).diff(startDate, 'months');
            const workDuration =
              monthDiff / 12 > 1
                ? `${Math.floor(monthDiff / 12)} tahun${
                    Math.floor(monthDiff % 12) > 0
                      ? ` ${Math.floor(monthDiff % 12)} bulan`
                      : ''
                  }`
                : `${monthDiff} bulan`;
            return (
              <div key={index} className="row" data-aos="fade-up">
                <div className="col-lg-5 col-12">
                  <div className="d-flex justify-content-lg-end">
                    <div className="left">
                      <div className="position">{position}</div>
                      <div className="timespan-n-company">
                        <span className="timespan d-none d-md-block">{`${start.long} - ${end.long}`}</span>
                        <span className="timespan d-block d-md-none">{`${start.short} - ${end.short}`}</span>
                        <span className="company">{company.name}</span>
                      </div>
                      <span className="work-duration">{workDuration}</span>
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
                  <p>{desc}</p>
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
