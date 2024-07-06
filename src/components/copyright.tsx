'use client';

import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      <div className="container"></div>
      <div className="row">
        <span>
          &copy; Copyright abdul15irsyad {year}. <br />
          Made with 💀. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Copyright;
