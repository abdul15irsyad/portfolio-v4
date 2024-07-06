import React from 'react';
import { Placeholder } from 'react-bootstrap';

export const PortfolioItem2Loading = ({ count = 6 }: { count: number }) => {
  return [...Array(count)].map((_, index) => (
    <div key={index} className={`col-xl-4 col-md-6 col-12 gx-4 gy-md-4 gy-3`}>
      <div className="align-items-center">
        <Placeholder animation="glow">
          <Placeholder
            style={{
              height: '198px',
              borderRadius: '.75rem',
              marginBottom: '.5rem',
            }}
            xs={12}
          />
          <div style={{ padding: '.4rem 0' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex gap-2">
                {[3, 5].map((width, index) => (
                  <Placeholder
                    key={index}
                    size="sm"
                    style={{
                      height: '22px',
                      width: `${width}rem`,
                      borderRadius: '.4rem',
                    }}
                  />
                ))}
              </div>
              <div className="d-flex gap-2">
                {[...Array(3)].map((_, index) => (
                  <Placeholder
                    key={index}
                    style={{
                      height: '27px',
                      width: '27px',
                      borderRadius: '.5rem',
                    }}
                    xs={12}
                  />
                ))}
              </div>
            </div>
            <Placeholder
              style={{
                height: '27px',
                width: '80%',
                borderRadius: '.5rem',
              }}
            />
          </div>
        </Placeholder>
      </div>
    </div>
  ));
};
