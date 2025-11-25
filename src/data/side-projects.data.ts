import slugify from 'slugify';

import { BASE_URL } from '@/configs/app.config';
import { SideProject } from '@/types/side-project.type';
import { random } from '@/utils/array.util';

export const sideProjects: SideProject[] = [
  {
    img: `/side-project/go-sse-notification-fe.jpg`,
    href: 'https://github.com/abdul15irsyad/go-sse-frontend',
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 16' },
      { icon: '/programming/mantine.png', label: 'Mantine 8' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'SSE untuk Notifikasi (Frontend)',
        desc: 'Implementasi SSE untuk real time notifikasi',
      },
      {
        lang: 'en',
        title: 'SSE for Notification (Frontend)',
        desc: 'SSE implementation for real-time notification',
      },
    ],
  },
  {
    img: `/side-project/go-sse-notification.jpg`,
    href: 'https://github.com/abdul15irsyad/go-sse',
    stacks: [
      { icon: '/programming/golang.png', label: 'Golang' },
      { icon: '/programming/gorm.png', label: 'GORM' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'SSE untuk Notifikasi',
        desc: 'Implementasi SSE untuk real time notifikasi',
      },
      {
        lang: 'en',
        title: 'SSE for Notification',
        desc: 'SSE implementation for real-time notification',
      },
    ],
  },
  {
    img: `/side-project/anime-random-quote.jpg`,
    href: 'https://anime-random-quote.vercel.app/',
    stacks: [{ icon: '/programming/next.png', label: 'Next JS 15' }],
    translates: [
      {
        lang: 'id',
        title: 'Anime Random Quote',
        desc: 'Kutipan acak dari anime top seperti One Piece, Attack on Titan, Naruto, dll.',
      },
      {
        lang: 'en',
        title: 'Anime Random Quote',
        desc: 'Random quote from top animes like One Piece, Attack on Titan, Naruto, etc.',
      },
    ],
  },
  {
    img: `/side-project/live-chat-min.jpg`,
    href: 'https://live-chat.irsyadabdul.my.id',
    stacks: [
      { icon: '/programming/golang.png', label: 'Golang' },
      { icon: '/programming/websocket.png', label: 'WebSocket' },
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/tailwind.png', label: 'Tailwind CSS' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Room Chat',
        desc: 'Room Chat App dengan Websocket',
      },
      {
        lang: 'en',
        title: 'Room Chat',
        desc: 'Room Chat App with websocket',
      },
    ],
  },
  {
    img: `/side-project/go-grpc.jpg`,
    href: 'https://github.com/abdul15irsyad/go-grpc',
    stacks: [
      { icon: '/programming/golang.png', label: 'Golang' },
      { icon: '/programming/grpc.png', label: 'gRPC' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Golang gRPC',
        desc: 'contoh golang gRPC (google remote procedure call)',
      },
      {
        lang: 'en',
        title: 'Golang gRPC',
        desc: 'golang gRPC (google remote procedure call) example',
      },
    ],
  },
  {
    img: `/side-project/tic-tac-toe.jpg`,
    href: 'https://tic-tac-toe.irsyadabdul.my.id/',
    stacks: [{ icon: '/programming/next.png', label: 'Next JS 14' }],
    translates: [
      {
        lang: 'id',
        title: 'Tic Tac Toe',
        desc: 'game menjadi satu baris pertama',
      },
      {
        lang: 'en',
        title: 'Tic Tac Toe',
        desc: 'game to be first one line',
      },
    ],
  },
  {
    img: `/side-project/go-rabbitmq.jpg`,
    href: 'https://github.com/abdul15irsyad/go-rabbitmq',
    stacks: [
      { icon: '/programming/golang.png', label: 'Golang' },
      { icon: '/programming/rabbitmq.png', label: 'RabbitMQ' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Golang RabbitMQ',
        desc: 'contoh golang rabbitmq dengan mekanisme coba lagi dan penundaan',
      },
      {
        lang: 'en',
        title: 'Golang RabbitMQ',
        desc: 'golang rabbitmq example with retry mechanism and delay',
      },
    ],
  },
  {
    img: `/side-project/node-rabbitmq-1.jpg`,
    href: 'https://github.com/abdul15irsyad/node-rabbitmq',
    stacks: [
      { icon: '/programming/typescript.png', label: 'Typescript' },
      { icon: '/programming/rabbitmq.png', label: 'RabbitMQ' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Node RabbitMQ',
        desc: 'contoh node rabbitmq dengan mekanisme coba lagi dan penundaan',
      },
      {
        lang: 'en',
        title: 'Node RabbitMQ',
        desc: 'node rabbitmq example with retry mechanism and delay',
      },
    ],
  },
  {
    img: [1, 2, 3, 4].map(
      (num: number) => `/side-project/yuk-ngobrol-${num}.jpg`,
    ),
    href: 'https://yuk-ngobrol.vercel.app/',
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/prisma.png', label: 'Prisma' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Yuk Ngobrol',
        desc: 'Kartu yg berisi pertanyaan² tentang masa lalu, kehidupan, hubungan, dan diri sendiri ini bisa bikin kalian makin mengenal doi',
      },
      {
        lang: 'en',
        title: 'Yuk Ngobrol',
        desc: 'Cards that contain questions about the past, life, relationships, and yourself can make you more familiar with your bf/gf',
      },
    ],
  },
  {
    img: '/side-project/stopwatch.jpg',
    href: 'https://stopwatch.irsyadabdul.my.id',
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/mantine.png', label: 'Mantine 7' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Stopwatch, Clock dan Timer',
        desc: 'Tools waktu seperti stopwatch, jam dan timer',
      },
      {
        lang: 'en',
        title: 'Stopwatch, Clock and Timer',
        desc: 'Timer tools like stopwatch, clock and timer',
      },
    ],
  },
  {
    img: '/side-project/acak-kata.jpeg',
    href: 'https://acak-kata-v2.vercel.app',
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 5' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Acak Kata',
        desc: 'Mengacak kata yang ada di list buat main "tebak satu kata" sama temen',
      },
      {
        lang: 'en',
        title: 'Random Word',
        desc: 'Randoming the words on the list to play "guess one word" with your friends',
      },
    ],
  },
  {
    title: 'Gin GORM REST API',
    img: '/side-project/gin-gorm-rest-api.jpg',
    href: 'https://github.com/abdul15irsyad/gin-gorm-rest-api',
    stacks: [
      { icon: '/programming/gin.png', label: 'Gin' },
      { icon: '/programming/gorm.png', label: 'GORM' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
    ],
    translates: [
      {
        lang: 'id',
        desc: 'Proyek untuk belajar golang dengan framework gin dan gorm sebagai ORM',
      },
      {
        lang: 'en',
        desc: 'Project for learning golang with gin framework and gorm as ORM',
      },
    ],
  },
  {
    title: 'Web Portfolio',
    img: '/side-project/new-portfolio.jpg',
    desc: 'Web portfolio saya beserta blog untuk sharing hal-hal mengenai coding & pemrograman',
    href: BASE_URL,
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 13' },
      { icon: '/programming/vercel.png', label: 'Vercel' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 5' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/prisma.png', label: 'Prisma' },
      // { icon: '/programming/supabase.png', label: 'Supabase' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
    ],
    translates: [
      {
        lang: 'id',
        desc: 'Portofolio Web saya beserta blog untuk sharing hal-hal mengenai coding & pemrograman',
      },
      {
        lang: 'en',
        desc: 'My Web Portfolio and blog to share things about coding & programming',
      },
    ],
  },
  {
    title: 'Janna',
    img: '/side-project/janna-1.jpg',
    desc: 'Nest JS Boilerplate',
    href: 'https://github.com/abdul15irsyad/janna',
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
    ],
  },
  {
    img: '/side-project/game-angka-1.jpeg',
    href: 'https://abdul15irsyad.github.io/game-angka',
    stacks: [
      { icon: '/programming/html-5.png', label: 'HTML' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/javascript.png', label: 'Javascript' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Game Angka',
        desc: 'Project untuk latihan saya, menebak angka yang dipikirkan',
      },
      {
        lang: 'en',
        title: 'Number Game',
        desc: 'Project for exercise, guessing the number in your mind',
      },
    ],
  },
  {
    img: '/side-project/password-generator-1.jpeg',
    href: 'https://abdul15irsyad.github.io/password-generator',
    stacks: [
      { icon: '/programming/html-5.png', label: 'HTML' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/javascript.png', label: 'Javascript' },
    ],
    translates: [
      {
        lang: 'id',
        title: 'Generator Kata Sandi',
        desc: 'Hasilkan kata sandi acak untuk keamanan',
      },
      {
        lang: 'en',
        title: 'Password Generator',
        desc: 'Generate a random password for security',
      },
    ],
  },
].map(({ img, ...sideProject }) => ({
  ...sideProject,
  img: Array.isArray(img) ? random(img) : img,
}));

export const allStacks = sideProjects
  .reduce((prev: SideProject['stacks'], curr) => {
    return [
      ...prev,
      ...(curr.stacks?.filter(
        (stack) => !prev.find(({ icon }) => icon === stack.icon),
      ) ?? []),
    ];
  }, [])
  .map((stack) => ({
    ...stack,
    slug: slugify(stack.icon.split('/').pop()!.split('.')[0]!),
  }))
  .sort((a, b) => (a.slug < b.slug ? -1 : 1));
