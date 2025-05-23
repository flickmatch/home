import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { AddPlayer } from './AddPlayer';
import styles from './Queue.module.scss';
import { VenueName } from './VenueName';
import { EventsCard } from './eventsComponents/Events';
import { JoinNow } from './eventsComponents/JoinNow';
import { PlayerDetails } from './eventsComponents/Players';
import { teamACoordinates5, teamBCoordinates5 } from './playerCoordinates5v5';
import { teamACoordinates6, teamBCoordinates6 } from './playerCoordinates6v6';
import { teamACoordinates7, teamBCoordinates7 } from './playerCoordinates7v7';
import { teamACoordinates8, teamBCoordinates8 } from './playerCoordinates8v8';
import { teamACoordinates9, teamBCoordinates9 } from './playerCoordinates9v9';
import { teamACoordinates10, teamBCoordinates10 } from './playerCoordinates10v10';
import { teamACoordinates11, teamBCoordinates11 } from './playerCoordinates11v11';
import type { EventDetails, ReservedPlayerDetails } from './types/Events.types';

interface event {
  gameEvent: EventDetails[];
  cityName: string;
  cityNameId: string;
  addPlayerInQueue: (name: string) => void;
  eventPage?: boolean;
}

export const GamesList: FC<event> = ({
  gameEvent,
  cityName,
  cityNameId,
  addPlayerInQueue,
  eventPage,
}) => {
  const isPortrait = useOrientation();

  const [open, setOpen] = useState(false);
  const [highLighted, setHighlighted] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleCaptureClick = async (eventId: string) => {
    const groundElement = document.querySelector<HTMLElement>('.ground-container-id' + eventId);
    // console.log(groundElement);
    if (!groundElement) return;

    const canvas = await html2canvas(groundElement);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, '(www.flickmatch.in).png', 'image/png');
  };

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
    // console.log(window.location);
    const hashValue = window.location.hash.substring(1);
    // console.log(hashValue);
    if (hashValue) {
      handleClick(hashValue);
    }
  }, []);

  const renderPlayer = (
    player: ReservedPlayerDetails | null,
    i: number,
    coordinates:
      | { mobilePoints?: { x: number; y: number }; id?: number; role?: string }
      | undefined,
    teamDivision: boolean,
  ) => (
    <PlayerDetails
      displayName={player ? player.displayName : 'Add Name'}
      index={i}
      id={player?.id}
      role={player?.role}
      teamColor={player?.teamColor}
      coordinates={coordinates}
      teamDivision={teamDivision}
      singleTeamView={false}
    />
  );

  const EventsMapFunc = () =>
    gameEvent.map((playingEvent) => {
      // const openSpots = playingEvent.reservedPlayersCount - playingEvent.reservedPlayersList.length;
      let fullTeamPlayers: ReservedPlayerDetails[] = [];
      let teamAPlayers: ReservedPlayerDetails[] = [];
      let teamBPlayers: ReservedPlayerDetails[] = [];
      const teamSize = playingEvent.reservedPlayersCount / 2;
      // Assign team coordinates based on team size
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const teamCoordinatesMap: Record<number, any[]> = {
        5: teamACoordinates5.concat(teamBCoordinates5),
        6: teamACoordinates6.concat(teamBCoordinates6),
        7: teamACoordinates7.concat(teamBCoordinates7),
        8: teamACoordinates8.concat(teamBCoordinates8),
        9: teamACoordinates9.concat(teamBCoordinates9),
        10: teamACoordinates10.concat(teamBCoordinates10),
        11: teamACoordinates11.concat(teamBCoordinates11),
      };

      const teamCoordinates = playingEvent.teamDivision
        ? teamCoordinatesMap[teamSize] || null
        : null;

      // Skip team logic if not divided
      if (!playingEvent.teamDivision) return;

      const { team1Color, team2Color, reservedPlayersList, reservedPlayersCount } = playingEvent;

      teamAPlayers = reservedPlayersList.filter((player) => player.teamColor === team1Color);
      teamBPlayers = reservedPlayersList.filter((player) => player.teamColor === team2Color);

      // Calculate open spots and create placeholders
      const openSpots = reservedPlayersCount - reservedPlayersList.length;

      const emptySlots = Array.from({ length: openSpots }, () => ({
        displayName: 'Add Name',
        teamColor: '',
      }));

      // Merge unassigned players with empty slots
      const unassignedPlayers = playingEvent.reservedPlayersList
        .filter((player) => player.teamColor === null)
        .concat(emptySlots);

      // Assign unassigned players to the smaller team
      unassignedPlayers.forEach((player) => {
        const isTeamASmaller = teamAPlayers.length <= teamBPlayers.length;
        const targetTeam = isTeamASmaller ? teamAPlayers : teamBPlayers;
        const targetColor = isTeamASmaller ? playingEvent.team1Color : playingEvent.team2Color;

        // Ensure player has a displayName and assign the team color
        const playerWithTeam: ReservedPlayerDetails = {
          ...player,
          displayName: player.displayName || 'Add Name',
          teamColor: targetColor,
        };

        targetTeam.push(playerWithTeam);
      });

      fullTeamPlayers = teamAPlayers.concat(teamBPlayers);

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
          {...(eventPage ? { expanded: true } : {})}
        >
          <AccordionSummary
            expandIcon={eventPage ? null : <ExpandMoreIcon />}
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
                    team_division={playingEvent?.teamDivision || false}
                    team1_color={playingEvent?.team1Color ? playingEvent?.team1Color : ''}
                    team2_color={playingEvent?.team2Color ? playingEvent?.team2Color : ''}
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
                team_division={playingEvent.teamDivision ? playingEvent.teamDivision : false}
                team1_color={playingEvent.team1Color ? playingEvent.team1Color : ''}
                team2_color={playingEvent.team2Color ? playingEvent.team2Color : ''}
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
                {userState.login.isAdmin && !eventPage && userState.login.isLoggedIn ? (
                  <BorderColorIcon
                    className={styles.editIcon}
                    onClick={() => handleOpen(playingEvent.uniqueEventId)}
                  />
                ) : null}
              </Box>

              {playingEvent?.teamDivision && (
                <Button
                  onClick={() => handleCaptureClick(playingEvent.uniqueEventId)}
                  className={isPortrait ? styles.downloadButton : styles.downloadButtonLandscape}
                >
                  <DownloadIcon />
                </Button>
              )}

              {userState.login.isAdmin &&
              !eventPage &&
              userState.login.isLoggedIn &&
              selectedEventId === playingEvent.uniqueEventId ? (
                <AddPlayer
                  isOpen={open}
                  onToggle={handleToggle}
                  uniqueEventId={selectedEventId}
                  cityId={cityNameId}
                  handlePassName={passName}
                  team1_color={playingEvent?.team1Color ? playingEvent?.team1Color : ''}
                  team2_color={playingEvent?.team2Color ? playingEvent?.team2Color : ''}
                />
              ) : null}

              {playingEvent.teamDivision ? (
                isPortrait ? (
                  <Box
                    className={`${styles.portraitGroundImageContainer} ground-container-id${playingEvent.uniqueEventId}`}
                  >
                    <Box className={styles.dragContainer}>
                      {fullTeamPlayers.map((player, index) =>
                        renderPlayer(
                          player,
                          (index % teamSize) + 1,
                          teamCoordinates?.[index],
                          playingEvent.teamDivision || false,
                        ),
                      )}
                    </Box>
                    <img
                      src={'ground.jpeg'}
                      alt="ground"
                      height={670}
                      className={styles.portraitGroundImage}
                    />
                  </Box>
                ) : (
                  <Box className={styles.groundImageContainer}>
                    <Box className={styles.dragContainer}>
                      {fullTeamPlayers.map((player, index) =>
                        renderPlayer(
                          player,
                          (index % teamSize) + 1,
                          teamCoordinates?.[index],
                          playingEvent.teamDivision || false,
                        ),
                      )}
                    </Box>
                    <img
                      src={'landscape.jpeg'}
                      alt="ground"
                      height={698}
                      className={styles.groundImage}
                    />
                  </Box>
                )
              ) : (
                <>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                      const player =
                        i < playingEvent.reservedPlayersList.length
                          ? playingEvent.reservedPlayersList[i]
                          : null;
                      return renderPlayer(player, i, {}, playingEvent.teamDivision || false);
                    })}
                  </Grid>
                </>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    });

  return <>{EventsMapFunc()}</>;
};
