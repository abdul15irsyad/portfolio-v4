import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="personal-info section" id="personal-info">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-12 text-start text-lg-center">
            <Image
              src="/quote-primary.png"
              alt="quote symbol"
              width={100}
              height={100}
            />
          </div>
          <div
            className="col-lg-8 col-12 align-self-center"
            dangerouslySetInnerHTML={{
              __html: t('personal-info', {
                year: dayjs().diff('2020-08-22', 'years') ?? 4,
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
