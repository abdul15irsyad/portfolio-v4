import { EXPERIMENTAL } from '@/configs/app.config';
import { NavbarMenu } from '@/types/navbar-menu.type';

export const navbarMenus: NavbarMenu[] = [
  { label: 'home', href: '/' },
  { label: 'portfolio', href: '/portfolio' },
  { label: 'side-project', href: '/side-project' },
  { label: 'blog', href: '/blog' },
];

if (EXPERIMENTAL) {
  navbarMenus.push({ label: 'contact', href: '/contact-me' });
}

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
