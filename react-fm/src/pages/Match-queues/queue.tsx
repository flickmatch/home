import { useEffect, useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import { Cities } from './Events-components/cities';
import { EventsCard } from './Events-components/events';
import { PlayerDetails } from './Events-components/players';
import { apiUrl, query } from './constants';
import styles from './queue.module.scss';

function MatchQueue() {
  const [citiesData, setCitiesData] = useState([]);
  const isPortrait = useOrientation();

  interface cityDetails {
    cityId: string;
    cityName: string;
    events: unknown;
  }

  interface eventsDetails {
    charges: number;
    date: string;
    displayId: string;
    reservedPlayersCount: number;
    reservedPlayersList: unknown;
    time: string;
    venueLocationLink: string;
    venueName: string;
    waitListPlayers: unknown;
    waitListPlayersCount: number;
  }

  interface reservedPlayerDetails {
    displayName: string;
  }

  interface unReservedPlayerDetails {
    displayName: string;
  }

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
        setCitiesData(data.data.cities);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Meta title="Match Queues" />
      {citiesData.length > 0
        ? citiesData.map((city: cityDetails) => (
              <div
                className={isPortrait ? styles.mobile_container : styles.container}
                key={city.cityId}
              >
                <Cities cityName={city.cityName} cityId={city.cityId} />

                {city.events.map((playingEvent: eventsDetails) => (
                    <Accordion
                      className={isPortrait ? styles.mobileAccordion : styles.accordion}
                      key={playingEvent.displayId}
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
                              <Button variant="contained" onClick={() => alert('Joined')}>
                                Join Queue
                              </Button>
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
                          />
                        </FlexBox>
                      </AccordionSummary>

                      {/*Players Details*/}
                      <AccordionDetails>
                        <Box className={styles.box} sx={{ flexGrow: 1 }}>
                          <Typography className={styles.reserved}>Reserved Players</Typography>
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            {playingEvent.reservedPlayersList.map(
                              (player: reservedPlayerDetails, i:number) => (
                                  <PlayerDetails
                                    displayName={player.displayName}
                                    index={i}
                                    key={i}
                                  />
                                ),
                            )}
                          </Grid>
                        </Box>
                        {playingEvent.waitListPlayersCount > 0 ? (
                          <Box className={styles.box} sx={{ flexGrow: 1 }}>
                            <Typography className={styles.unReserved}>
                              Un Reserved Players
                            </Typography>
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              {playingEvent.waitListPlayers.map(
                                (player: unReservedPlayerDetails, i:number) => (
                                    <PlayerDetails
                                      displayName={player.displayName}
                                      index={i}
                                      key={i}
                                    />
                                  ),
                              )}
                            </Grid>
                          </Box>
                        ) : null}
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </div>
            ))
        : null}
      {citiesData.length > 0 ? (
        <footer className={styles.footer}>&#169; Flickmatch 2023</footer>
      ) : null}
    </>
  );
}

export default MatchQueue;
