import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import asyncComponentLoader from '@/utils/loader';

import type { Routes } from './types';
import { Pages } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/welcome')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.AboutUs]: {
    component: asyncComponentLoader(() => import('@/pages/aboutUs')),
    path: '/about-us',
    title: 'About Us',
    icon: InfoIcon,
  },
  [Pages.MatchQueue]: {
    component: asyncComponentLoader(() => import('@/pages/matchQueues')),
    path: '/match-queues',
    title: 'Match Queues',
    icon: SportsSoccerIcon,
  },
  [Pages.ContactUs]: {
    component: asyncComponentLoader(() => import('@/pages/contactUs')),
    path: '/contact-us',
    title: 'Contact Us',
    icon: ContactPageIcon,
  },
};

export default routes;
