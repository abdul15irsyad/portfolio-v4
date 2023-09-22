'use client';

import SearchBar from '@/components/SearchBar';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

const loading = () => {
  return (
    <div className="blog section doodle-background">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">Blog</h1>
            <hr />
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-12">
            {[...Array(3)].map(() => (
              <div className="blog-item">
                <div className="blog-feature-image" style={{ width: '300px' }}>
                  <Placeholder animation="glow">
                    <Placeholder
                      style={{
                        height: '180px',
                        width: '100%',
                        borderRadius: '.5rem',
                      }}
                      xs={12}
                    />
                  </Placeholder>
                </div>
                <div className="blog-text" style={{ width: '70%' }}>
                  <Placeholder animation="glow">
                    <div className="blog-title-placeholder mb-3">
                      <Placeholder style={{ height: '1.5rem' }} xs={8} />
                    </div>
                    <div className="blog-meta-placeholder mb-2">
                      {[...Array(2)].map(() => (
                        <>
                          <Placeholder
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              marginRight: '.5rem',
                            }}
                          />{' '}
                          <Placeholder
                            style={{ width: '100px', marginRight: '1rem' }}
                          />{' '}
                        </>
                      ))}
                    </div>
                    <Placeholder xs={8} />
                    <Placeholder xs={11} />
                    <Placeholder xs={10} />
                    <Placeholder xs={3} />
                  </Placeholder>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
