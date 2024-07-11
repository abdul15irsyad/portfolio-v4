import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { programmingSkills } from '@/data/programming-skills.data';
import { Level } from '@/types/programming-skill.interface';
import { capitalizeEachWord } from '@/utils/change-case';

const Programming = () => {
  const { t } = useTranslation();
  return (
    <div className="programming section" id="programming">
      <div className="container">
        <h2 className="title text-center">
          <strong>{capitalizeEachWord(t('skills'))}</strong>
        </h2>
        <hr />
        <div className="row justify-content-start">
          {programmingSkills.map(({ title, list }, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
            >
              <div className="category">
                <div className="category-title">
                  {capitalizeEachWord(t(title))}
                </div>
                <ul className="category-items">
                  {list.map(({ name, logo, level, href }, index) =>
                    href ? (
                      <Link key={index} href={href} target="_blank">
                        <CategoryItem name={name} logo={logo} level={level} />
                      </Link>
                    ) : (
                      <CategoryItem
                        key={index}
                        name={name}
                        logo={logo}
                        level={level}
                      />
                    ),
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryItem = ({
  name,
  level,
  logo,
}: {
  name: string;
  level: Level;
  logo: string | string[];
}) => (
  <span className="category-item">
    <div>
      <div className="d-inline-block">
        {Array.isArray(logo) ? (
          logo.map((item) => (
            <Image src={item} alt={name.toLowerCase()} width={24} height={24} />
          ))
        ) : (
          <Image src={logo} alt={name.toLowerCase()} width={24} height={24} />
        )}
      </div>
      <span>{name}</span>
    </div>
    <div>
      <span className={`badge category-item-level level-${level}`}>
        {level}
      </span>
    </div>
  </span>
);

export default Programming;
