import { useEffect, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Queue.module.scss';
import { apiUrl, emptyNames, query } from './constants';
import dummyData from './data';
import { Cities } from './eventsComponents/Cities';
import { EventsCard } from './eventsComponents/Events';
import { JoinNow } from './eventsComponents/JoinNow';
import { PlayerDetails } from './eventsComponents/Players';
import type {
  CityDetails,
  EventDetails,
  ReservedPlayerDetails,
  waitListPlayerDetails,
} from './types/Events.types';

function MatchQueue() {
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const isPortrait = useOrientation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const url = apiUrl;
        const response = await fetch(url, {
          method: 'POST',
          signal: signal,
          headers: {
            'Content-Type': 'application/json',
          },
          body: query,
        });

        const data = await response.json();

        data.data.cities.forEach((city: { events: unknown[] }, i: number) => {
          if (city.events.length > 0) {
            setCitiesData((prevData) => [...prevData, data.data.cities[i]]);
          } else {
            if(data.data.cities[i].cityId == dummyData.data.cities[i].cityId) {
              setCitiesData((prevData) => [...prevData, dummyData.data.cities[i]]);
            }
          }
        });
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            console.log(error.name)
          }
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const events = () =>
    citiesData.length > 0
      ? citiesData.reverse().map((city: CityDetails) => (
        <Zoom in={true} key={city.cityId} style={{ transitionDelay: '300ms' }}>
          <div className={isPortrait ? styles.mobileContainer : styles.container}>
            <Cities cityName={city.cityName} cityId={city.cityId} events={city.events} />
            {city.events.map((playingEvent: EventDetails) => (
              <Accordion
                className={isPortrait ? styles.mobileAccordion : styles.accordion}
                key={playingEvent.eventId}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <FlexBox className={styles.flexbox}>
                    <FlexBox className={styles.venue}>
                      <Typography
                        className={isPortrait ? styles.mobileVenueName : styles.venueName}
                      >
                        <SportsSoccerIcon className={styles.sportsIcon} />
                        {playingEvent.venueName}
                      </Typography>
                      {isPortrait ? null : (
                        <JoinNow
                          stripePaymentUrl={playingEvent.stripePaymentUrl}
                          charges={0}
                          date={''}
                          eventId={''}
                          reservedPlayersCount={playingEvent.reservedPlayersCount}
                          reservedPlayersList={playingEvent.reservedPlayersList}
                          time={''}
                          venueLocationLink={''}
                          venueName={playingEvent.venueName}
                          waitListPlayers={playingEvent.waitListPlayers}
                          waitListPlayersCount={playingEvent.waitListPlayersCount}
                        />
                      )}
                    </FlexBox>

                    {/*Event Details*/}
                    <EventsCard
                      charges={playingEvent.charges}
                      date={playingEvent.date}
                      time={playingEvent.time}
                      venueLocationLink={playingEvent.venueLocationLink}
                      reservedPlayersCount={playingEvent.reservedPlayersCount}
                      waitListPlayersCount={playingEvent.waitListPlayersCount}
                      eventId={city.cityId}
                      reservedPlayersList={playingEvent.reservedPlayersList}
                      venueName={playingEvent.venueName}
                      waitListPlayers={playingEvent.waitListPlayers}
                      stripePaymentUrl={playingEvent.stripePaymentUrl}
                    />
                  </FlexBox>
                </AccordionSummary>

                {/*Players Details*/}
                <AccordionDetails>
                  <Box className={styles.box} sx={{ flexGrow: 1 }}>
                    <Typography className={styles.reservedPlayers}>Reserved Players</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      {playingEvent.reservedPlayersList.map(
                        (player: ReservedPlayerDetails, i: number) => (
                          <PlayerDetails displayName={player.displayName} index={i} key={i} />
                        ),
                      )}

                      {emptyNames
                        .slice(
                          0,
                          playingEvent.reservedPlayersCount -
                            playingEvent.reservedPlayersList.length,
                        )
                        .map((name: string, i: number) => (
                          <PlayerDetails displayName={name} index={i} key={i} />
                        ))}

                    </Grid>
                  </Box>
                  {playingEvent.waitListPlayers.length > 0 ? (
                    <Box className={styles.box} sx={{ flexGrow: 1 }}>
                      <Typography className={styles.waitListPlayers}>Waitlist</Typography>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {playingEvent.waitListPlayers.map(
                          (player: waitListPlayerDetails, i: number) => (
                            <PlayerDetails displayName={player.displayName} index={i} key={i} />
                          ),
                        )}

                        {emptyNames
                          .slice(
                            0,
                            playingEvent.waitListPlayersCount - playingEvent.waitListPlayers.length,
                          )
                          .map((name: string, i: number) => (
                            <PlayerDetails displayName={name} index={i} key={i} />
                          ))}
                      </Grid>
                    </Box>
                  ) : null}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          </Zoom>
        ))
      : null;

  return (
    <>
      <Meta title="Match Queues" />
      <Typography className={styles.title}>Come Play With Us</Typography>
      {events()}
    </>
  );
}

export default MatchQueue;
