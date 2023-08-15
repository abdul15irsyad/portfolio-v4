import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

enum Level {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCE = 'advance',
}
const Programming = () => {
  const programmingSkills = [
    {
      title: 'Backend',
      list: [
        // {
        //   name: 'Node JS (Typescript)',
        //   logo: '/programming/nodejs.png',
        //   level: Level.ADVANCE,
        //   href: 'https://nodejs.org',
        // },
        // {
        //   name: 'PHP',
        //   logo: '/programming/php.png',
        //   level: Level.ADVANCE,
        //   href: 'https://www.php.net',
        // },
        // {
        //   name: 'Golang',
        //   logo: '/programming/golang.png',
        //   level: Level.BEGINNER,
        //   href: 'https://go.dev',
        // },
        {
          name: 'Nest JS',
          logo: '/programming/nestjs.png',
          level: Level.ADVANCE,
          href: 'https://nestjs.com',
        },
        {
          name: 'Laravel',
          logo: '/programming/laravel.png',
          level: Level.INTERMEDIATE,
          href: 'https://laravel.com',
        },
        {
          name: 'Fiber',
          logo: '/programming/fiber.png',
          level: Level.BEGINNER,
          href: 'https://gofiber.io',
        },
      ],
    },
    {
      title: 'Frontend',
      list: [
        {
          name: 'React JS',
          logo: '/programming/react.png',
          level: Level.INTERMEDIATE,
          href: 'https://react.dev',
        },
        {
          name: 'Vue JS',
          logo: '/programming/vue.png',
          level: Level.BEGINNER,
          href: 'https://vuejs.org',
        },
        {
          name: 'Next JS',
          logo: '/programming/next.png',
          level: Level.BEGINNER,
          href: 'https://nextjs.org',
        },
      ],
    },
    {
      title: 'Database',
      list: [
        {
          name: 'MySQL',
          logo: '/programming/mysql.png',
          level: Level.INTERMEDIATE,
          href: 'https://www.mysql.com',
        },
        {
          name: 'PostgreSQL',
          logo: '/programming/postgresql.png',
          level: Level.INTERMEDIATE,
          href: 'https://www.postgresql.org/',
        },
        {
          name: 'Mongo DB',
          logo: '/programming/mongodb.png',
          level: Level.BEGINNER,
          href: 'https://www.mongodb.com',
        },
      ],
    },
    {
      title: 'Other',
      list: [
        {
          name: 'Git',
          logo: '/programming/git.png',
          level: Level.INTERMEDIATE,
          href: 'https://git-scm.com',
        },
        {
          name: 'Redis (Caching)',
          logo: '/programming/redis.png',
          level: Level.INTERMEDIATE,
          href: 'https://redis.io',
        },
        {
          name: 'CI/CD (Gitlab)',
          logo: '/programming/ci-cd.png',
          level: Level.BEGINNER,
        },
        {
          name: 'Docker',
          logo: '/programming/docker.png',
          level: Level.BEGINNER,
          href: 'https://www.docker.com',
        },
      ],
    },
  ];
  return (
    <div className="programming section">
      <div className="container">
        <h2 className="title text-center">
          <strong>Programming</strong>
        </h2>
        <hr />
        <div className="row">
          {programmingSkills.map(({ title, list }) => (
            <div className="col-md-3">
              <div className="category">
                <div className="category-title">{title}</div>
                <ul className="category-items">
                  {list?.map(({ name, logo, level, href }, index) => (
                    <Link
                      key={index}
                      href={href ?? '#'}
                      target={href ? '_blank' : '_self'}
                    >
                      <li className="category-item">
                        <div>
                          <Image src={logo} alt={name} width={24} height={24} />
                          <span className="cateogory-name">{name}</span>
                        </div>
                        <div>
                          <span className="badge bg-primary">{level}</span>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programming;
