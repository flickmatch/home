import type { FC } from 'react';
import { useEffect, useState } from 'react';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import useOrientation from '@/hooks/useOrientation';

import styles from './Queue.module.scss';

type venueDetails = {
  venueName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date: any;
  dummyData: boolean;
  testGame?: boolean | undefined;
};

export const VenueName: FC<venueDetails> = ({ venueName, date, dummyData, testGame }) => {
  const isPortrait = useOrientation();
  const [batchVisible, setBatchVisible] = useState(false);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const twoDigitDay = day < 10 ? '0' + day : day.toString();

    //Event Date
    const dayValue = parseInt(date.split(' ').pop(), 10);

    if (dayValue - parseInt(twoDigitDay) === 0 && dummyData === false) {
      setBatchVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Typography className={isPortrait ? styles.mobileVenueName : styles.venueName}>
      <SportsSoccerIcon className={styles.sportsIcon} />
      {venueName}
      {batchVisible ? (
        <Chip label="today" color="primary" variant="outlined" className={styles.todayGameTag} />
      ) : null}
      {testGame ? (
        <Chip label="test game" color="primary" variant="outlined" className={styles.testGameTag} />
      ) : null}
    </Typography>
  );
};
