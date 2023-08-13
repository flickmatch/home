import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import asyncComponentLoader from '@/utils/loader';

import type { Routes } from './types';
import { Pages } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/matchQueues')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  // [Pages.Welcome]: {
  //   component: () => {
  //     window.location.href = 'https://flickmatch.in';
  //     return null;
  //   },
  //   path: '/',
  //   title: 'Home',
  //   icon: HomeIcon,
  // },
  [Pages.WhatWeDo]: {
    component: asyncComponentLoader(() => import('@/pages/whatWeDo')),
    path: '/what-we-do',
    title: 'What We Do',
    icon: PlayArrowIcon,
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
  // [Pages.ContactUs]: {
  //   component: asyncComponentLoader(() => import('@/pages/contactUs')),
  //   path: '/contact-us',
  //   title: 'Contact Us',
  //   icon: ContactPageIcon,
  // },
  [Pages.ContactUs]: {
    component: () => {
      window.location.href = 'https://www.flickmatch.in/contact-8';
      return null;
    },
    path: '/contact-us',
    title: 'Contact Us',
    icon: ContactPageIcon,
  },
};

export default routes;
