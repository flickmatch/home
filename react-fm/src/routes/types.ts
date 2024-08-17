import type { FC } from 'react';
import type { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome,
  AboutUs,
  MatchQueue,
  ContactUs,
  WhatWeDo,
  Home,
  GoogleLogin,
  RefundCancellation,
  TermsConditions,
  PrivacyPolicy,
  AddTurfPage,
  AddGame,
  ServicesPrivacyPolicy,
  GeneralTermsConditions,
  Contact8,
  GeneralRefundCancellation,
  Profile,
  About2,
  Rewards,
  Event,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
