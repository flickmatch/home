import { type FC, useEffect } from 'react';
import { useState } from 'react';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import copy from 'copy-text-to-clipboard';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';

import { flickMatchLink, gurugramGroupLink, hyderabadGroupLink } from '../constants';
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { JoinNow } from './JoinNow';

export const EventsCard: FC<EventDetails> = ({
  charges,
  date,
  time,
  uniqueEventId,
  eventId,
  cityId,
  venueName,
  venueLocationLink,
  reservedPlayersCount,
  reservedPlayersList,
  waitListPlayers,
  waitListPlayersCount,
  stripePaymentUrl,
  dummyData,
  handlePassName,
  credits,
  team_division,
  team1_color,
  team2_color,
}) => {
  const isPortrait = useOrientation();
  const [, notificationsActions] = useNotifications();
  const [currencyCode, setCurrencyCode] = useState('INR');

  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;
  const currentUrl = window.location.origin;
  const fullEventLink = `${currentUrl}/event/${uniqueEventId}`;
  // console.log(team1_color, team2_color, team_division);

  let whatsappGroupLink: string | undefined;
  switch (eventId) {
    case 'Hyderabad':
      whatsappGroupLink = hyderabadGroupLink;
      break;
    case 'Gurgaon':
      whatsappGroupLink = gurugramGroupLink;
      break;
    default:
      whatsappGroupLink = flickMatchLink;
  }

  //getting next day date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateToString = tomorrow.toString();
  const index = dateToString.indexOf('2024');
  const futureDate = dateToString.substring(0, index);
  const startTime = time.split('-')[0]; //8:00PM
  const endTime = time.split('-')[1].split(' ')[0];
  const usTime = (dummyData ? futureDate : date) + ' ' + startTime + ' - ' + endTime;

  time = time.split('GMT')[0].trim();

  useEffect(() => {
    currencyFromCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currencyFromCity = async () => {
    const response = await fetch('https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query City($id: ID!) {
            city(cityId: $id) {
              cityId
              cityName
              localTimeZone
              countryCode
              iconUrl
            }
          }
        `,
        variables: {
          id: String(cityId), // Passing `cityId` as a parameter
        },
      }),
    });

    const data = await response.json();
    setCurrencyCode(data.data.city.countryCode);
  };

  const currency = () => {
    let currencyIcon;
    if (currencyCode === 'INR') {
      currencyIcon = <CurrencyRupeeSharp className={styles.currencyIcon} />;
    } else {
      currencyIcon = <AttachMoneyIcon className={styles.currencyIcon} />;
    }

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
    <Grid item xs={4} sm={4} md={3}>
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

    if (currencyCode === 'INR') {
      timeZone = (
        <span>
          {dummyData ? futureDate : date} {'    '} {time}
        </span>
      );
    } else {
      timeZone = <span>{usTime}</span>;
    }

    return timeZone;
  };

  const dateTime = () => (
    <Grid item xs={4} sm={6} md={4}>
      <Typography className={styles.title}>
        Date{''}
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

  function showSuccessNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="success">
            <AlertTitle className={styles.alertTitle}>Game link copied</AlertTitle>
            Send the game link and bring your friends into the game.
          </Alert>
        ),
      },
    });
  }

  const copyLink = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    copy(fullEventLink);
    showSuccessNotification();
  };

  const gameLink = () => (
    <Grid item xs={4} sm={4} md={6}>
      <Typography className={styles.title} onClick={copyLink}>
        {/* Game Link <span className={styles.gameLink}>{fullEventLink}</span> */}
        Game Invite{' '}
        {/* <Chip label="Copy" color="primary" variant="outlined" className={styles.copyTag} /> */}
        <Button
          variant="contained"
          endIcon={<ShareIcon className={styles.shareIcon} />}
          className={styles.shareButton}
        >
          Share
        </Button>
      </Typography>
    </Grid>
  );

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
            team_division={team_division}
            team1_color={team1_color}
            team2_color={team2_color}
            dummyData={dummyData}
            handlePassName={handlePassName}
            cityId={cityId}
            credits={credits}
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
          {whatsappGroup()}
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

          {gameLink()}
        </Grid>

        {joinNow()}
      </FlexBox>
    </>
  );
};
