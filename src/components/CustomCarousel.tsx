import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-bootstrap';

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

const CustomCarousel = ({ images }: Props) => {
  return (
    <Carousel
      prevIcon={<i className="bi bi-chevron-left"></i>}
      nextIcon={<i className="bi bi-chevron-right"></i>}
    >
      {images.map(({ src, alt }, index) => (
        <Carousel.Item key={index}>
          <div className="img-wrapper">
            {/* <div className="overlay"></div> */}
            <Image src={src} alt={alt} width={400} height={400} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
