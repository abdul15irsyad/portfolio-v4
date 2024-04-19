import { ProgrammingSkill, Level } from '@/types/programming-skill.interface';

export const programmingSkills: ProgrammingSkill[] = [
  {
    title: 'Language',
    list: [
      {
        name: 'Typescript',
        logo: '/programming/typescript.png',
        level: Level.GOOD,
        // href: 'https://www.typescriptlang.org',
      },
      {
        name: 'PHP',
        logo: '/programming/php.png',
        level: Level.GOOD,
        // href: 'https://www.php.net',
      },
      {
        name: 'Python',
        logo: '/programming/python.png',
        level: Level.BASIC,
        // href: 'https://www.python.org',
      },
      {
        name: 'Golang',
        logo: '/programming/golang.png',
        level: Level.LEARNING,
        // href: 'https://go.dev',
      },
    ],
  },
  {
    title: 'Framework',
    list: [
      {
        name: 'Nest JS',
        logo: '/programming/nestjs.png',
        level: Level.GOOD,
        href: 'https://nestjs.com',
      },
      {
        name: 'Express JS',
        logo: '/programming/express.png',
        level: Level.GOOD,
        href: 'https://expressjs.com',
      },
      {
        name: 'Laravel',
        logo: '/programming/laravel.png',
        level: Level.GOOD,
        href: 'https://laravel.com',
      },
      // {
      //   name: 'Codeigniter',
      //   logo: '/programming/codeigniter.png',
      //   level: Level.INTERMEDIATE,
      //   href: 'https://codeigniter.com',
      // },
      // {
      //   name: 'React JS',
      //   logo: '/programming/react.png',
      //   level: Level.INTERMEDIATE,
      //   href: 'https://react.dev',
      // },
      {
        name: 'Vue JS',
        logo: '/programming/vue.png',
        level: Level.BASIC,
        href: 'https://vuejs.org',
      },
      {
        name: 'Next JS',
        logo: '/programming/next.png',
        level: Level.BASIC,
        href: 'https://nextjs.org',
      },
      {
        name: 'Fiber',
        logo: '/programming/fiber.png',
        level: Level.LEARNING,
        href: 'https://gofiber.io',
      },
      {
        name: 'Flutter',
        logo: '/programming/flutter.png',
        level: Level.LEARNING,
        href: 'https://flutter.dev',
      },
    ],
  },
  {
    title: 'Other',
    list: [
      {
        name: 'MySQL',
        logo: '/programming/mysql.png',
        level: Level.INTERMEDIATE,
        // href: 'https://www.mysql.com',
      },
      {
        name: 'Mongo DB',
        logo: '/programming/mongodb.png',
        level: Level.BASIC,
        // href: 'https://www.mongodb.com',
      },
      {
        name: 'PostgreSQL',
        logo: '/programming/postgresql.png',
        level: Level.INTERMEDIATE,
        // href: 'https://www.postgresql.org/',
      },
      {
        name: 'Git',
        logo: '/programming/git.png',
        level: Level.INTERMEDIATE,
        // href: 'https://git-scm.com',
      },
      {
        name: 'Redis',
        logo: '/programming/redis.png',
        level: Level.INTERMEDIATE,
        // href: 'https://redis.io',
      },
      {
        name: 'CI/CD (Gitlab)',
        logo: '/programming/ci-cd.png',
        level: Level.BASIC,
      },
      {
        name: 'Docker',
        logo: '/programming/docker.png',
        level: Level.BASIC,
        // href: 'https://www.docker.com',
      },
      {
        name: 'Websocket',
        logo: '/programming/websocket.png',
        level: Level.BASIC,
        // href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      },
    ],
  },
];
