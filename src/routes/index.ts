import AddTaskIcon from '@mui/icons-material/AddTask';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Page1')),
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
  },
  [Pages.MatchQue]: {
    component: asyncComponentLoader(() => import('@/pages/Match-ques')),
    path: '/match-queues',
    title: 'Match Queues',
    icon: AddToQueueIcon,
  },

};

export default routes;
