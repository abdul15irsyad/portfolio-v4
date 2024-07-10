import React, { SetStateAction } from 'react';

import styles from './image-preview.module.css';

export type Modal = {
  show?: boolean;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
  caption?: string;
};

type Prop = {
  modal: Modal;
  setModal: (value: SetStateAction<Modal>) => void;
};

const ImagePreview = ({ modal, setModal }: Prop) => {
  const body = document.querySelector('body');
  const handleClick = (e: any) => {
    if (!['img', 'h6'].includes(e.target.tagName.toLowerCase())) {
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
      {modal.caption && <h6>{modal.caption}</h6>}
    </div>
  );
};

export default ImagePreview;
