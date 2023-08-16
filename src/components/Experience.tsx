import { experiences } from '@/data/experiences.data';
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
        {experiences.map(({ position, timespan, company, desc }, index) => (
          <div key={index} className="row">
            <div className="col-md-5 col-12">
              <div className="d-flex justify-content-md-end">
                <div className="left">
                  <div className="position">{position}</div>
                  <div className="timespan-n-company">
                    <span className="timespan">{timespan}</span>{' '}
                    <span className="company">{company.name}</span>
                  </div>
                </div>
                <div className="right align-self-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="ms-md-3 me-md-0 me-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
