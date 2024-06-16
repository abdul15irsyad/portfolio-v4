import { BASE_URL } from '@/configs/app.config';
import { SideProject } from '@/types/side-project.type';

export const sideProjects: SideProject[] = [
  {
    title: 'Acak Kata',
    img: '/side-project/acak-kata.jpeg',
    desc: 'mengacak kata yang ada di list buat main "tebak satu kata" sama temen',
    href: 'https://acak-kata-v2.vercel.app',
    stacks: [
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 5' },
    ],
  },
  {
    title: 'Gin GORM REST API',
    img: '/side-project/gin-gorm-rest-api.jpg',
    desc: 'project for learning golang with gin framework and gorm as ORM',
    href: 'https://github.com/abdul15irsyad/gin-gorm-rest-api',
    stacks: [
      { icon: '/programming/gin.png', label: 'Gin' },
      { icon: '/programming/gorm.png', label: 'GORM' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
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
    title: 'Game Angka',
    img: '/side-project/game-angka-1.jpeg',
    desc: 'Project untuk latihan saya, menebak angka yang dipikirkan',
    href: 'https://abdul15irsyad.github.io/game-angka',
    stacks: [
      { icon: '/programming/html-5.png', label: 'HTML' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/javascript.png', label: 'Javascript' },
    ],
  },
  {
    title: 'Password Generator',
    img: '/side-project/password-generator-1.jpeg',
    desc: 'Hasilkan kata sandi acak untuk keamanan',
    href: 'https://abdul15irsyad.github.io/password-generator',
    stacks: [
      { icon: '/programming/html-5.png', label: 'HTML' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/javascript.png', label: 'Javascript' },
    ],
  },
];
