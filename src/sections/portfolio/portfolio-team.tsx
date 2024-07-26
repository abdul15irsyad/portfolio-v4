import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BASE_URL } from '@/configs/app.config';
import { Team } from '@/types/team.type';

import styles from './portfolio-team.module.css';

const PortfolioTeam = ({ team }: { team: Team }) => {
  return team.user?.linkedin ? (
    <Link
      href={team.user?.linkedin as string}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TeamCard team={team} />
    </Link>
  ) : (
    <TeamCard team={team} />
  );
};

const TeamCard = ({ team }: { team: Team }) => (
  <div className={`${styles['portfolio-team']}`}>
    <div className={styles.image}>
      <Image
        src={team.user!.photo?.url ?? `${BASE_URL}/blog/default-profile.png`}
        alt={team.user!.photo?.originalFileName ?? 'default-profile.png'}
        height={400}
        width={400}
      />
    </div>
    <div className={styles.detail}>
      <h5 className={styles.name}>{team.user!.name}</h5>
      <span className={styles.role}>{team.role}</span>
    </div>
  </div>
);

export default PortfolioTeam;
