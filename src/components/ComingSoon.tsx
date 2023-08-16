import Image from 'next/image';
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="coming-soon section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coming-soon-image">
              <Image
                src="/coming-soon.png"
                alt="coming soon"
                layout="responsive"
                objectFit="cover"
                width={655}
                height={414}
              />
            </div>
          </div>
          <div className="coming-soon-text col-md-6">
            <h2 className="coming-soon-title">Coming Soon</h2>
            <p>im still build this page, please wait :-)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;