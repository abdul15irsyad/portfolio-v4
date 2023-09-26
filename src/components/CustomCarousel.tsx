'use client';

import { CustomCarousel } from '@/types/custom-carousel.type';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = ({ images }: CustomCarousel) => {
  return (
    <Carousel
      prevIcon={<i className="bi bi-chevron-left"></i>}
      nextIcon={<i className="bi bi-chevron-right"></i>}
      interval={null}
    >
      {images.map(({ src, alt }, index) => (
        <Carousel.Item key={index}>
          <div className="img-wrapper">
            {/* <div className="overlay"></div> */}
            <Image src={src} alt={alt} width={480} height={480} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
