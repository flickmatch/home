import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';

import Loading from '@/components/Loading';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { AddPlayer } from '../matchQueues/AddPlayer';
import { VenueName } from '../matchQueues/VenueName';
import { Cities } from '../matchQueues/eventsComponents/Cities';
import { EventsCard } from '../matchQueues/eventsComponents/Events';
import { JoinNow } from '../matchQueues/eventsComponents/JoinNow';
import { PlayerDetails } from '../matchQueues/eventsComponents/Players';
import mapCityData from '../matchQueues/map';
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
          venuePinCode
          charges
          date
          time
          venueName
          reservedPlayersCount
          waitListPlayersCount
          stripePaymentUrl
          credits
          reservedPlayersList {
            displayName
            teamColor
          }
          waitListPlayers{
              displayName
              teamColor
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
};

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); //
  const isPortrait = useOrientation(); //
  const location = useLocation(); //
  const highLighted = false; //
  const userState = useSelector((state: RootState) => state); //

  const [event, setEvent] = useState<Event | null>(null); //
  const [loading, setLoading] = useState<boolean>(true); //
  const [error, setError] = useState<string | null>(null); //
  const [cityNameId, setCityNameId] = useState('');

  const [open, setOpen] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);

  const addPlayerInQueue = (name: string) => {
    setPlayers((prevData) => [...prevData, name]);
    handleOpen();
  };

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

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

        setCityNameId(id.substring(0, 1));
        setEvent(eventData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, players]);

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
    let cityId = '99999';
    cityId = parts.length > 0 ? parts[0] : '3';
    return cityId;
  }

  function cityName(event: Event | null) {
    const cityIdd = cityId(event);
    const cityData = mapCityData.find((city) => city.cityId.toString() === cityIdd);

    // Return the city name if found, otherwise return undefined
    return cityData?.city;
  }

  const renderPlayer = (player: PlayerDetail | null | undefined, i: number) => (
    <PlayerDetails
      displayName={player ? player.displayName : 'Add Name'}
      index={i}
      key={i}
      points={player?.points}
      teamDivision={false}
    />
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
      <Zoom in={true} key={event.uniqueEventId} style={{ transitionDelay: '300ms' }}>
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
                    cityId={cityNameId}
                    credits={event?.credits}
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
                cityId={cityNameId}
                credits={event?.credits}
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
                {userState.login.isAdmin && userState.login.isLoggedIn ? (
                  <BorderColorIcon className={styles.editIcon} onClick={handleOpen} />
                ) : null}
              </Box>

              {userState.login.isAdmin && userState.login.isLoggedIn ? (
                <AddPlayer
                  isOpen={open}
                  onToggle={handleOpen}
                  uniqueEventId={event.uniqueEventId}
                  cityId={cityNameId}
                  handlePassName={addPlayerInQueue}
                />
              ) : null}
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
      </Zoom>
    </>
  );

  return (
    <div className={isPortrait ? styles.portraitParent : styles.parent}>{EventsMapFunc()}</div>
  );
};

export default EventPage;
