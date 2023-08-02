import type { FC } from 'react';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';

export const EventsCard: FC<EventDetails> = ({
  charges,
  date,
  time,
  venueLocationLink,
  reservedPlayersCount,
  reservedPlayersList,
  venueName,
}) => {
  const isPortrait = useOrientation();
  const openSpots = reservedPlayersCount - reservedPlayersList.length;
    //getting next day date
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const dateToString = today.toString();
    const index = dateToString.indexOf('2023');
    const futureDate = dateToString.substring(0, index);
  
    const apiDate = date + " 2023"
    const day = new Date(apiDate).valueOf();
    const diffTime = Math.abs(day - new Date().valueOf())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))    

  const price = () => (
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Price{' '}
        <span>
          {venueName === 'Shoreline Athletic Fields' ? (
            <AttachMoneyIcon className={styles.currencyIcon} />
          ) : (
            <CurrencyRupeeSharp className={styles.currencyIcon} />
          )}
          {charges}
        </span>
      </Typography>
    </Grid>
  );

  const dateTime = () => (
    <Grid item xs={4} sm={6} md={4}>
      <Typography className={styles.title}>
        Date{''}
        <span>
          {diffDays > 1 ? futureDate : date} {time}
        </span>
      </Typography>
    </Grid>
  );

  const googleLocation = () => (
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Google Map{' '}
        <a href={venueLocationLink} target="_blank" rel="noreferrer">
          <LocationOnIcon className={styles.locationIcon} />
        </a>
      </Typography>
    </Grid>
  );

  const numberOfPlayers = () => (
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Number of Players <span>{reservedPlayersCount}</span>
      </Typography>
    </Grid>
  );

  const playersRequired = () =>
    openSpots > 0 ? (
      <Grid item xs={4} sm={4} md={4}>
        <Typography className={styles.title}>
          Open Spots <span>{openSpots}</span>
        </Typography>
      </Grid>
    ) : null;

  const joinNow = () =>
    isPortrait ? (
      <Grid item xs={4} sm={4} md={4}>
        <FlexBox className={styles.joinNow}>
          <Button variant="contained" onClick={() => alert('Joined')}>
            Join Queue
          </Button>
        </FlexBox>
      </Grid>
    ) : null;

  return (
    <>
      <FlexBox
        className={isPortrait ? styles.mobileEventSchedule : styles.eventSchedule}
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={isPortrait ? styles.mobileEventDetails : styles.eventDetails}
        >
          {price()}
          {dateTime()}
        </Grid>
      </FlexBox>
      <FlexBox
        className={isPortrait ? styles.mobileEventSchedule : styles.eventSchedule}
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={isPortrait ? styles.mobileEventPlayersDetail : styles.eventPlayersDetail}
        >
          {googleLocation()}
          {numberOfPlayers()}
          {playersRequired()}
          {joinNow()}
        </Grid>
      </FlexBox>
    </>
  );
};
