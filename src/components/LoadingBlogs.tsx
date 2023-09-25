import React from 'react';
import { Placeholder } from 'react-bootstrap';
import LoadingTags from './LoadingTags';

const LoadingBlogs = () => {
  return (
    <div className="loading-blogs">
      {[...Array(2)].map(() => (
        <div className="blog-item">
          <div className="blog-feature-image">
            <Placeholder animation="glow">
              <Placeholder
                style={{
                  height: '180px',
                  width: '300px',
                  borderRadius: '.5rem',
                }}
              />
            </Placeholder>
          </div>
          <div className="blog-text" style={{ width: '100%' }}>
            <Placeholder animation="glow">
              <Placeholder
                style={{
                  height: '24px',
                  width: '100%',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              />
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(2)].map(() => (
                  <div
                    style={{
                      marginRight: '1rem',
                      display: 'inline-block',
                    }}
                  >
                    <Placeholder
                      style={{
                        height: '18px',
                        width: '18px',
                        borderRadius: '50%',
                        marginRight: '.3rem',
                      }}
                    />
                    <Placeholder
                      style={{
                        height: '18px',
                        width: '100px',
                      }}
                    />
                  </div>
                ))}
              </div>
              {[...Array(3)].map(() => (
                <Placeholder
                  style={{
                    width: '100%',
                    height: '16px',
                    marginRight: '.5rem',
                  }}
                />
              ))}
              <div className="mt-3">
                <LoadingTags sizes={[6, 6, 6]} />
              </div>
            </Placeholder>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingBlogs;
