import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { AddPlayer } from './AddPlayer';
import styles from './Queue.module.scss';
import { VenueName } from './VenueName';
import { EventsCard } from './eventsComponents/Events';
import { JoinNow } from './eventsComponents/JoinNow';
import { PlayerDetails } from './eventsComponents/Players';
import type { EventDetails, ReservedPlayerDetails } from './types/Events.types';

interface event {
  gameEvent: EventDetails[];
  cityName: string;
  cityNameId: string;
  addPlayerInQueue: (name: string) => void;
}

export const GamesList: FC<event> = ({ gameEvent, cityName, cityNameId, addPlayerInQueue }) => {
  const isPortrait = useOrientation();
  //const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [highLighted, setHighlighted] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const accordionButton = element.querySelector('[aria-expanded]');
      if (accordionButton) {
        (accordionButton as HTMLElement).click();
      }

      setHighlighted(true);
      setTimeout(() => {
        setHighlighted(false);
      }, 2000);
    }
  };

  const userState = useSelector((state: RootState) => state);

  const handleOpen = (eventId: string) => {
    history.replaceState(null, '', `#${eventId}`);
    setSelectedEventId(eventId);
    setOpen((prevState) => !prevState);
  };

  const handleToggle = () => {
    if (selectedEventId) {
      handleOpen(selectedEventId);
    }
  };

  const passName = (name: string) => {
    addPlayerInQueue(name);
  };

  useEffect(() => {
    // Passing current hash value to target particular accordion
    const hashValue = window.location.hash.substring(1);
    if (hashValue) {
      handleClick(hashValue);
    }
  }, []);

  const renderPlayer = (player: ReservedPlayerDetails | null, i: number, dummyData: boolean) => (
    <PlayerDetails
      displayName={player ? player.displayName : 'Add Name'}
      index={i}
      key={i}
      points={player?.points}
      mobilePoints={player?.mobilePoints}
      dummyData={dummyData}
    />
  );

  const teamA = (teamAColor: string) => (
    <Box className={styles.teamDivision}>
      <span className={styles.colorTeamA} style={{ background: teamAColor }} />
      {teamAColor ? teamAColor : 'White'} (Team A)
    </Box>
  );

  const teamB = (teamBColor: string) => (
    <Box className={styles.teamDivisionSecond}>
      <span className={styles.colorTeamB} style={{ background: teamBColor }} />
      {teamBColor ? teamBColor : 'Blue'} (Team B)
    </Box>
  );

  const EventsMapFunc = () =>
    gameEvent.map((playingEvent) => {
      if (playingEvent?.testGame && !userState.login.isAdmin) return null;
      return (
        <Accordion
          className={isPortrait ? styles.mobileAccordion : styles.accordion}
          key={playingEvent.uniqueEventId}
          id={playingEvent.uniqueEventId}
          sx={{
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FlexBox className={styles.flexbox}>
              <FlexBox className={styles.venue}>
                <VenueName
                  venueName={playingEvent.venueName}
                  date={playingEvent.date}
                  dummyData={playingEvent.dummyData ? playingEvent.dummyData : false}
                />
                {isPortrait ? null : (
                  <JoinNow
                    stripePaymentUrl={playingEvent.stripePaymentUrl}
                    charges={0}
                    date={''}
                    uniqueEventId={playingEvent.uniqueEventId}
                    eventId={playingEvent.eventId}
                    reservedPlayersCount={playingEvent.reservedPlayersCount}
                    reservedPlayersList={playingEvent.reservedPlayersList}
                    time={''}
                    venueLocationLink={''}
                    venueName={playingEvent.venueName}
                    waitListPlayers={playingEvent.waitListPlayers}
                    waitListPlayersCount={playingEvent.waitListPlayersCount}
                    team_division={false}
                    team1_color={playingEvent.team1_color ? playingEvent.team1_color : ''}
                    team2_color={playingEvent.team2_color ? playingEvent.team2_color : ''}
                    dummyData={playingEvent.dummyData ? playingEvent.dummyData : false}
                    handlePassName={passName}
                    cityId={cityNameId}
                    credits={playingEvent.credits ? playingEvent.credits : 0}
                  />
                )}
              </FlexBox>

              {/*Event Details*/}
              <EventsCard
                uniqueEventId={playingEvent.uniqueEventId}
                charges={playingEvent.charges}
                date={playingEvent.date}
                time={playingEvent.time}
                venueLocationLink={playingEvent.venueLocationLink}
                reservedPlayersCount={playingEvent.reservedPlayersCount}
                waitListPlayersCount={playingEvent.waitListPlayersCount}
                eventId={cityName}
                cityId={cityNameId}
                reservedPlayersList={playingEvent.reservedPlayersList}
                venueName={playingEvent.venueName}
                waitListPlayers={playingEvent.waitListPlayers}
                stripePaymentUrl={playingEvent.stripePaymentUrl}
                team_division={false}
                team1_color={playingEvent.team1_color ? playingEvent.team1_color : ''}
                team2_color={playingEvent.team2_color ? playingEvent.team2_color : ''}
                dummyData={playingEvent.dummyData ? playingEvent.dummyData : false}
                handlePassName={passName}
                credits={playingEvent.credits ? playingEvent.credits : 0}
              />
            </FlexBox>
          </AccordionSummary>

          {/*Players Details*/}
          <AccordionDetails
            className={
              highLighted && window.location.hash.substring(1) === playingEvent.uniqueEventId
                ? styles.blink
                : styles.accordionDetailsContainer
            }
          >
            <Box className={styles.box} sx={{ flexGrow: 1 }}>
              <Box className={styles.reservedPlayersContainer}>
                <Typography className={styles.reservedPlayers}>Reserved Players</Typography>
                {userState.login.isAdmin && userState.login.isLoggedIn ? (
                  <BorderColorIcon
                    className={styles.editIcon}
                    onClick={() => handleOpen(playingEvent.uniqueEventId)}
                  />
                ) : null}
              </Box>

              {userState.login.isAdmin &&
              userState.login.isLoggedIn &&
              selectedEventId === playingEvent.uniqueEventId ? (
                <AddPlayer
                  isOpen={open}
                  onToggle={handleToggle}
                  uniqueEventId={selectedEventId}
                  cityId={cityNameId}
                  handlePassName={passName}
                />
              ) : null}

              {playingEvent.team_division ? (
                <Box>
                  {teamA(playingEvent.team1_color)}
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: playingEvent.reservedPlayersCount / 2 }, (_, i) => {
                      const player =
                        i < playingEvent.reservedPlayersList.length
                          ? playingEvent.reservedPlayersList[i]
                          : null;
                      return renderPlayer(player, i, playingEvent.dummyData);
                    })}
                  </Grid>

                  <Typography className={styles.versus}>v/s</Typography>
                  {teamB(playingEvent.team2_color)}

                  <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: playingEvent.reservedPlayersCount / 2 }, (_, i) => {
                      const player =
                        i < playingEvent.reservedPlayersList.length
                          ? playingEvent.reservedPlayersList[
                              i + playingEvent.reservedPlayersCount / 2
                            ]
                          : null;
                      return renderPlayer(
                        player,
                        i + playingEvent.reservedPlayersCount / 2,
                        playingEvent.dummyData,
                      );
                    })}
                  </Grid>
                </Box>
              ) : (
                <>
                  {userState.login.isAdmin && playingEvent.dummyData ? (
                    // <Box
                    //   className={
                    //     isPortrait
                    //       ? styles.portraitPlayersNameComponent
                    //       : styles.playersNameComponent
                    //   }
                    // >
                    //   <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    //     {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                    //       const player =
                    //         i < playingEvent.reservedPlayersList.length
                    //           ? playingEvent.reservedPlayersList[i]
                    //           : null;
                    //       return renderPlayer(player, i);
                    //     })}
                    //   </Grid>
                    // </Box>
                    <Box style={{ width: 100 }}>
                      {/* <Box style={{ display: isPortrait ? 'none' : 'flex' }}>
                        {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                          const player =
                            i < playingEvent.reservedPlayersList.length
                              ? playingEvent.reservedPlayersList[i]
                              : null;
                          return renderPlayer(player, i, playingEvent.dummyData);
                        })}
                      </Box> */}
                    </Box>
                  ) : (
                    <Box>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                          const player =
                            i < playingEvent.reservedPlayersList.length
                              ? playingEvent.reservedPlayersList[i]
                              : null;
                          return renderPlayer(player, i, playingEvent.dummyData);
                        })}
                      </Grid>
                    </Box>
                  )}
                  {userState.login.isAdmin && playingEvent.dummyData ? (
                    <Box
                      className={
                        isPortrait
                          ? styles.portraitGroundImageContainer
                          : styles.groundImageContainer
                      }
                    >
                      <Box
                        style={{
                          display: 'none',
                          position: 'absolute',
                          zIndex: 9999,
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                          const player =
                            i < playingEvent.reservedPlayersList.length
                              ? playingEvent.reservedPlayersList[i]
                              : null;
                          return renderPlayer(player, i, playingEvent.dummyData);
                        })}
                      </Box>
                      <img
                        src={isPortrait ? 'ground-portrait.jpeg' : '/ground-3d-cropped.jpeg'}
                        alt="ground"
                        height={750}
                        width={1200}
                        className={isPortrait ? styles.portraitGroundImage : styles.groundImage}
                      />
                    </Box>
                  ) : null}
                </>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    });

  return <>{EventsMapFunc()}</>;
};
