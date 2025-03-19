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
import { Input } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import copy from 'copy-text-to-clipboard';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';

import { apiUrl, flickMatchLink, gurugramGroupLink, hyderabadGroupLink } from '../constants';
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { JoinNow } from './JoinNow';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/types';

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
  venuePinCode,
  team1Score,
  team2Score,
}) => {
  const isPortrait = useOrientation();
  const [, notificationsActions] = useNotifications();
  const [currencyCode, setCurrencyCode] = useState('INR');

  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;
  const currentUrl = window.location.origin;
  const fullEventLink = `${currentUrl}/event/${uniqueEventId}`;
  const [isPast, setIsPast] = useState(false);
  const userState = useSelector((state: RootState) => state);
  const [teamAGoals, setTeamAGoals] = useState(team1Score || 0);
  const [teamBGoals, setTeamBGoals] = useState(team2Score || 0);
  const [isEditable, setIsEditable] = useState(false);

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

  const getTimeDifference = (eventDateTime: string): boolean => {
    const currentYear = new Date().getFullYear(); 
    const [, month, day, ...timeParts] = eventDateTime.split(" ");
    const timeRange = timeParts.join(" ");
    const [, endTime] = timeRange.split(" - "); 
    const [endingTime, endPeriod] = endTime.split(/(?<=\d)(?=[APM])/i); 
    const eventDateTimeString = `${month} ${day}, ${currentYear} ${endingTime} ${endPeriod}`;
    const eventTime = new Date(eventDateTimeString); 
    const currentTime = new Date();
    return currentTime > eventTime
  }

  useEffect(() => {
    try {
      currencyFromCity();
      setIsPast(getTimeDifference(usTime));
    } catch (error) {
      setIsPast(false);
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usTime]);

  useEffect(() => {
    setTeamAGoals(team1Score || 0);
    setTeamBGoals(team2Score || 0);
  }, [team1Score, team2Score]);

  const currencyFromCity = async () => {
    const response = await fetch(apiUrl, {
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

  const updateEventScore = async () => {
    try {
      if (isEditable) {
        const userInput = {
          uniqueEventId: uniqueEventId,
          team1Score: Number(teamAGoals),
          team2Score: Number(teamBGoals),
        };
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              mutation UpdateEventScore($input: UpdateEventScoreInput!) {
                updateEventScore(input: $input) {
                  isSuccessful
                  errorMessage
                }
              }
            `,
            variables: {
              input: userInput
            }
        })
        });

        const result = await response.json();
        if (result.data?.updateEventScore?.isSuccessful) {
          showNotification('success', 'Success', 'Score updated successfully!');
          setTeamAGoals(Number(teamAGoals));
          setTeamBGoals(Number(teamBGoals));
        } else {
          showNotification('error', 'Error', result.data?.updateEventScore?.errorMessage || 'Failed to update score');
          resetScores(); 
        }
      }
      setIsEditable(!isEditable);
    } catch (error) {
      showNotification('error', 'Error', 'An unexpected error occurred. Please try again.');
      resetScores(); 
      setIsEditable(false);
    }
  };

  const showNotification = (severity: 'success' | 'error', title: string, message: string) => {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity={severity}>
            <AlertTitle>{title}</AlertTitle>
            {message}
          </Alert>
        ),
      },
    });
  };
  
  const resetScores = () => {
    setTeamAGoals(Number(team1Score));
    setTeamBGoals(Number(team2Score));
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
    !isPast ?
      <Grid item xs={4} sm={4} md={3}>
        <Typography className={styles.title}>
          Game Group{' '}
          <a href={whatsappGroupLink} target="_blank" rel="noreferrer">
            <WhatsAppIcon className={styles.whatsappGroupIcon} />
          </a>
        </Typography>
      </Grid>
    : null
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
    !isPast ? (
      <Grid item xs={4} sm={4} md={3}>
        <Typography className={styles.title}>
          Google Map{' '}
          <a href={venueLocationLink} target="_blank" rel="noreferrer">
            <LocationOnIcon className={styles.locationIcon} />
          </a>
        </Typography>
      </Grid>
    ) : null
  );

  const numberOfPlayers = () => (
    isPast ? (
      <Grid item xs={4} sm={4} md={3}>
        <Typography className={styles.title}>
          Number of Players <span>{reservedPlayersCount}</span>
        </Typography>
      </Grid>
    ) : (
      <Grid item xs={4} sm={4} md={4}>
        <Typography className={styles.title}>
          Number of Players <span>{reservedPlayersCount}</span>
        </Typography>
      </Grid>
    )
  );

  const playersRequired = () =>
    !isPast ? (
      openWaitList > 0 ? (
        <Grid item xs={4} sm={4} md={3}>
          <Typography className={styles.title}>
            Open {openSpots == 0 ? 'Waitlist' : 'Spots'}{' '}
            <span>{openSpots == 0 ? openWaitList : openSpots}</span>
          </Typography>
        </Grid>
      ) : null
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

  const isAdmin = userState.login.isAdmin;
  const score = () => (
    isPast ? (
      <Grid item xs={12} sm={4} md={12}>
        <Typography className={isPortrait ? styles.mobileScoreTitle : styles.scoreTitle}>
            <h4 className={isPortrait ? styles.mobileScore : styles.score}>SCORE</h4>

          <span>
            <span className={styles.teamLabel}>Team {team1_color}</span>
            {isEditable && isAdmin ? (
              <Input
                type="number"
                value={teamAGoals}
                onChange={(e) => setTeamAGoals(Number(e.target.value))}
                className={isPortrait ? styles.mobileScoreInput : styles.scoreInput}
              />
            ) : (
              <span className={isPortrait ? styles.mobileScoreDisplay : styles.scoreDisplay}>
                {teamAGoals}
              </span>
            )} 
            <span className={styles.scoreDisplay}> - </span> 
            {isEditable && isAdmin ? (
              <Input
                type="number"
                value={teamBGoals}
                onChange={(e) => setTeamBGoals(Number(e.target.value))}
                className={isPortrait ? styles.mobileScoreInput : styles.scoreInput}
              />
            ) : (
              <span className={isPortrait ? styles.mobileScoreDisplay : styles.scoreDisplay}>
                {teamBGoals}
              </span>
            )} 
            <span className={styles.teamLabel}>Team {team2_color}</span>
          </span>
          {isAdmin ? (
            isPortrait ? (
              <BorderColorIcon
                className={styles.editIcon}
                onClick={updateEventScore}
              />
            ) : (
              <Button
                variant="contained"
                onClick={updateEventScore}
                className={styles.editScoreButton}
              >
                {!isEditable ? "Edit" : "Save"}
              </Button>
            )
          ) : null}

        </Typography>
      </Grid>
    ) : null
  );

  const 
  
  gameLink = () => (
    <Grid item xs={4} sm={4} md={7}>
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
            venuePinCode={venuePinCode}
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
          {score()}
        </Grid>

        {joinNow()}
      </FlexBox>
    </>
  );
};
