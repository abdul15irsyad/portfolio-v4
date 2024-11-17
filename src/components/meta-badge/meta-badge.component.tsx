import React, { ReactNode } from 'react';

import styles from './meta-badge.module.css';

export const MetaBadge = ({
  text,
  icon,
}: {
  text: string | number;
  icon?: ReactNode;
}) => {
  return (
    <div className={styles['meta-badge']}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <span>{text}</span>
    </div>
  );
};
