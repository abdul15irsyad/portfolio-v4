'use client';

import React from 'react';

export const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className='copyright'>
      <div className='container'></div>
      <div className='row'>
        <span>
          Copyright &copy; abdul15irsyad {year}. <br />
          Made with 💀. All Rights Reserved
        </span>
      </div>
    </div>
  );
};
