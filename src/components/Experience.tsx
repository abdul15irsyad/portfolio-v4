import Image from 'next/image';
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: 'Internship',
      timespan: 'Feb 2020 - Mar 2020',
      company: {
        name: 'Lingkar 9',
        logo: '/experience/lingkar-9.png',
      },
      desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
    },
    {
      position: 'IT Staff',
      timespan: 'Agu 2020 - Agu 2022',
      company: {
        name: 'Andaf Corp',
        logo: '/experience/andaf.png',
      },
      desc: 'Berposisi sebagai IT Staff, saya mengerjakan website untuk klien baik menggunakan Wordpress (CMS) maupun menggunakan framework seperti Laravel, CodeIgniter, dll.',
    },
    {
      position: 'Back End Developer',
      timespan: 'Agu 2022 - Sekarang',
      company: {
        name: 'Optimap',
        logo: '/experience/optimap.png',
      },
      desc: 'Berposisi sebagai Back End Developer, menggunakan Bahasa pemrograman TypeScript dengan Framework NestJS, dan database yang digunakan adalah PostgreSQL.',
    },
  ];
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
