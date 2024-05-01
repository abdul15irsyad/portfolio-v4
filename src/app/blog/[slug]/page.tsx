'use client';

import React from 'react';
import { Placeholder } from 'react-bootstrap';

export default () => {
  return (
    <div className="blog-detail section doodle-background loading">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-8 col-lg-9">
            <Placeholder animation="glow">
              <Placeholder
                className="blog-detail-title-placeholder"
                style={{
                  height: '32px',
                  borderRadius: '.5rem',
                  marginBottom: '.5rem',
                }}
                lg={12}
                xs={12}
              />
              <Placeholder
                className="blog-detail-title-placeholder"
                style={{
                  height: '32px',
                  borderRadius: '.5rem',
                  marginBottom: '1rem',
                }}
                lg={7}
                xs={7}
              />
              <div
                className="blog-detail-meta-placeholder"
                style={{ marginBottom: '1rem' }}
              >
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight: '1.5rem',
                      display: 'inline-block',
                    }}
                  >
                    <Placeholder
                      style={{
                        height: '24px',
                        width: '24px',
                        borderRadius: '50%',
                        marginRight: '.5rem',
                      }}
                    />
                    <Placeholder
                      style={{
                        height: '24px',
                        width: '200px',
                      }}
                    />
                  </div>
                ))}
              </div>
              <Placeholder
                className="blog-detail-feature-image"
                style={{
                  height: '498px',
                  width: '100%',
                  borderRadius: '.75rem',
                  marginBottom: '2rem',
                }}
              />
              {[...Array(3)].map((_, index) => (
                <div key={index} style={{ marginBottom: '2rem' }}>
                  {[...Array(5)].map((_, index, array) => (
                    <Placeholder
                      key={index}
                      style={{
                        heigth: '18px',
                        display: 'inline-block',
                        marginRight: '5px',
                        marginBottom: '5px',
                      }}
                      lg={index === array.length - 1 ? 9 : 12}
                      xs={index === array.length - 1 ? 9 : 12}
                    />
                  ))}
                </div>
              ))}
            </Placeholder>
          </div>
          <div className="col-xl-3 offset-xl-1 col-lg-3 blog-sidebar">
            <div className="blog-detail-share box-container mb-3">
              <h5 className="box-container-title">
                <i className="bi bi-share"></i>
                <span>Share</span>
              </h5>
              <div className="blog-detail-share-items">
                <Placeholder animation="glow">
                  {[...Array(6)].map((_, index) => (
                    <Placeholder
                      key={index}
                      style={{
                        width: '32px',
                        height: '32px',
                        marginRight: '.5rem',
                        marginBottom: '.5rem',
                      }}
                    />
                  ))}
                </Placeholder>
              </div>
            </div>
            <div className="blog-detail-latest box-container mb-3">
              <h5 className="box-container-title">
                <i className="bi bi-newspaper"></i>
                <span>Latest Blog</span>
              </h5>
              <div className="blog-detail-latest-items">
                {[...Array(2)].map((_, index) => (
                  <Placeholder
                    animation="glow"
                    className="blog-detail-latest-item"
                    key={index}
                  >
                    <Placeholder className="blog-detail-latest-item-img" />
                    <div
                      className="blog-detail-latest-item-text"
                      style={{ minWidth: '160px' }}
                    >
                      <Placeholder style={{ width: '90%', height: '24px' }} />
                      <Placeholder style={{ width: '50%', height: '18px' }} />
                    </div>
                  </Placeholder>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
