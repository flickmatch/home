import type { FC } from 'react';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LockIcon from '@mui/icons-material/Lock';

import type { EventDetails } from '../types/Events.types';

export const JoinNow: FC<EventDetails> = ({ stripePaymentUrl, reservedPlayersCount, reservedPlayersList, waitListPlayers, waitListPlayersCount }) => {
  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;
  
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
    {openWaitList > 0 ?
      <Button
        variant="contained"
        onClick={() => {
          if (stripePaymentUrl) openInNewTab(stripePaymentUrl);
          else alert('Match Full');
        }}
      >
        Join {stripePaymentUrl && openSpots > 0 ? 'Game' : 'Waitlist'}
      </Button>
      : <Tooltip title="Event Locked" arrow>
          <LockIcon />
        </Tooltip>
}
    </>
  );
};
