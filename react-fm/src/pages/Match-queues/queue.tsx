import { useEffect, useState } from 'react';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import { Cities } from './Events-components/cities';
import { query, avatars } from './constants';
import styles from './queue.module.scss';
import charminar from '/hyderabad-charminar.png';

function MatchQueue() {
  const [citiesData, setCitiesData] = useState([]);
  const isPortrait = useOrientation();

  interface cityDetails {
    cityId: string;
    cityName: string;
    events: any;
  }

  interface eventsDetails {
    charges: number;
    date: string;
    displayId: string;
    reservedPlayersCount: number;
    reservedPlayersList: any;
    time: string;
    venueLocationLink: string;
    venueName: string;
    waitListPlayers: any;
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
        const apiUrl =
          'http://ec2-3-110-121-129.ap-south-1.compute.amazonaws.com:8080/platform-0.0.1-SNAPSHOT/graphql';
        const response = await fetch(apiUrl, {
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
        ? citiesData.map((city: cityDetails, i) => {
            return (
              <div
                className={isPortrait ? styles.mobile_container : styles.container}
                key={city.cityId}
              >
                <Cities cityName={city.cityName} cityId={city.cityId} />

                {city.events.map((playingEvent: eventsDetails, j) => {
                  return (
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
                          <FlexBox className={styles.area}>
                            <Typography
                              className={isPortrait ? styles.mobileAreaName : styles.areaName}
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
                          <FlexBox className={styles.eventSchedule} sx={{ flexGrow: 1 }}>
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                              className={isPortrait ? styles.mobileEventSection1 : styles.eventSection1}
                            >
                              <Grid item xs={4} sm={6} md={4}>
                                <Typography className={styles.title}>
                                  Price
                                  <span>
                                    <CurrencyRupeeSharp className={styles.currencyIcon} />
                                    {playingEvent.charges}
                                  </span>
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sm={6} md={4}>
                                <Typography className={styles.title}>
                                  Date
                                  <span>
                                    {playingEvent.date} {playingEvent.time}
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
                              className={isPortrait ? styles.mobileEventSection2 : styles.eventSection2}
                            >
                              <Grid item xs={4} sm={4} md={4}>
                                <Typography className={styles.title}>
                                  Google Map{' '}
                                  <a href={playingEvent.venueLocationLink} target="_blank">
                                    <LocationOnIcon className={styles.locationIcon} />
                                  </a>
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sm={4} md={4}>
                                <Typography className={styles.title}>
                                  Number of Players <span>{playingEvent.reservedPlayersCount}</span>
                                </Typography>
                              </Grid>
                              {playingEvent.waitListPlayersCount > 0 ? null : (
                                <Grid item xs={4} sm={4} md={4}>
                                  <Typography className={styles.title}>
                                    Players Required <span>{14 - playingEvent.reservedPlayersCount}</span>
                                  </Typography>
                                </Grid>
                              )}
                              {isPortrait ? (
                                <Grid item xs={4} sm={4} md={4}>
                                  <FlexBox className={styles.area}>
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
                        </FlexBox>
                      </AccordionSummary>

                      {/*Players Details*/}
                      <AccordionDetails>
                        <Box className={styles.box} sx={{ flexGrow: 1 }}>
                          <Typography className={styles.reserved}>Reserved Players</Typography>
                          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {playingEvent.reservedPlayersList.map(
                              (player: reservedPlayerDetails, y) => {
                                return (
                                  <Grid
                                    item
                                    xs={2}
                                    sm={6}
                                    md={4}
                                    className={styles.grid}
                                    key={player.displayName}
                                  >
                                    <Avatar className={styles.avatar} alt="profile" src={avatars[y]} />
                                    <Typography className={styles.playerNames}>
                                      {player.displayName}
                                    </Typography>
                                  </Grid>
                                );
                              },
                            )}
                          </Grid>
                        </Box>
                        {playingEvent.waitListPlayersCount > 0 ? (
                          <Box className={styles.box} sx={{ flexGrow: 1 }}>
                            <Typography className={styles.unReserved}>
                              Un Reserved Players
                            </Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {playingEvent.waitListPlayers.map(
                                (player: unReservedPlayerDetails, y) => {
                                  return (
                                    <Grid
                                      item
                                      xs={2}
                                      sm={6}
                                      md={4}
                                      lg={3}
                                      className={styles.grid}
                                      key={player.displayName}
                                    >
                                      <Avatar className={styles.avatar} alt="profile" src={avatars[y]} />
                                      <Typography className={styles.playerNames}>
                                        {player.displayName}
                                      </Typography>
                                    </Grid>
                                  );
                                },
                              )}
                            </Grid>
                          </Box>
                        ) : null}
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            );
          })
        : null}
        {citiesData.length > 0 ?
          <footer className={styles.footer}>&#169; Flickmatch 2023</footer>
      : null}
    </>
  );
}

export default MatchQueue;
