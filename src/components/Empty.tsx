import Image from 'next/image';
import React from 'react';

interface Props {
  message?: string;
}

const Empty = ({ message }: Props) => {
  message = message ?? 'sorry, there is no data found';
  return (
    <div className="empty">
      <div className="empty-img">
        <Image src="/empty.png" alt="No Data" width={200} height={200} />
      </div>
      <div className="empty-text">
        <h2>Empty Data</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Empty;
