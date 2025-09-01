import './success-notification.css';

import Image from 'next/image';
import React from 'react';

import { capitalize } from '@/utils/change-case';

export const SuccessNotification = ({
  message,
  onClose,
}: {
  message?: string;
  onClose?: () => void;
}) => {
  return (
    <div className='success-notification d-flex justify-content-center align-items-center gap-md-4 gap-3 p-4'>
      <Image
        src='/images/mail-success.png'
        alt='success message icon'
        width={600}
        height={100}
        className='success-notification-img'
      />
      <h6 className='mb-0 text-muted'>{capitalize(message ?? '')}</h6>
      {onClose && (
        <div className='btn-close-wrapper'>
          <button
            type='button'
            className='btn-close'
            aria-label='Close alert'
            onClick={onClose}
          ></button>
        </div>
      )}
    </div>
  );
};
