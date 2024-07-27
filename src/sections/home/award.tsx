import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { awards } from '@/data/awards.data';
import { capitalizeEachWord } from '@/utils/change-case';

const Award = () => {
  const { t } = useTranslation();
  return (
    <div className="award section" id="award">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="title">
              <strong>{capitalizeEachWord(t('award'))}</strong>
            </h2>
            <hr />
          </div>
          <div className="col-md-8">
            <ul className="award-items">
              <li className="award-item" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-award"></i>
                </div>
                {awards.map(({ title, competition, certificate }, index) => (
                  <div key={index} className="detail">
                    <div className="award-title">{title}</div>
                    <div className="competition">
                      <p>{competition}</p>
                      {certificate?.href && (
                        <Link
                          href={certificate.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-danger"
                        >
                          <i className="bi bi-filetype-pdf me-2"></i>
                          {capitalizeEachWord(
                            t('see-item', { item: t('certificate') }),
                          )}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
