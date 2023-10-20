import React, { SetStateAction } from 'react';
import styles from './image-preview.module.css';

export type Modal = {
  show?: boolean;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
};

type Prop = {
  modal: Modal;
  setModal: (value: SetStateAction<Modal>) => void;
};

const ImagePreview = ({ modal, setModal }: Prop) => {
  const body = document.querySelector('body');
  const handleClick = (e: any) => {
    if (e.target.tagName.toLowerCase() !== 'img') {
      setModal({ ...modal, show: false });
      body!.style.overflow = 'auto';
    }
  };
  return (
    <div
      className={styles['image-preview']}
      style={{ display: `${modal.show ? 'flex' : 'none'}` }}
      onClick={handleClick}
    >
      <i className={`${styles.close} bi bi-x`}></i>
      <img src={modal.image!} className={styles[modal.size ?? 'lg']} />
    </div>
  );
};

export default ImagePreview;
