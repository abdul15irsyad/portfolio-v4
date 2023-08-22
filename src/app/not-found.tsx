import Image from 'next/image';
import React from 'react';
import './not-found.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found - Irsyad Abdul',
  };

const NotFound = () => {
  return (
    <div className="not-found section">
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
  )
}

export default NotFound;