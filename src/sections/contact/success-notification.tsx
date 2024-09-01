import Image from 'next/image';
import React from 'react';

import { capitalize } from '@/utils/change-case';

export const SuccessNotification = ({ message }: { message?: string }) => {
  return (
    <div
      className="success-notifcation d-flex justify-content-center align-items-center gap-4 p-4"
      style={{ backgroundColor: '#fafafa', borderRadius: '1rem' }}
    >
      <Image
        src="/images/mail-success.png"
        alt="success message icon"
        width={600}
        height={100}
        style={{ width: '100px' }}
      />
      <h6 className="mb-0 text-muted">{capitalize(message ?? '')}</h6>
    </div>
  );
};
