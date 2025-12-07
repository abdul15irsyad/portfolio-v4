'use client';

import './custom-carousel.css';

import Image from 'next/image';
import { ReactNode } from 'react';
import { Carousel } from 'react-bootstrap';

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
  loading?: 'lazy' | 'eager';
  action?: ReactNode;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const CustomCarousel = ({
  images,
  loading,
  action,
  activeIndex,
  setActiveIndex,
}: Props) => {
  return (
    <div className='custom-carousel'>
      <Carousel
        prevIcon={<i className='bi bi-chevron-left'></i>}
        nextIcon={<i className='bi bi-chevron-right'></i>}
        interval={null}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e)}
      >
        {images.map(({ src, alt }, index) => (
          <Carousel.Item key={index}>
            <div className='img-wrapper'>
              {/* <div className="overlay"></div> */}
              <Image
                src={src}
                alt={alt}
                width={1080}
                height={1080}
                loading={loading ?? 'eager'}
              />
              {action && <div className='custom-carousel-action'>{action}</div>}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
