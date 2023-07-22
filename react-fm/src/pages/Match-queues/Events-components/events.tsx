import { FC } from 'react';
import { CurrencyRupeeSharp } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from '../queue.module.scss';

interface Props {
  charges: number;
  date: string;
  reservedPlayersCount: number;
  time: string;
  venueLocationLink: string;
  waitListPlayersCount: number
}

export const EventsCard: FC<Props> = ({
  charges,
  date,
  time,
  venueLocationLink,
  reservedPlayersCount,
  waitListPlayersCount
}) => {
  const isPortrait = useOrientation();

  return (
    <>
      <FlexBox className={isPortrait ? styles.mobileEventSchedule : styles.eventSchedule} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={isPortrait ? styles.mobileEventSection1 : styles.eventSection1}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={styles.title}>
              Price{' '}
              <span>
                <CurrencyRupeeSharp className={styles.currencyIcon} />
                {charges}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={4}>
            <Typography className={styles.title}>
              Date{' '}
              <span>
                {date} {time}
              </span>
            </Typography>
          </Grid>
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
          className={isPortrait ? styles.mobileEventSection1 : styles.eventSection2}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={styles.title}>
              Google Map{' '}
              <a href={venueLocationLink} target="_blank">
                <LocationOnIcon className={styles.locationIcon} />
              </a>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Typography className={styles.title}>
              Number of Players <span>{reservedPlayersCount}</span>
            </Typography>
          </Grid>
          {waitListPlayersCount > 0 ? null : (
            <Grid item xs={4} sm={4} md={4}>
              <Typography className={styles.title}>
                Players Required <span>{14 - reservedPlayersCount}</span>
              </Typography>
            </Grid>
          )}
          {isPortrait ? (
            <Grid item xs={4} sm={4} md={4}>
              <FlexBox className={styles.venue}>
                <Button
                  className={styles.joinNow}
                  variant="contained"
                  onClick={() => alert('Joined')}
                >
                  Join Queue
                </Button>
              </FlexBox>
            </Grid>
          ) : null}
        </Grid>
      </FlexBox>
    </>
  );
};
