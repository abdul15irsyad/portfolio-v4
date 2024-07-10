import { Level,ProgrammingSkill } from '@/types/programming-skill.interface';

export const programmingSkills: ProgrammingSkill[] = [
  {
    title: 'language',
    list: [
      // {
      //   name: 'Javascript',
      //   logo: '/programming/javascript.png',
      //   level: Level.GOOD,
      // },
      {
        name: 'Node JS (Typescript)',
        // logo: ['/programming/nodejs.png', '/programming/typescript.png'],
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
        name: 'Golang',
        logo: '/programming/golang.png',
        level: Level.BASIC,
        // href: 'https://go.dev',
      },
      {
        name: 'Python',
        logo: '/programming/python.png',
        level: Level.BASIC,
        // href: 'https://www.python.org',
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
        name: 'Next JS',
        logo: '/programming/next.png',
        level: Level.INTERMEDIATE,
        href: 'https://nextjs.org',
      },
      {
        name: 'Gin',
        logo: '/programming/gin.png',
        level: Level.BASIC,
        href: 'https://gin-gonic.com/',
      },
      {
        name: 'Vue JS',
        logo: '/programming/vue.png',
        level: Level.BASIC,
        href: 'https://vuejs.org',
      },
      {
        name: 'Fiber',
        logo: '/programming/fiber.png',
        level: Level.LEARNING,
        href: 'https://gofiber.io',
      },
      // {
      //   name: 'Flutter',
      //   logo: '/programming/flutter.png',
      //   level: Level.LEARNING,
      //   href: 'https://flutter.dev',
      // },
    ],
  },
  {
    title: 'other',
    list: [
      {
        name: 'PostgreSQL',
        logo: '/programming/postgresql.png',
        level: Level.GOOD,
        // href: 'https://www.postgresql.org/',
      },
      {
        name: 'MySQL',
        logo: '/programming/mysql.png',
        level: Level.GOOD,
        // href: 'https://www.mysql.com',
      },
      {
        name: 'Mongo DB',
        logo: '/programming/mongodb.png',
        level: Level.BASIC,
        // href: 'https://www.mongodb.com',
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
        name: 'CI/CD',
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
        name: 'GraphQL',
        logo: '/programming/graphql.png',
        level: Level.BASIC,
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
