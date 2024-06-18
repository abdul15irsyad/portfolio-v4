import { BASE_URL } from '@/configs/app.config';
import { SideProject } from '@/types/side-project.type';

export const sideProjects: SideProject[] = [
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
    img: '/side-project/portfolio.jpg',
    desc: 'Web portfolio saya beserta blog untuk sharing hal-hal mengenai coding & pemrograman',
    href: BASE_URL,
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 13' },
      // { icon: '/programming/vercel.png', label: 'Vercel' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 5' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/prisma.png', label: 'Prisma' },
      { icon: '/programming/supabase.png', label: 'Supabase' },
      // { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
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
];
