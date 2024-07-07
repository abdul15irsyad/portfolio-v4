'use client';

import { capitalize } from '@/utils/change-case';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const BackButton = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleClick = () => {
    // if (window.history.length >= 1) {
    //   router.push(window.history[0]);
    // } else {
    router.back();
    // }
  };
  return (
    <button onClick={handleClick} className="btn btn-outline-secondary">
      <i className="bi bi-chevron-left me-2"></i>
      <span>{capitalize(t('back'))}</span>
    </button>
  );
};
