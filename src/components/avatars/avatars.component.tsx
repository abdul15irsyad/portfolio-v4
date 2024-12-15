import React from 'react';

import { BASE_URL } from '@/configs/app.config';

import { Avatar, AvatarProps } from './avatar.component';
import styles from './avatars.module.css';

const MAX_AVATARS = 8;

export const Avatars = ({ users }: { users: AvatarProps[] }) => {
  return (
    <div className={styles.avatars}>
      {users.length > MAX_AVATARS && (
        <Avatar
          user={{ imageUrl: `${BASE_URL}/user/3-dot-in-the-middle.jpg` }}
        />
      )}
      {users
        .sort((a) => (a.imageUrl! ? -1 : 1))
        .slice(0, MAX_AVATARS)
        .reverse()
        .map((user) => (
          <Avatar user={user} />
        ))}
    </div>
  );
};
