import { programmingSkills } from '@/data/programming-skills.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Programming = () => {
  return (
    <div className="programming section" id="programming">
      <div className="container">
        <h2 className="title text-center">
          <strong>Programming</strong>
        </h2>
        <hr />
        <div className="row">
          {programmingSkills.map(({ title, list }) => (
            <div className="col-md-3">
              <div className="category">
                <div className="category-title">{title}</div>
                <ul className="category-items">
                  {list?.map(({ name, logo, level, href }, index) => (
                    <li key={index} className="category-item">
                      <div>
                        <Image src={logo} alt={name} width={24} height={24} />
                        <span className="cateogory-name">{name}</span>
                        {href && (
                          <Link href={href} target="_blank">
                            <i className="bi bi-info-circle text-info"></i>
                          </Link>
                        )}
                      </div>
                      <div>
                        <span className="badge bg-primary">{level}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programming;
