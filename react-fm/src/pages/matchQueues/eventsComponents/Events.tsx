import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import { gurugramGroupLink, hyderabadGroupLink } from '../constants';
import mapCityData from '../map';
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { JoinNow } from './JoinNow';

export const EventsCard: FC<EventDetails> = ({
  charges,
  date,
  time,
  uniqueEventId,
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
  const whatsappGroupLink = eventId === 'Hyderabad' ? hyderabadGroupLink : gurugramGroupLink;

  //getting next day date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateToString = tomorrow.toString();
  const index = dateToString.indexOf('2024');
  const futureDate = dateToString.substring(0, index);

  const dateFormat = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  // Parse the date strings into Date objects
  const date1 = new Date(date);
  const date2 = new Date(dateFormat);

  // Calculate the difference in milliseconds
  const timeDifferenceMs = date2.getTime() - date1.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

  const checkValue = Math.sign(daysDifference);

  const eventDate = checkValue <= 0 ? date : futureDate;

  const startTime = time.split('-')[0]; //8:00PM
  const endTime = time.split('-')[1].split(' ')[0];
  const usTime = eventDate + ' ' + startTime + ' - ' + endTime;

  time = time.split('GMT')[0].trim();

  const currency = () => {
    let currencyIcon;
    mapCityData.forEach((cityData) => {
      if (cityData.city === eventId && cityData.currency === 'INR') {
        currencyIcon = <CurrencyRupeeSharp className={styles.currencyIcon} />;
      } else if (cityData.city === eventId && cityData.currency === 'USD') {
        currencyIcon = <AttachMoneyIcon className={styles.currencyIcon} />;
      }
    });
    return currencyIcon;
  };

  const price = () => (
    <Grid item xs={4} sm={4} md={3}>
      <Typography className={styles.title}>
        Price{' '}
        <span>
          {currency()}
          {charges}
        </span>
      </Typography>
    </Grid>
  );

  const whatsappGroup = () => (
    <Grid item xs={4} sm={4} md={4}>
      <Typography className={styles.title}>
        Game Group{' '}
        <a href={whatsappGroupLink} target="_blank" rel="noreferrer">
          <WhatsAppIcon className={styles.whatsappGroupIcon} />
        </a>
      </Typography>
    </Grid>
  );

  const timeFrame = () => {
    let timeZone;
    mapCityData.forEach((cityData) => {
      if (cityData.city === eventId && cityData.currency === 'INR') {
        timeZone = (
          <span>
            {eventDate} {time}
          </span>
        );
      } else if (cityData.city === eventId && cityData.currency === 'USD') {
        timeZone = <span>{usTime}</span>;
      }
    });
    return timeZone;
  };

  const dateTime = () => (
    <Grid item xs={4} sm={6} md={4}>
      <Typography className={styles.title}>
        Date{''}
        {/* {eventId === '2' || eventId === '1' ? (
          <span>
            {eventDate} {time}
          </span>
        ) : (
          <span>{usTime}</span>
        )} */}
        {timeFrame()}
      </Typography>
    </Grid>
  );

  const googleLocation = () => (
    <Grid item xs={4} sm={4} md={3}>
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
    openWaitList > 0 ? (
      <Grid item xs={4} sm={4} md={3}>
        <Typography className={styles.title}>
          Open {openSpots == 0 ? 'Waitlist' : 'Spots'}{' '}
          <span>{openSpots == 0 ? openWaitList : openSpots}</span>
        </Typography>
      </Grid>
    ) : null;

  const joinNow = () =>
    isPortrait ? (
      <Grid item xs={4} sm={4} md={4}>
        <FlexBox className={styles.joinNow}>
          <JoinNow
            stripePaymentUrl={stripePaymentUrl}
            charges={0}
            date={''}
            uniqueEventId={uniqueEventId}
            eventId={eventId}
            reservedPlayersCount={reservedPlayersCount}
            reservedPlayersList={reservedPlayersList}
            time={''}
            venueLocationLink={''}
            venueName={venueName}
            waitListPlayers={waitListPlayers}
            waitListPlayersCount={waitListPlayersCount}
            team_division={false}
            team1_color={''}
            team2_color={''}
          />
        </FlexBox>
      </Grid>
    ) : null;

  return (
    <>
      <Link to={`#${uniqueEventId}`}>
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
            {whatsappGroup()}
          </Grid>
        </FlexBox>
      </Link>
      <FlexBox
        className={isPortrait ? styles.mobileEventSchedule : styles.eventSchedule}
        sx={{ flexGrow: 1 }}
      >
        <Link to={`#${uniqueEventId}`} className={styles.linkTag}>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              className={isPortrait ? styles.mobileEventPlayersDetail : styles.eventPlayersDetail}
            >
              {googleLocation()}
              {numberOfPlayers()}
              {playersRequired()}
            </Grid>
          </Box>
        </Link>
        {joinNow()}
      </FlexBox>
    </>
  );
};
