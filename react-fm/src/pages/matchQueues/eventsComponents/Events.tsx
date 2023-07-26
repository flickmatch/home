import type { FC } from 'react';
import { CurrencyRupeeSharp } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Events.module.scss';
import type { EventsDetails } from '../types/Events.types'

export const EventsCard: FC<EventsDetails> = ({
  charges,
  date,
  time,
  venueLocationLink,
  reservedPlayersCount,
  waitListPlayersCount
}) => {
  const isPortrait = useOrientation();

  const price = () => 
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Price{' '}
        <span>
          <CurrencyRupeeSharp className={styles.currencyIcon} />
          {charges}
        </span>
      </Typography>
    </Grid>

  const dateTime = () => 
    <Grid item xs={4} sm={6} md={4}>
      <Typography className={styles.title}>
        Date{''}
        <span>
          {date} {time}
        </span>
      </Typography>
    </Grid>

  const googleLocation = () => 
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Google Map{' '}
        <a href={venueLocationLink} target="_blank" rel="noreferrer">
          <LocationOnIcon className={styles.locationIcon} />
        </a>
      </Typography>
    </Grid>

  const numberOfPlayers = () => 
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Number of Players <span>{reservedPlayersCount}</span>
      </Typography>
    </Grid>

  const playersRequired = () => 
    waitListPlayersCount > 0 ? null : (
      <Grid item xs={4} sm={4} md={4}>
        <Typography className={styles.title}>
          Players Required <span>{14 - reservedPlayersCount}</span>
        </Typography>
      </Grid>
    )

  const joinNow = () => 
    isPortrait ? (
      <Grid item xs={4} sm={4} md={4}>
        <FlexBox className={styles.joinNow}>
          <Button variant="contained" onClick={() => alert('Joined')}>
            Join Queue
          </Button>
        </FlexBox>
      </Grid>
    ) : null

  return (
    <>
      <FlexBox className={isPortrait ? styles.mobileEventSchedule : styles.eventSchedule} sx={{ flexGrow: 1 }}>
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
