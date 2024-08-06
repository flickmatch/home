/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-useless-catch */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-useless-catch */
// // /**
// //  * The function `EventPage` in the provided TypeScript React code fetches event details from a GraphQL
// //  * API based on a unique event ID and displays the event information on the page.
// //  * @param {string} uniqueEventId - The `uniqueEventId` parameter is used to uniquely identify an event.
// //  * In the provided code snippet, it is a string parameter passed to the `getEventById` function to
// //  * fetch event details from a GraphQL API. The `uniqueEventId` is used in the GraphQL query to retrieve
// //  * specific event
// //  * @returns The EventPage component is being returned. Inside the component, there is logic to fetch
// //  * event details from a GraphQL API using the getEventById function. The component handles loading,
// //  * error, and no event scenarios. Currently, it displays a simple message "event found" when an event
// //  * is successfully fetched.
// //  */
// // /* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from '../matchQueues/Queue.module.scss';
import { EventsCard } from '../matchQueues/eventsComponents/Events';
import { JoinNow } from '../matchQueues/eventsComponents/JoinNow';
import { PlayerDetails } from '../matchQueues/eventsComponents/Players';
import type { PlayerDetail } from './EventPage.types';
import type { Event } from './EventPage.types';
import { apiUrl, query } from './constants';

const getEventById = async (uniqueEventId: string): Promise<Event | null> => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query,
    });

    const result = await response.json();
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
  const [highLighted, setHighlighted] = useState(false);
  const [open, setOpen] = useState(true);
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

  function cityName(event: Event | null) {
    const dateString = event?.eventId || '';
    const parts = dateString != '' ? dateString.split('-') : '';
    const cityId = parts.length > 0 ? parts[parts.length - 1] : '3';

    let cityName;
    if (cityId === '1') {
      cityName = 'Hyderabad';
    } else if (cityId === '2') {
      cityName = 'Gurgaon';
    } else {
      cityName = '';
    }
    return cityName;
  }

  const renderPlayer = (player: PlayerDetail | null | undefined, i: number) => (
    <PlayerDetails displayName={player ? player.displayName : '(Empty)'} index={i} key={i} />
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }
  const EventsMapFunc = () => (
    <Accordion
      className={isPortrait ? styles.mobileAccordion : styles.accordion}
      sx={{
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <FlexBox className={styles.flexbox}>
          <FlexBox className={styles.venue}>
            <Typography className={isPortrait ? styles.mobileVenueName : styles.venueName}>
              <SportsSoccerIcon className={styles.sportsIcon} />
              {event?.venueName}
            </Typography>
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
          highLighted && location.hash.substring(1) === event?.index.toString() ? styles.blink : ''
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
      </AccordionDetails>
    </Accordion>
  );

  return <>{EventsMapFunc()}</>;
};

export default EventPage;
