import './fullscreen-carouse.css';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

interface Props {
  images: {
    src: string;
    alt: string;
  }[];
  onClose: () => void;
  defaultActiveIndex?: number;
}

export const FullscreenCarousel = ({
  images,
  defaultActiveIndex,
  onClose,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className={'fullscreen-carousel'}>
      <div className={'container'}>
        <Carousel
          prevIcon={<i className="bi bi-chevron-left"></i>}
          nextIcon={<i className="bi bi-chevron-right"></i>}
          interval={null}
          // indicators={false}
          defaultActiveIndex={defaultActiveIndex}
        >
          {images.map(({ src, alt }, index) => (
            <Carousel.Item key={index}>
              <div className={'img-wrapper'}>
                {/* <div className="overlay"></div> */}
                <Image
                  src={src}
                  alt={alt}
                  width={1080}
                  height={1080}
                  loading={'eager'}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={'btn-close'} onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  );
};
