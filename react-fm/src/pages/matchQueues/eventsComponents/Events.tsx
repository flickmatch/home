import type { FC } from 'react';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { DateTime } from "luxon";
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { JoinNow } from './JoinNow';

export const EventsCard: FC<EventDetails> = ({
  charges,
  date,
  time,
  eventId,
  venueName,
  venueLocationLink,
  reservedPlayersCount,
  reservedPlayersList,
  waitListPlayers,
  waitListPlayersCount,
  stripePaymentUrl,
}) => {
  const isPortrait = useOrientation();
  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;

  //getting next day date
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const dateToString = today.toString();
  const index = dateToString.indexOf('2023');
  const futureDate = dateToString.substring(0, index);

  const apiDate = date + ' 2023';
  const day = new Date(apiDate).valueOf();
  const diffTime = Math.abs(day - new Date().valueOf());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const check = diffDays > 0 ? futureDate + " 2023" : apiDate
  const eventDate = new Date(check).toISOString().split('T')[0]
  const startTime = time.split('-')[0]
  const endTime = time.split('-')[1]
  
  const firstInterval = startTime.substring(0, startTime.length - 2)
  const secondInterval = endTime.substring(0, endTime.length - 2)

  //converting date-time to "yyyy-MM-dd'T'HH:mm:ss" format
  const istFirstDate = `${eventDate}${firstInterval.charAt(0) == "1" ? "T" : "T0"}${firstInterval}:00`;
  const istSecondDate = `${eventDate}${secondInterval.charAt(0) == "1" ? "T" : "T0"}${secondInterval}:00`; 

  //console.log(istFirstDate, istSecondDate, futureDate, eventDate)
  
  //converting time zone for US
  function convertISPtoPT(istFirstDate: string) {
    const ist = DateTime.fromISO(istFirstDate, { zone: 'Asia/Kolkata' });
    const pt = ist.setZone('America/Los_Angeles');
    return pt.toISO();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function formatToHumanReadable(dateTime: any) {
    return dateTime.toLocaleString(DateTime.DATETIME_FULL);
  }

  const ptDateTime = convertISPtoPT(istFirstDate);
  const humanReadablePT = formatToHumanReadable(ptDateTime);

  const ptDateTime1 = convertISPtoPT(istSecondDate);
  const humanReadablePT2 = formatToHumanReadable(ptDateTime1);

  function formatDate(date: string | number | Date) {
    return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }
   
  function formatTime(time: string | number | Date) {
    return new Date(time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  }
   
  function formatDateTimeRange(start: string | number | Date, end: string | number | Date) {
    const formattedStartDate = formatDate(start);
    const formattedStartTime = formatTime(start);
    
    //const formattedEndDate = formatDate(end);
    const formattedEndTime = formatTime(end);
    
    const formattedRange = `${formattedStartDate} ${formattedStartTime} - ${formattedEndTime}`;
    return formattedRange;
  }

  //converting date to human readable format
  const formattedDateRange = formatDateTimeRange(humanReadablePT, humanReadablePT2);
  
  const price = () => (
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Price{' '}
        <span>
          {eventId === '2' || eventId === '1' ? (
            <CurrencyRupeeSharp className={styles.currencyIcon} />
          ) : (
            <AttachMoneyIcon className={styles.currencyIcon} />
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
        {eventId === '4' ? <span>{formattedDateRange}</span> :
        <span>
          {eventId != '1' && eventId != '2'
            ? 'Mon Aug 14 7:00 PM - 8:00 PM'
            : (diffDays > 1 ? futureDate : date) + ' ' + time}
        </span>
        }
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

  const playersRequired = () => (
    openWaitList > 0 ?
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Open {openSpots == 0 ? 'Waitlist' : 'Spots'}{' '}
        <span>{openSpots == 0 ? openWaitList : openSpots}</span>
      </Typography>
    </Grid>
    : null
  );

  const joinNow = () =>
    isPortrait ? (
      <Grid item xs={4} sm={4} md={4}>
        <FlexBox className={styles.joinNow}>
          <JoinNow
            stripePaymentUrl={stripePaymentUrl}
            charges={0}
            date={''}
            eventId={''}
            reservedPlayersCount={reservedPlayersCount}
            reservedPlayersList={reservedPlayersList}
            time={''}
            venueLocationLink={''}
            venueName={venueName}
            waitListPlayers={waitListPlayers}
            waitListPlayersCount={waitListPlayersCount}
          />
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
