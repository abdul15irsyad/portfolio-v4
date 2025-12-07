'use client';

import { Placeholder } from 'react-bootstrap';

const LoadingTags = ({ sizes }: { sizes: number[] }) => {
  return (
    <Placeholder
      as='div'
      className='blog-tags'
      animation='glow'
      style={{ display: 'flex', gap: '.5rem' }}
    >
      {sizes.map((size, index) => (
        <Placeholder
          key={index}
          style={{
            width: `${size}0px`,
            height: '22px',
            borderRadius: '1rem',
          }}
        />
      ))}
    </Placeholder>
  );
};

export default LoadingTags;
