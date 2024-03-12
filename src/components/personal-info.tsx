import Image from 'next/image';
import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="personal-info section" id="personal-info">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-4 col-12 text-center">
            <Image
              src="/quote-primary.png"
              alt="quote symbol"
              width={100}
              height={100}
            />
          </div>
          <div className="col-md-8 col-12 align-self-center">
            <p>
              Saya seorang <strong>Web Developer</strong> dengan pengalaman 3+
              tahun, dimana saya memiliki prinsip{' '}
              <strong>"keep improving"</strong> karena saya merasa dalam dunia
              pengembangan web/aplikasi kita perlu terus menerus mempelajari
              hal-hal baru yang relevan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
