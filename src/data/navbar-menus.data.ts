import { NavbarMenu } from '@/types/navbar-menu.type';

export const navbarMenus: NavbarMenu[] = [
  { label: 'Home', href: '/' },
  // { label: 'Work Experience', href: '/#experience' },
  // { label: 'Programming', href: '/#programming' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Side Project', href: '/side-project' },
  { label: 'Blog', href: '/blog' },
];

export const navbarIconMenus: NavbarMenu[] = [
  {
    label: 'Github',
    logo: '/icons/github.png',
    href: 'https://github.com/abdul15irsyad',
    newTab: true,
  },
  {
    label: 'Linkedin',
    logo: '/icons/linkedin.png',
    href: 'https://www.linkedin.com/in/irsyad-abdul-hamid-d/',
    newTab: true,
  },
];
