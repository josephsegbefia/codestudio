import { NavbarLink } from '@/types';

export const navbarLinks: NavbarLink[] = [
  {
    imgURL: '/assets/icons/user.svg',
    route: '/',
    label: 'About Me',
  },
  {
    imgURL: '/assets/icons/calendar.svg',
    route: '/projects',
    label: 'Projects',
  },
  {
    imgURL: '/assets/icons/message.svg',
    route: '/contact',
    label: 'Contact Me',
  },
];
