import Image from 'next/image';
import { CSSProperties } from 'react';

import { BASE_URL } from '@/configs/app.config';

import styles from './avatar.module.css';

export interface AvatarProps {
  alt?: string;
  imageUrl?: string | null;
}

export const Avatar = ({
  user,
  style,
}: {
  user: AvatarProps;
  style?: CSSProperties;
}) => {
  return (
    <div className={styles.avatar} style={style}>
      <Image
        src={user!.imageUrl ?? `${BASE_URL}/blog/default-profile.png`}
        alt={user.alt!}
        height={400}
        width={400}
      />
    </div>
  );
};
