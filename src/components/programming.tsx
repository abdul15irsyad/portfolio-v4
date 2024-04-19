import { programmingSkills } from '@/data/programming-skills.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Programming = () => {
  return (
    <div className="programming section" id="programming">
      <div className="container">
        <h2 className="title text-center">
          <strong>Tech Stack</strong>
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
                <div className="category-title">{title}</div>
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

const CategoryItem = ({ name, level, logo }) => (
  <span className="category-item">
    <div>
      <Image src={logo} alt={name.toLowerCase()} width={24} height={24} />
      <span>{name.toLowerCase()}</span>
    </div>
    <div>
      <span className={`badge category-item-level level-${level}`}>
        {level}
      </span>
    </div>
  </span>
);

export default Programming;
