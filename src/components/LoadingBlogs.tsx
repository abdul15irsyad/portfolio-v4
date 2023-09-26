import React from 'react';
import { Placeholder } from 'react-bootstrap';
import LoadingTags from './LoadingTags';

const LoadingBlogs = () => {
  return (
    <div className="loading-blogs">
      {[...Array(2)].map((_, index) => (
        <div className="blog-item" key={index}>
          <div className="blog-feature-image" style={{ marginBottom: '.5rem' }}>
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
              <div
                className="blog-title-placeholder"
                style={{ marginBottom: '.75rem' }}
              >
                {[100, 80].map((item, index) => (
                  <Placeholder
                    key={index}
                    style={{
                      height: '24px',
                      width: `${item}%`,
                      display: 'block',
                      marginBottom: '.5rem',
                    }}
                  />
                ))}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
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
              {[...Array(3)].map((_, index) => (
                <Placeholder
                  key={index}
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
