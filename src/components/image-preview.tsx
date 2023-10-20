import React, { SetStateAction } from 'react';
import styles from './image-preview.module.css';

type Prop = {
  image: string;
  show: boolean;
  setShow: (value: SetStateAction<boolean>) => void;
};

const ImagePreview = ({ image, show, setShow }: Prop) => {
  const body = document.querySelector('body');
  const handleClick = (e: any) => {
    if (e.target.tagName.toLowerCase() !== 'img') {
      setShow(false);
      body!.style.overflow = 'auto';
    }
  };
  return (
    <div
      className={styles['image-preview']}
      style={{ display: `${show ? 'flex' : 'none'}` }}
      onClick={handleClick}
    >
      <i className={`${styles.close} bi bi-x`}></i>
      <img src={image!} />
    </div>
  );
};

export default ImagePreview;
