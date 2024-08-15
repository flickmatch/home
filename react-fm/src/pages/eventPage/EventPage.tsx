/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-useless-catch */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-useless-catch */
// // /* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import Loading from '@/components/Loading';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import { VenueName } from '../matchQueues/VenueName';
import { Cities } from '../matchQueues/eventsComponents/Cities';
import { EventsCard } from '../matchQueues/eventsComponents/Events';
import { JoinNow } from '../matchQueues/eventsComponents/JoinNow';
import { PlayerDetails } from '../matchQueues/eventsComponents/Players';
import NotFound from '../notFound';
import styles from './EventPage.module.scss';
import type { PlayerDetail } from './EventPage.types';
import type { Event } from './EventPage.types';
import { apiUrl } from './constants';

function validateUniqueEventId(id: string) {
  // Regular expression for the pattern: Digit-Date-Digit
  const regex = /^[0-9]-\d{4}-\d{2}-\d{2}-[0-9]$/;
  return regex.test(id);
}

const getEventById = async (uniqueEventId: string): Promise<Event | null> => {
  // Validate the uniqueEventId
  if (!validateUniqueEventId(uniqueEventId)) {
    throw new Error('Invalid uniqueEventId');
  }
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query event {
          event(uniqueEventId: "${uniqueEventId}") {
            currency
            startTime
            endTime
            eventId
            uniqueEventId
            displayTitle
            venueLocationLink
            charges
            date
            time
            venueName
            reservedPlayersCount
            waitListPlayersCount
            stripePaymentUrl
            reservedPlayersList {
              displayName
            }
            waitListPlayers{
                displayName
            }
          }
        }
      `,
      }),
    });

    const result = await response.json();

    // console.log(result);
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
    return result.data.event;
  } catch (error) {
    throw error;
  }
};

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isPortrait = useOrientation();
  const location = useLocation();
  const highLighted = false;
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Event ID is missing.');
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        setLoading(true);
        const eventData = await getEventById(id);
        setEvent(eventData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  useEffect(() => {
    const adminMailId = localStorage.getItem('adminIds');
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parseUserData = JSON.parse(storedData);

      if (adminMailId) {
        const parseAdminData = JSON.parse(adminMailId);
        const check = parseAdminData.data
          .map((mailId: { EmailId: string }) => mailId.EmailId)
          .includes(parseUserData.email);

        setIsAdminMode(check);
      }
    }
  }, []);
  function evetnIdtoString(event: Event | null) {
    const eventId =
      event?.eventId !== undefined && event?.eventId !== null ? String(event.eventId) : 'undefined';
    return eventId;
  }
  function reservedPlayersCount(event: Event | null) {
    const reservedPlayersCount = event?.reservedPlayersCount || 0;
    return reservedPlayersCount;
  }
  const expanded = true;

  function cityId(event: Event | null) {
    const dateString = event?.uniqueEventId || '';
    const parts = dateString != '' ? dateString.split('-') : '';
    const cityId = parts.length > 0 ? parts[0] : '3';
    return cityId;
  }

  function cityName(event: Event | null) {
    const cityIdd = cityId(event);
    let cityName;
    if (cityIdd === '1') {
      cityName = 'Gurgaon';
    } else if (cityIdd === '2') {
      cityName = 'Hyderabad';
    } else if (cityIdd === '6') {
      cityName = 'Kolkata';
    } else if (cityIdd == '7') {
      cityName = 'Noida';
    }
    return cityName;
  }

  const renderPlayer = (player: PlayerDetail | null | undefined, i: number) => (
    <PlayerDetails displayName={player ? player.displayName : '(Empty)'} index={i} key={i} />
  );

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return (
      <div className={isPortrait ? styles.portraitContainer : styles.parentContainer}>
        <div className={styles.parent}>
          <NotFound />
        </div>
      </div>
    );
  }
  const EventsMapFunc = () => (
    <>
      <Typography className={styles.title}>Flickmatch Soccer</Typography>
      <Cities
        cityId={cityId(event)}
        cityName={cityName(event) || ''}
        countryCode="IN"
        dummyData={false}
        events={[]}
      />
      <Accordion
        className={isPortrait ? styles.mobileAccordion : styles.accordion}
        sx={{
          '&:before': {
            display: 'none',
          },
        }}
        expanded={expanded}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <FlexBox className={styles.flexbox}>
            <FlexBox className={styles.venue}>
              <VenueName venueName={event?.venueName} dummyData={false} date={event?.date} />

              {isPortrait ? null : (
                <JoinNow
                  stripePaymentUrl={event?.stripePaymentUrl || ''}
                  charges={event?.charges || 0}
                  date={event?.date || ''}
                  uniqueEventId={event?.uniqueEventId || ''}
                  eventId={evetnIdtoString(event)}
                  reservedPlayersCount={event?.reservedPlayersCount || 0}
                  reservedPlayersList={event?.reservedPlayersList || []}
                  time={event?.endTime || ''}
                  venueLocationLink={event?.venueLocationLink || ''}
                  venueName={event?.venueName || ''}
                  waitListPlayers={[]}
                  waitListPlayersCount={event?.waitListPlayersCount || 0}
                  team_division={false}
                  team1_color={''}
                  team2_color={''}
                  dummyData={false}
                  singleEvent={true}
                />
              )}
            </FlexBox>
            <EventsCard
              uniqueEventId={event?.uniqueEventId || ''}
              charges={event?.charges || 0}
              date={event?.date || ''}
              time={event?.time || ''}
              venueLocationLink={event?.venueLocationLink || ''}
              reservedPlayersCount={event?.reservedPlayersCount || 0}
              waitListPlayersCount={event?.waitListPlayersCount || 0}
              eventId={cityName(event) ?? ''}
              reservedPlayersList={event?.reservedPlayersList || []}
              venueName={event?.venueName || ''}
              waitListPlayers={[]}
              stripePaymentUrl={event?.stripePaymentUrl || ''}
              team_division={false}
              team1_color={''}
              team2_color={''}
              dummyData={false}
            />
          </FlexBox>
        </AccordionSummary>
        <AccordionDetails
          className={
            highLighted && location.hash.substring(1) === event?.index.toString()
              ? styles.blink
              : ''
          }
        >
          <Box className={styles.box} sx={{ flexGrow: 1 }}>
            <Box className={styles.reservedPlayersContainer}>
              <Typography className={styles.reservedPlayers}>Reserved Players</Typography>
              {isAdminMode ? <BorderColorIcon className={styles.editIcon} /> : null}
            </Box>
            <Box>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from({ length: event?.reservedPlayersCount || 0 }, (_, i) => {
                  const player =
                    i < reservedPlayersCount(event) || 0 ? event?.reservedPlayersList[i] : null;
                  return renderPlayer(player, i);
                })}
              </Grid>
            </Box>
          </Box>
          {event.waitListPlayersCount > 0 ? (
            <Box className={styles.box} sx={{ flexGrow: 1 }}>
              <Typography className={styles.waitListPlayers}>Waitlist</Typography>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from({ length: event?.waitListPlayersCount }, (_, index) => {
                  const player = event?.waitListPlayers[index] ?? null;
                  return renderPlayer(player, index);
                })}
              </Grid>
            </Box>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </>
  );

  return (
    <div className={isPortrait ? styles.portraitParent : styles.parent}>{EventsMapFunc()}</div>
  );
};

export default EventPage;
