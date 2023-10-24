'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    if (window.history.length === 1) {
      router.push('/blog');
    } else {
      router.back();
    }
  };
  return (
    <button onClick={handleClick} className="btn btn-outline-secondary">
      <i className="bi bi-chevron-left me-2"></i>
      <span>Kembali</span>
    </button>
  );
};
