import { Level, ProgrammingSkill } from '@/types/programming-skill.interface';

export const programmingSkills: ProgrammingSkill[] = [
  {
    title: 'programming-language',
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
        level: Level.INTERMEDIATE,
        // href: 'https://go.dev',
      },
      {
        name: 'Python',
        logo: '/programming/python.png',
        level: Level.BASIC,
        // href: 'https://www.python.org',
      },
      {
        name: 'Rust',
        logo: '/programming/rust.png',
        level: Level.LEARNING,
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
        logo: '/programming/express-js.png',
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
        name: 'Fastify',
        logo: '/programming/fastify.png',
        level: Level.INTERMEDIATE,
        href: 'https://fastify.dev/',
      },
      {
        name: 'Gin',
        logo: '/programming/gin.png',
        level: Level.INTERMEDIATE,
        href: 'https://gin-gonic.com/',
      },
      {
        name: 'Fiber',
        logo: '/programming/fiber.png',
        level: Level.BASIC,
        href: 'https://gofiber.io',
      },
      {
        name: 'Vue JS',
        logo: '/programming/vue.png',
        level: Level.BASIC,
        href: 'https://vuejs.org',
      },
      {
        name: 'Rocket',
        logo: '/programming/rocket.png',
        level: Level.LEARNING,
        href: 'https://rocket.rs',
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
        name: 'Rabbit MQ',
        logo: '/programming/rabbitmq.png',
        level: Level.INTERMEDIATE,
        // href: 'https://www.rabbitmq.com/',
      },
      {
        name: 'Kafka',
        logo: '/programming/kafka.png',
        level: Level.BASIC,
        href: 'https://kafka.apache.org',
      },
      {
        name: 'MinIO',
        logo: '/programming/minio.png',
        level: Level.INTERMEDIATE,
        href: 'https://www.min.io',
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
      {
        name: 'Terraform',
        logo: '/programming/terraform.webp',
        level: Level.BASIC,
        href: 'https://developer.hashicorp.com/terraform',
      },
    ],
  },
];
