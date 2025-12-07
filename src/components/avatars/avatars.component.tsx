import { BASE_URL } from '@/configs/app.config';

import { Avatar, AvatarProps } from './avatar.component';
import styles from './avatars.module.css';

const MAX_AVATARS = 8;

export const Avatars = ({ users }: { users: AvatarProps[] }) => {
  return (
    <div className={styles.avatars}>
      {users
        .sort((a) => (a.imageUrl! ? -1 : 1))
        .slice(0, MAX_AVATARS)
        .map((user, index, array) => (
          <Avatar
            key={index}
            user={user}
            style={{ zIndex: array.length - index }}
          />
        ))}
      {users.length > MAX_AVATARS && (
        <Avatar
          user={{ imageUrl: `${BASE_URL}/user/3-dot-in-the-middle.jpg` }}
        />
      )}
    </div>
  );
};
