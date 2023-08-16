import { NavbarMenu } from '@/types/navbar-menu.type';
import Image from 'next/image';

export const navbarMenus: NavbarMenu[] = [
  { label: 'Home', href: '/' },
  { label: 'Work Experience', href: '/#experience' },
  { label: 'Programming', href: '/#programming' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Github',
    logo: '/icons/github.svg',
    href: 'https://github.com/abdul15irsyad',
    newTab: true,
  },
];
