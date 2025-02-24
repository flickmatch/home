import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PaymentsIcon from '@mui/icons-material/Payments';
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
  [Pages.Flickpass]: {
    component: asyncComponentLoader(() => import('@/pages/passesAll')),
    path: '/game-passes',
    icon: PaymentsIcon,
    title: 'Flickpass',
  },
  [Pages.GamePasses]: {
    component: asyncComponentLoader(() => import('@/pages/passes')),
    path: '/game-passes/:cityId',
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
  // [Pages.MatchQueueWithId]: {
  //   component: asyncComponentLoader(() => import('@/pages/matchQueues')),
  //   path: '/match-queues/:id',
  //   title: 'Match Queues',
  //   icon: SportsSoccerIcon,
  // },
  [Pages.GoogleLogin]: {
    component: asyncComponentLoader(() => import('@/pages/googleLoginAuth')),
    path: '/login',
  },

  [Pages.ContactUs]: {
    component: asyncComponentLoader(() => import('@/pages/contactUs')),
    path: '/contact-us',
    title: 'Contact Us',
    icon: ContactPageIcon,
  },
  [Pages.Rewards]: {
    component: asyncComponentLoader(() => import('@/pages/Rewards')),
    path: '/rewards',
    title: 'Gift Pass',
    icon: AttachMoneyIcon,
  },
  [Pages.AddTurfPage]: {
    component: asyncComponentLoader(() => import('@/pages/adminMode/addTurf')),
    path: '/add-turf',
  },
  [Pages.AddGame]: {
    component: asyncComponentLoader(() => import('@/pages/adminMode/addGame')),
    path: '/add-game',
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
  [Pages.Event]: {
    component: asyncComponentLoader(() => import('@/pages/eventPage')),
    path: '/event/:id',
  },
  [Pages.Championscup]: {
    component: () => {
      window.location.href = 'https://form.typeform.com/to/HnoDqHKI';
      return null;
    },
    title: 'Champions Us',
    icon: EmojiEventsIcon,
    path: 'https://form.typeform.com/to/HnoDqHKI',
  },
};

export default routes;
