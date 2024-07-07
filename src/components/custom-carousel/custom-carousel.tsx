'use client';

import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-bootstrap';

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export const CustomCarousel = ({ images }: Props) => {
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
