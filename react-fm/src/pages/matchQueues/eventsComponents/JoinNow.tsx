import type { FC } from 'react';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import useNotifications from '@/store/notifications';

import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';

export const JoinNow: FC<EventDetails> = ({ stripePaymentUrl, reservedPlayersCount, reservedPlayersList, waitListPlayers, waitListPlayersCount, venueName }) => {
  const [, notificationsActions] = useNotifications();
  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // But you also can use:
        // notificationsActions.push({ options: { content: ... } })
        // to show fully customized notification
        content: (
          <Alert severity="info">
            <AlertTitle>Message from {venueName}</AlertTitle>
              Event Full! Please check other events.
          </Alert>
        ),
      },
    });
  }

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
          <LockIcon onClick={showNotification} className={styles.lock}/>
        </Tooltip>
}
    </>
  );
};
