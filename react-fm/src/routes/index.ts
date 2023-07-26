// import AddTaskIcon from '@mui/icons-material/AddTask';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';

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
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/page1')),
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
  },
  [Pages.MatchQueue]: {
    component: asyncComponentLoader(() => import('@/pages/matchQueues')),
    path: '/match-queues',
    title: 'Match Queues',
    icon: AddToQueueIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/notFound')),
    path: '/not-found',
    title: 'Not Found',
    icon: SmartToyIcon,
  },
};

export default routes;
