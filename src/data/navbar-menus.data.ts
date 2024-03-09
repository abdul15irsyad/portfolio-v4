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
    logo: '/icons/github.svg',
    href: 'https://github.com/abdul15irsyad',
    newTab: true,
  },
  {
    label: 'Linkedin',
    logo: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/irsyad-abdul-hamid-d/',
    newTab: true,
  },
];
