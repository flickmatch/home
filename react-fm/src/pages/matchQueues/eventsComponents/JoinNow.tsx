import type { FC } from 'react';

import Button from '@mui/material/Button';

import type { EventDetails } from '../types/Events.types';

export const JoinNow: FC<EventDetails> = ({ stripePaymentUrl }) => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          if (stripePaymentUrl) openInNewTab(stripePaymentUrl);
          else alert('Match Full');
        }}
      >
        Join {stripePaymentUrl ? 'Game' : 'Waitlist'}
      </Button>
    </>
  );
};
