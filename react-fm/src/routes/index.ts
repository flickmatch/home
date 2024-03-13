import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import asyncComponentLoader from '@/utils/loader';

import type { Routes } from './types';
import { Pages } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/welcome')),
    path: '/home',
  },
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/welcome')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
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
  [Pages.GoogleLogin]: {
    component: asyncComponentLoader(() => import('@/pages/googleLoginAuth')),
    path: '/login',
    title: 'Login | Signup',
  },

  [Pages.ContactUs]: {
    component: asyncComponentLoader(() => import('@/pages/contactUs')),
    path: '/contact-us',
    title: 'Contact Us',
    icon: ContactPageIcon,
  },
  [Pages.AdminPage]: {
    component: asyncComponentLoader(() => import('@/pages/adminPage')),
    path: '/add-turf',
  },
  [Pages.RefundCancellation]: {
    component: asyncComponentLoader(() => import('@/pages/refundCancellation')),
    path: '/refund-cancellation',
  },
  [Pages.TermsConditions]: {
    component: asyncComponentLoader(() => import('@/pages/termsConditions')),
    path: '/terms-conditions',
  },
  [Pages.PrivacyPolicy]: {
    component: asyncComponentLoader(() => import('@/pages/privacyPolicy')),
    path: '/privacy-policy',
  },
  [Pages.ServicesPrivacyPolicy]: {
    component: asyncComponentLoader(() => import('@/pages/privacyPolicy')),
    path: '/services-7',
  },
  [Pages.GeneralTermsConditions]: {
    component: asyncComponentLoader(() => import('@/pages/termsConditions')),
    path: '/general-clean-1',
  },
  [Pages.Contact8]: {
    component: asyncComponentLoader(() => import('@/pages/contactUs')),
    path: '/contact-8',
  },
  [Pages.GeneralRefundCancellation]: {
    component: asyncComponentLoader(() => import('@/pages/refundCancellation')),
    path: '/general-clean',
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/profile')),
    path: '/profile-page',
  },
  [Pages.About2]: {
    component: asyncComponentLoader(() => import('@/pages/aboutUs')),
    path: '/about-2',
  },
};

export default routes;
