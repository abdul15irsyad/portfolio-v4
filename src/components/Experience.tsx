import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: 'Internship',
      timespan: 'Februari 2020 - Maret 2020',
      company: 'Lingkar 9',
      desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
    },
    {
      position: 'IT Staff',
      timespan: 'Agustus 2020 - Agustus 2022',
      company: 'Andaf Corp',
      desc: 'Berposisi sebagai IT Staff, saya mengerjakan website untuk klien baik menggunakan Wordpress (CMS) maupun menggunakan framework seperti Laravel, CodeIgniter, dll.',
    },
    {
      position: 'Back End Developer',
      timespan: 'Agustus 2022 - Sekarang',
      company: 'Optimap',
      desc: 'Berposisi sebagai Back End Developer, menggunakan Bahasa pemrograman TypeScript dengan Framework NestJS, dan database yang digunakan adalah PostgreSQL.',
    },
  ];
  return (
    <div className="experience section">
      <div className="container">
        <h2 className="title text-center">
          <strong>Work Experience</strong>
        </h2>
        <hr />
        {experiences.map(({ position, timespan, company, desc }, index) => (
          <div key={index} className="row">
            <div className="col-md-5 col-12">
              <div className="position">{position}</div>
              <div className="timespan-n-company">
                <span className="timespan">{timespan}</span>{' '}
                <span className="company">{company}</span>
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
