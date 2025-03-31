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
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import styles from './../matchQueues/Queue.module.scss';
import { AddPlayer } from './AddPlayer';
import { VenueName } from './VenueName';
import { EventsCard } from './eventsComponents/Events';
import Jersey from './eventsComponents/Jersey';
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

const appLogo = `${window.location.origin}/fm_rainbow.webp`;

interface event {
  gameEvent: EventDetails[];
  cityName: string;
  cityNameId: string;
  addPlayerInQueue: (name: string) => void;
  eventPage?: boolean;
}

export const EventComponent: FC<event> = ({
  gameEvent,
  cityName,
  cityNameId,
  addPlayerInQueue,
  eventPage,
}) => {
  const isPortrait = useOrientation();
  // console.log(cityNameId, typeof cityNameId);

  const [open, setOpen] = useState(false);
  const [highLighted, setHighlighted] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [singleTeamView, setSingleTeamView] = useState(false);
  const [showTeamA, setShowTeamA] = useState('true');

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
      | {
          mobilePoints?: { x: number; y: number };
          mobileSingleTeam?: { x: number; y: number };
          id?: number;
          role?: string;
        }
      | undefined,
    teamDivision: boolean,
    singleView: boolean,
  ) => (
    <PlayerDetails
      displayName={player ? player.displayName : 'Add Name'}
      index={i}
      id={player?.id}
      role={player?.role}
      teamColor={player?.teamColor}
      coordinates={coordinates}
      teamDivision={teamDivision}
      singleTeamView={singleView}
    />
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const teamA = (teamAColor: string) => {
    // Determine the display color for Team A
    const displayColor =
      teamAColor.toLowerCase() === 'bibs'
        ? 'Orange'
        : teamAColor.toLowerCase() === 'no bibs' || !teamAColor
        ? 'White'
        : teamAColor;

    return (
      <Box className={styles.teamDivision}>
        <span className={styles.colorTeamA} style={{ background: displayColor }} />
        {teamAColor} (Team A)
      </Box>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const teamB = (teamBColor: string) => {
    // Determine the display color for Team B
    const displayColor =
      teamBColor.toLowerCase() === 'bibs'
        ? 'White'
        : teamBColor.toLowerCase() === 'no bibs' || !teamBColor
        ? 'White'
        : teamBColor;

    return (
      <Box className={styles.teamDivisionSecond}>
        <span className={styles.colorTeamB} style={{ background: displayColor }} />
        {teamBColor} (Team B)
      </Box>
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowTeamA(event.target.value);
  };

  const EventsMapFunc = () =>
    gameEvent.map((playingEvent) => {
      // const openSpots = playingEvent.reservedPlayersCount - playingEvent.reservedPlayersList.length;
      let fullTeamPlayers: ReservedPlayerDetails[] = [];
      let teamAPlayers: ReservedPlayerDetails[] = [];
      let teamBPlayers: ReservedPlayerDetails[] = [];
      const teamSize = playingEvent.reservedPlayersCount / 2;
      let teamCoordinates:
        | { mobilePoints: { x: number; y: number }; id: number; role: string }[]
        | null;
      let singleTeamACoordinates:
        | ({ mobilePoints?: { x: number; y: number }; id?: number; role?: string } | undefined)[]
        | null;
      let singleTeamBCoordinates:
        | ({ mobilePoints?: { x: number; y: number }; id?: number; role?: string } | undefined)[]
        | null;
      if (playingEvent.teamDivision) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const teamMap: Record<number, { A: any[]; B: any[] }> = {
          5: { A: teamACoordinates5, B: teamBCoordinates5 },
          6: { A: teamACoordinates6, B: teamBCoordinates6 },
          7: { A: teamACoordinates7, B: teamBCoordinates7 },
          8: { A: teamACoordinates8, B: teamBCoordinates8 },
          9: { A: teamACoordinates9, B: teamBCoordinates9 },
          10: { A: teamACoordinates10, B: teamBCoordinates10 },
          11: { A: teamACoordinates11, B: teamBCoordinates11 },
        };

        if (teamMap[teamSize]) {
          singleTeamACoordinates = teamMap[teamSize].A;
          singleTeamBCoordinates = teamMap[teamSize].B;
          teamCoordinates = [
            ...singleTeamACoordinates.filter(
              (
                player,
              ): player is { mobilePoints: { x: number; y: number }; id: number; role: string } =>
                !!player &&
                player.mobilePoints !== undefined &&
                player.id !== undefined &&
                player.role !== undefined,
            ),
            ...singleTeamBCoordinates.filter(
              (
                player,
              ): player is { mobilePoints: { x: number; y: number }; id: number; role: string } =>
                !!player &&
                player.mobilePoints !== undefined &&
                player.id !== undefined &&
                player.role !== undefined,
            ),
          ];
        } else {
          teamCoordinates = singleTeamACoordinates = singleTeamBCoordinates = null;
        }
      }

      if (playingEvent?.teamDivision) {
        teamAPlayers = playingEvent.reservedPlayersList.filter(
          (player) => player.teamColor === playingEvent?.team1Color,
        );
        teamBPlayers = playingEvent.reservedPlayersList.filter(
          (player) => player.teamColor === playingEvent?.team2Color,
        );

        // Calculate open spots and create placeholders
        const openSpots =
          playingEvent.reservedPlayersCount - playingEvent.reservedPlayersList.length;
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
          if (teamAPlayers.length <= teamBPlayers.length) {
            teamAPlayers.push(
              player
                ? { ...player, teamColor: playingEvent.team1Color }
                : { displayName: 'Add Name', teamColor: playingEvent.team1Color },
            );
          } else {
            teamBPlayers.push(
              player
                ? { ...player, teamColor: playingEvent.team2Color }
                : { displayName: 'Add Name', teamColor: playingEvent.team2Color },
            );
          }
        });

        fullTeamPlayers = teamAPlayers.concat(teamBPlayers);
      }

      function eventIdtoString(event: EventDetails | null) {
        const eventId =
          event?.eventId !== undefined && event?.eventId !== null
            ? String(event.eventId)
            : 'undefined';
        return eventId;
      }

      return userState.login.isAdmin || !playingEvent.testGame ? (
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
                  testGame={playingEvent.testGame}
                  date={playingEvent.date}
                  dummyData={playingEvent.dummyData ? playingEvent.dummyData : false}
                />
                {isPortrait ? null : (
                  <JoinNow
                    stripePaymentUrl={playingEvent.stripePaymentUrl}
                    venuePinCode={playingEvent.venuePinCode}
                    charges={0}
                    date={''}
                    uniqueEventId={playingEvent.uniqueEventId}
                    eventId={eventPage ? eventIdtoString(playingEvent) : playingEvent.eventId}
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
                venuePinCode={playingEvent.venuePinCode}
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
                team1Score={playingEvent.team1Score !== null ? playingEvent.team1Score : -1}
                team2Score={playingEvent.team2Score !== null ? playingEvent.team2Score : -1}
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
                <Typography
                  className={isPortrait ? styles.portraitReservedPlayers : styles.reservedPlayers}
                >
                  Reserved Players
                </Typography>
                {userState.login.isAdmin && userState.login.isLoggedIn ? (
                  <BorderColorIcon
                    className={styles.editIcon}
                    onClick={() => handleOpen(playingEvent.uniqueEventId)}
                  />
                ) : null}
                {playingEvent?.teamDivision && isPortrait && userState.login.isAdmin ? (
                  <Stack direction="row" spacing={4} style={{ width: 125 }}>
                    <ToggleButtonGroup
                      value={singleTeamView}
                      exclusive
                      aria-label="Team View"
                      style={{ height: 45, marginLeft: 50, marginTop: -5 }}
                    >
                      <ToggleButton
                        value="true"
                        aria-label="Single-team"
                        onChange={() => setSingleTeamView(true)}
                      >
                        <Jersey size={22} color="White" number="" />
                      </ToggleButton>

                      <ToggleButton
                        value="false"
                        aria-label="Both-team"
                        onChange={() => setSingleTeamView(false)}
                      >
                        <div
                          style={{
                            position: 'relative',
                            height: '100%',
                            width: 31,
                            marginTop: 5,
                          }}
                        >
                          <Jersey size={22} color="White" number="" />
                          <div style={{ position: 'absolute', top: '-9px', left: 10 }}>
                            <Jersey size={22} color="White" number="" />
                          </div>
                        </div>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Stack>
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
                    {showTeamA === 'true' ? (
                      <Box
                        className={styles.dragContainer}
                        style={{ display: singleTeamView ? 'block' : 'none' }}
                      >
                        {teamAPlayers.map((player, index) =>
                          renderPlayer(
                            player,
                            (index % teamSize) + 1,
                            singleTeamACoordinates?.[index],
                            playingEvent.teamDivision || false,
                            true,
                          ),
                        )}
                      </Box>
                    ) : (
                      <Box
                        className={styles.dragContainer}
                        style={{ display: singleTeamView ? 'block' : 'none' }}
                      >
                        {teamBPlayers.map((player, index) =>
                          renderPlayer(
                            player,
                            (index % teamSize) + 1,
                            singleTeamBCoordinates?.[index],
                            playingEvent.teamDivision || false,
                            true,
                          ),
                        )}
                      </Box>
                    )}
                    <Box
                      className={styles.dragContainer}
                      style={{ display: singleTeamView ? 'none' : 'block' }}
                    >
                      {fullTeamPlayers.map((player, index) =>
                        renderPlayer(
                          player,
                          (index % teamSize) + 1,
                          teamCoordinates?.[index],
                          playingEvent.teamDivision || false,
                          false,
                        ),
                      )}
                    </Box>
                    {singleTeamView ? (
                      <div
                        style={{
                          position: 'absolute',
                          zIndex: 9999,
                          top: 75,
                          right: 8,
                        }}
                      >
                        <Radio
                          checked={showTeamA === 'true'}
                          onChange={handleChange}
                          value={'true'}
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'A' }}
                          sx={{
                            color: playingEvent.team1Color,
                            '&.Mui-checked': {
                              color: playingEvent.team1Color,
                            },
                          }}
                          size="small"
                        />

                        <Radio
                          checked={showTeamA === 'false'}
                          onChange={handleChange}
                          value={'false'}
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'B' }}
                          sx={{
                            color: playingEvent.team2Color,
                            '&.Mui-checked': {
                              color: playingEvent.team2Color,
                            },
                          }}
                          size="small"
                        />
                      </div>
                    ) : null}
                    <img
                      src={isPortrait ? '/ground.jpeg' : ''}
                      alt="ground"
                      height={670}
                      className={isPortrait ? styles.portraitGroundImage : styles.groundImage}
                    />
                    {isPortrait ? (
                      <>
                        <div className={styles.watermarkTop}>flickmatch.in</div>
                        <div className={styles.watermarkBottom}>flickmatch.in</div>
                        <img
                          src={appLogo}
                          alt="logo"
                          className={styles.logo}
                          height="52px"
                          width="54.23px"
                        />
                      </>
                    ) : null}
                  </Box>
                ) : (
                  // : !userState.login.isAdmin ? (
                  //   <Box>
                  //     {teamA(playingEvent?.team1Color || 'Orange')}
                  //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  //       {teamAPlayers.map((player, index) =>
                  //         renderPlayer(
                  //           player,
                  //           index,
                  //           teamCoordinates?.[index],
                  //           playingEvent.teamDivision || false,
                  //         ),
                  //       )}
                  //     </Grid>

                  //     <Typography className={styles.versus}>v/s</Typography>
                  //     {teamB(playingEvent?.team2Color || 'White')}

                  //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  //       {teamBPlayers.map((player, index) =>
                  //         renderPlayer(
                  //           player,
                  //           index,
                  //           teamCoordinates?.[index],
                  //           playingEvent.teamDivision || false,
                  //         ),
                  //       )}
                  //     </Grid>
                  //   </Box>
                  // )
                  <Box className={styles.groundImageContainer}>
                    <Box className={styles.dragContainer}>
                      {fullTeamPlayers.map((player, index) =>
                        renderPlayer(
                          player,
                          (index % teamSize) + 1,
                          teamCoordinates?.[index],
                          playingEvent.teamDivision || false,
                          false,
                        ),
                      )}
                    </Box>
                    <img
                      src={'/landscape.jpeg'}
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
                      return renderPlayer(player, i, {}, playingEvent.teamDivision || false, false);
                    })}
                  </Grid>
                </>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      ) : null;
    });

  return <>{EventsMapFunc()}</>;
};
