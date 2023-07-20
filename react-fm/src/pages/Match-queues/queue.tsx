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

import styles from './queue.module.scss';
import delhiIcon from '/gate-of-india.png';
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
          body: JSON.stringify({
            query: `query {
              cities {
                cityId
                cityName
                events {
                  displayId
                  date
                  time
                  venueName
                  reservedPlayersCount
                  waitListPlayersCount
                  venueLocationLink
                  charges
                  reservedPlayersList {
                    displayName
                  }
                  waitListPlayers {
                    displayName
                  }
                }
              }
            }`,
          }),
        });

        const data = await response.json();
        setCitiesData(data.data.cities);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally fetched');
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
                <Typography className={styles.citiesName} key={city.cityId}>
                  {city.cityName} <img src={delhiIcon} alt="" />
                </Typography>
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
                          <FlexBox className={styles.eventDetails} sx={{ flexGrow: 1 }}>
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                              className={
                                isPortrait ? styles.mobileQueueDetails1 : styles.queueDetails1
                              }
                            >
                              <Grid item xs={4} sm={4} md={4}>
                                <Typography className={styles.title}>
                                  Price{' '}
                                  <span>
                                    <CurrencyRupeeSharp className={styles.currencyIcon} />
                                    {playingEvent.charges}
                                  </span>
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sm={6} md={4}>
                                <Typography className={styles.title}>
                                  Date{' '}
                                  <span>
                                    {playingEvent.date} {playingEvent.time}
                                  </span>
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlexBox>
                          <FlexBox
                            className={isPortrait ? styles.mobileEventDetails : styles.eventDetails}
                            sx={{ flexGrow: 1 }}
                          >
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                              className={
                                isPortrait ? styles.mobileQueueDetails2 : styles.queueDetails2
                              }
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
                                    Players Required{' '}
                                    <span>{14 - playingEvent.reservedPlayersCount}</span>
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
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
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
                                    <Avatar
                                      className={styles.avatar}
                                      alt="profile"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s"
                                    />
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
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
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
                                      <Avatar
                                        className={styles.avatar}
                                        alt="profile"
                                        src="https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg"
                                      />
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
      <footer className={styles.footer}>&#169; Flickmatch 2023</footer>
    </>
  );
}

export default MatchQueue;
