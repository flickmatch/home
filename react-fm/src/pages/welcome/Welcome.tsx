import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Welcome.module.scss';
import mainlogo from '/logo.png';

function Welcome() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const isPortrait = useOrientation();

  const videoContainer = () => (
    <Box className={`${styles.videoContainer}`}>
      <video className={styles.fullscreenVideo} autoPlay muted loop>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/first-d160b.appspot.com/o/football.mp4?alt=media&token=954eceb5-f109-492c-86b5-8587bf2ce7fd"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay} />
      <Box className={styles.content}>
        <FlexBox className={styles.info}>
          <img src={mainlogo} alt="logo" className={styles.logo} />
          <Typography variant="h3" className={styles.companyName}>
            Flickmatch
          </Typography>
        </FlexBox>
        <Typography className={styles.tagLine}>
          Find players, join teams, and play matches!
        </Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={<SportsSoccerIcon />}
        className={styles.explore}
        component={Link}
        to="/match-queues"
      >
        Explore Games
      </Button>
    </Box>
  );

  const vision = () => (
    <FlexBox className={`${styles.firstSection}`}>
      <Box className={isPortrait ? styles.portraitSlideFromLeft : styles.slideFromLeft}>
        <Box>
          <Typography className={styles.whatIsFlickmatch}>
            Introducing Flickmatch, We&apos;re dedicated to creating a dynamic space for football
            enthusiasts to come together, experience the thrill of the sport like never before.
            Flickmatch serves as the ultimate hub for both casual players and competitive teams
            looking to engage in exhilarating matches.
            <br />
            <br />
            With our user-friendly interface, you can effortlessly browse through upcoming games,
            join matches with opponents that match your skill level. Welcome to a new era of
            football match-making.
          </Typography>
        </Box>
      </Box>
      <div className={isPortrait ? styles.dividerOnPortrait : styles.divider} />
      <Box className={isPortrait ? styles.portraitSlideFromRight : styles.slideFromRight}>
        <Box>
          <img
            className={isPortrait ? styles.portraitFootball : styles.football}
            src="/football.jpeg"
            alt="football"
          />
        </Box>
      </Box>
    </FlexBox>
  );

  const whatIsFlickmatch = () => (
    <FlexBox className={`${isPortrait ? styles.portraitSecondSection : styles.secondSection}`}>
      <Box className={isPortrait ? styles.portraitPhoneSection : styles.phoneSection}>
        <Box>
          <img className={styles.Iphone1} src="/Iphone1.png" alt="iphone" />
        </Box>
      </Box>
      <Box className={isPortrait ? styles.portraitInfoSection : styles.infoSection}>
        <Typography className={styles.question}>What is FLICKMATCH ?</Typography>
        <Box className={styles.mottoSection}>
          <Typography className={styles.whatIsFlickmatch}>
            Finding football matches ⚽ should be as easy as getting a cab 🚕! FLICKMATCH finds or
            organises football games near you.Whether you&apos;re a casual solo, Or in a group Or a
            team looking to play LTP (Losers to Pay), FLICKMATCH takes care of all your football
            MATCHMAKING needs from finding players to reserving grounds.
          </Typography>
        </Box>
      </Box>
    </FlexBox>
  );

  const howToPlay = () => (
    <Box className={isPortrait ? styles.playContainer : ''}>
      <Typography variant="h3" className={styles.heading}>
        How To Play
      </Typography>
      <FlexBox className={isPortrait ? styles.portraitHowToPlay : styles.howToPlay}>
        <Box className={isPortrait ? styles.portraitInstruction : styles.instruction}>
          <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
            <FlexBox className={styles.iconContainerFirst} onClick={() => switchImage(1)}>
              <SearchIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>Explore Games</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Easily find and join a game Solo or with friend(s) on FlickMatch!
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
            <FlexBox className={styles.iconContainerSecond} onClick={() => switchImage(2)}>
              <SnowshoeingIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>Find Players</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Explore all the players with whom you are going to play.
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
            <FlexBox className={styles.iconContainerSecond} onClick={() => switchImage(3)}>
              <TouchAppIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>How to Join</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Choose your own position early by just clicking Join Game.
              </Typography>
            </FlexBox>
          </FlexBox>
          <Box className={styles.bar} />
        </Box>

        <Box className={isPortrait ? styles.portraitInstructionImg : styles.instructionImg}>
          <FlexBox className={styles.imageContainer}>
            {/* <img className={styles.Iphone1} src="/Iphone1.png" alt="iphone"/> */}
            {activeImage == 1 ? gamesQueue() : activeImage == 2 ? playerList() : joinNow()}
          </FlexBox>
        </Box>
      </FlexBox>
    </Box>
  );

  const gamesQueue = () => <img className={styles.games} src="/game.jpg" alt="games" />;

  const playerList = () => <img className={styles.games} src="/players.jpg" alt="players" />;

  const joinNow = () => <img className={styles.games} src="/join.jpg" alt="join-now" />;

  const switchImage = (index: number) => {
    setActiveImage(index);
  };

  return (
    <>
      <Meta title="Home" />
      {videoContainer()}
      {vision()}
      {whatIsFlickmatch()}
      {howToPlay()}
    </>
  );
}

export default Welcome;
