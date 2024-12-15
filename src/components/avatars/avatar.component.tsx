import Image from 'next/image';

import { BASE_URL } from '@/configs/app.config';

import styles from './avatar.module.css';

export interface AvatarProps {
  alt?: string;
  imageUrl?: string | null;
}

export const Avatar = ({ user }: { user: AvatarProps }) => {
  return (
    <div className={styles.avatar}>
      <Image
        src={user!.imageUrl ?? `${BASE_URL}/blog/default-profile.png`}
        alt={user.alt!}
        height={400}
        width={400}
      />
    </div>
  );
};
