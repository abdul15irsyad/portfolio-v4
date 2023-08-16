import { awards } from '@/data/awards.data';
import Link from 'next/link';
import React from 'react';

const Award = () => {
  return (
    <div className="award section" id="award">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="title">
              <strong>Personal Award</strong>
            </h2>
            <hr />
          </div>
          <div className="col-md-8">
            <ul className="award-items">
              <li className="award-item">
                <div className="icon">
                  <i className="bi bi-award"></i>
                </div>
                {awards.map(({ title, competition, certificate }) => (
                  <div className="detail">
                    <div className="award-title">{title}</div>
                    <div className="competition">
                      <p>{competition}</p>
                      {certificate?.href && (
                        <Link
                          href={certificate.href}
                          target="_blank"
                          className="btn btn-danger"
                        >
                          <i className="bi bi-filetype-pdf me-2"></i>
                          Certificate
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
