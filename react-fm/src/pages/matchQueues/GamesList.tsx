import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const [highLighted, setHighlighted] = useState(false);
  const [open, setOpen] = useState(false);

  const userState = useSelector((state: RootState) => state);

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

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const passName = (name: string) => {
    addPlayerInQueue(name);
  };

  useEffect(() => {
    // Check if the current accordion should be expanded based on the URL parameter
    gameEvent.forEach((newGame) => {
      const hashValue = location.hash.substring(1);
      if (hashValue === newGame.uniqueEventId) {
        handleClick(hashValue);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPlayer = (player: ReservedPlayerDetails | null, i: number) => (
    <PlayerDetails displayName={player ? player.displayName : '(Empty)'} index={i} key={i} />
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

  const AddingPlayer = (uniqueEventId: string) => (
    <AddPlayer
      isOpen={open}
      onToggle={handleOpen}
      uniqueEventId={uniqueEventId}
      cityId={cityNameId}
      handlePassName={passName}
    />
  );

  const EventsMapFunc = () =>
    gameEvent.map((playingEvent) => (
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
          expandIcon={
            <Link to={`#${playingEvent.uniqueEventId}`} className={styles.linkTag}>
              <ExpandMoreIcon />
            </Link>
          }
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
              reservedPlayersList={playingEvent.reservedPlayersList}
              venueName={playingEvent.venueName}
              waitListPlayers={playingEvent.waitListPlayers}
              stripePaymentUrl={playingEvent.stripePaymentUrl}
              team_division={false}
              team1_color={playingEvent.team1_color ? playingEvent.team1_color : ''}
              team2_color={playingEvent.team2_color ? playingEvent.team2_color : ''}
              dummyData={playingEvent.dummyData ? playingEvent.dummyData : false}
            />
          </FlexBox>
        </AccordionSummary>

        {/*Players Details*/}
        <AccordionDetails
          className={
            highLighted && location.hash.substring(1) === playingEvent.uniqueEventId
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

            {userState.login.isAdmin && userState.login.isLoggedIn
              ? AddingPlayer(playingEvent.uniqueEventId)
              : null}

            {playingEvent.team_division ? (
              <Box>
                {teamA(playingEvent.team1_color)}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from({ length: playingEvent.reservedPlayersCount / 2 }, (_, i) => {
                    const player =
                      i < playingEvent.reservedPlayersList.length
                        ? playingEvent.reservedPlayersList[i]
                        : null;
                    return renderPlayer(player, i);
                  })}
                </Grid>
                <Typography className={styles.versus}>v/s</Typography>
                {teamB(playingEvent.team2_color)}

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from({ length: playingEvent.reservedPlayersCount / 2 }, (_, i) => {
                    const player =
                      i < playingEvent.reservedPlayersList.length
                        ? playingEvent.reservedPlayersList[
                            i + playingEvent.reservedPlayersCount / 2
                          ]
                        : null;
                    return renderPlayer(player, i + playingEvent.reservedPlayersCount / 2);
                  })}
                </Grid>
              </Box>
            ) : (
              <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from({ length: playingEvent.reservedPlayersCount }, (_, i) => {
                    const player =
                      i < playingEvent.reservedPlayersList.length
                        ? playingEvent.reservedPlayersList[i]
                        : null;
                    return renderPlayer(player, i);
                  })}
                </Grid>
              </Box>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    ));

  return <>{EventsMapFunc()}</>;
};
