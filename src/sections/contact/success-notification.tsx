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
    <div
      className="success-notifcation d-flex justify-content-center align-items-center gap-4 p-4"
      style={{
        backgroundColor: '#fafafa',
        borderRadius: '1rem',
        position: 'relative',
      }}
    >
      <Image
        src="/images/mail-success.png"
        alt="success message icon"
        width={600}
        height={100}
        style={{ width: '100px' }}
      />
      <h6 className="mb-0 text-muted">{capitalize(message ?? '')}</h6>
      {onClose && (
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >
          <button
            type="button"
            className="btn-close"
            aria-label="Close alert"
            onClick={onClose}
            style={{
              background:
                '#f4f4f4 var(--bs-btn-close-bg) center/.75rem auto no-repeat',
              padding: '.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></button>
        </div>
      )}
    </div>
  );
};
