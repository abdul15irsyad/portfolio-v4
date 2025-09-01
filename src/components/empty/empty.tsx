import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { capitalizeEachWord } from '@/utils/change-case';

interface Props {
  message?: string;
}

export const Empty = ({ message }: Props) => {
  const { t } = useTranslation();
  message = message ?? t('empty-data-message');
  return (
    <div className='empty'>
      <div className='empty-img'>
        <Image src='/empty.png' alt='No Data' width={200} height={200} />
      </div>
      <div className='empty-text'>
        <h2>{capitalizeEachWord(t('empty-data'))}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
