import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import { AddPlayer } from './AddPlayer';
import styles from './Queue.module.scss';
import { avatars } from './constants';
import { EventsCard } from './eventsComponents/Events';
import { JoinNow } from './eventsComponents/JoinNow';
import { PlayerDetails } from './eventsComponents/Players';
import type { EventDetails, ReservedPlayerDetails } from './types/Events.types';

interface event {
  gameEvent: EventDetails[];
  cityName: string;
  cityNameId: string;
}

export const GamesList: FC<event> = ({ gameEvent, cityName, cityNameId }) => {
  const isPortrait = useOrientation();
  //const navigate = useNavigate();
  const location = useLocation();
  const [highLighted, setHighlighted] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

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

        return setIsAdminMode(check);
      }
    }
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
              <Typography className={isPortrait ? styles.mobileVenueName : styles.venueName}>
                <SportsSoccerIcon className={styles.sportsIcon} />
                {playingEvent.venueName}
              </Typography>
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
              {isAdminMode ? (
                <BorderColorIcon className={styles.editIcon} onClick={handleOpen} />
              ) : null}
            </Box>

            {isAdminMode ? AddingPlayer(playingEvent.uniqueEventId) : null}

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
          {playingEvent.waitListPlayers.length > 0 ? (
            <Box className={styles.box} sx={{ flexGrow: 1 }}>
              <Typography className={styles.waitListPlayers}>Waitlist</Typography>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from({ length: playingEvent.waitListPlayersCount }, (_, index) => {
                  const player =
                    index < playingEvent.waitListPlayers.length
                      ? playingEvent.waitListPlayers[index]
                      : null;
                  return renderPlayer(player, avatars.length - 1 - index);
                })}
              </Grid>
            </Box>
          ) : null}
        </AccordionDetails>
      </Accordion>
    ));

  return <>{EventsMapFunc()}</>;
};
