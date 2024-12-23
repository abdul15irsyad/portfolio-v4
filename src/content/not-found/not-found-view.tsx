import Image from 'next/image';
import React from 'react';

export const NotFoundView = () => {
  return (
    <div className="not-found section doodle-background">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="not-found-image">
              <Image
                src="/empty.png"
                alt="not found"
                width={655}
                height={414}
              />
            </div>
          </div>
          <div className="not-found-text col-md-6">
            <h2 className="not-found-title">Page Not Found</h2>
            <p>the page that you are looking for is not found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
