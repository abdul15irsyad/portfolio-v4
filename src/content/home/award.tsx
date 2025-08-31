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
              <strong>
                {capitalizeEachWord(t('award'))} &{' '}
                {capitalizeEachWord(t('certificate'))}
              </strong>
            </h2>
            <hr />
          </div>
          <div className="col-md-8">
            <ul className="award-items">
              {awards.map((award, index) => (
                <li key={index} className="award-item" data-aos="fade-up">
                  <>
                    <div className="icon">
                      <i
                        className={`bi bi-${award.type === 'award' ? 'award' : 'file-medical'}`}
                      ></i>
                    </div>
                    <div className="detail">
                      <div className="award-title">{award.title}</div>
                      <div className="description">
                        {[
                          award.type === 'award'
                            ? award.competition
                            : award.publisher,
                          award.year,
                        ].join(' | ')}
                      </div>
                      {award.href && (
                        <Link
                          href={award.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-danger"
                        >
                          <i className="bi bi-filetype-pdf me-2"></i>
                          {capitalizeEachWord(
                            t('see-item', { item: t(award.type) }),
                          )}
                        </Link>
                      )}
                    </div>
                  </>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
