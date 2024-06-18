import React from 'react';
import styles from './text-animation.module.css';

export const TextAnimation = ({ text }: { text: string }) => {
  const splitTexts = text.split(' ').map((word, index) => {
    const chars = word.split('').map((char, index) => {
      return (
        <span key={index} className={styles['split-char']}>
          {char}
        </span>
      );
    });
    return (
      <div key={index} className={styles['split-word']}>
        {chars.map((char) => char)}&nbsp;
      </div>
    );
  });
  return (
    <div className={styles['text-animation']}>
      {splitTexts.map((splitText, index) => (
        <div key={index}>{splitText}</div>
      ))}
    </div>
  );
};
