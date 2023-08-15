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
                <div className="detail">
                  <div className="award-title">1 of Top 30 Titans</div>
                  <div className="competition">
                    <p>
                      Telkomsel Tech Titans League Series 1 - Software
                      Development 2020
                    </p>
                    <Link
                      href="https://drive.google.com/file/d/17_TdqmVD-srVeqIAB433OCuvW-4dDEdq/view?usp=sharing"
                      target="_blank"
                      className="btn btn-danger"
                    >
                      <i className="bi bi-filetype-pdf me-2"></i>
                      Certificate
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
