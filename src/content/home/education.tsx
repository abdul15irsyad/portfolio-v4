'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { educations } from '@/data/educations.data';
import { capitalizeEachWord } from '@/utils/change-case';

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className='education section'>
      <div className='container'>
        <h3 className='title text-center'>
          <strong>{capitalizeEachWord(t('education'))}</strong>
        </h3>
        <hr />
        <div className='education-items'>
          {educations.map(
            (
              { icon, institution, level, major, startYear, endYear, gpa },
              index,
            ) => {
              const meta: string[] = [capitalizeEachWord(t(level))];
              if (major) meta.push(capitalizeEachWord(t(major)));
              return (
                <div key={index} className='education-item' data-aos='fade-up'>
                  <div className='education-item-icon'>
                    <Image src={icon} alt={icon} width={60} height={60} />
                  </div>
                  <div className='education-item-text'>
                    <h5 className='fw-bold'>{meta.join(' - ')}</h5>
                    <div className='text-secondary'>
                      <p className='mb-0'>{institution}</p>
                      <span>
                        {startYear} - {endYear}
                      </span>
                    </div>
                  </div>
                  {gpa && <div className='gpa'>GPA {gpa}</div>}
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
