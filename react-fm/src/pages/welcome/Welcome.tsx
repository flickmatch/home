import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import ExtensionIcon from '@mui/icons-material/Extension';
import SearchIcon from '@mui/icons-material/Search';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { CenteredFlexBox, FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Welcome.module.scss';

function Welcome() {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const isPortrait = useOrientation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the video element is available
    if (videoRef.current) {
      // Load the video and start playing
      videoRef.current.load();
      videoRef.current.play();
    }
  }, []);

  const videoContainer = () => (
    <Box className={`${styles.videoContainer}`}>
      <video
        ref={videoRef}
        className={styles.fullscreenVideo}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/first-d160b.appspot.com/o/football.mp4?alt=media&token=954eceb5-f109-492c-86b5-8587bf2ce7fd"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} />
      <Box className={styles.content}>
        <CenteredFlexBox>
          <Typography className={styles.companyName}>Flickmatch</Typography>
        </CenteredFlexBox>
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

  const secVision = () => (
    <Box className={styles.sectionFirst}>
      <FlexBox className={isPortrait ? styles.portraitCardsContainer : styles.cardContainer}>
        <FlexBox className={isPortrait ? styles.portraitCard : styles.card}>
          <Box className={styles.innerCard}>
            <SportsSoccerIcon className={styles.cardIcon} />
          </Box>
          <Typography className={styles.flickText}>
            Flickmatch is dedicated to creating a dynamic space for football enthusiasts to come
            together, experience the thrill of the sport like never before.
          </Typography>
        </FlexBox>
        <FlexBox className={isPortrait ? styles.portraitCard : styles.card}>
          <Box className={styles.innerCard}>
            <ExtensionIcon className={styles.cardIcon} />
          </Box>
          <Typography className={styles.flickText}>
            Flickmatch serves as the ultimate hub for both casual players and competitive teams
            looking to engage in exhilarating matches.
          </Typography>
        </FlexBox>
        <FlexBox className={isPortrait ? styles.portraitCard : styles.card}>
          <Box className={styles.innerCard}>
            <SportsKabaddiIcon className={styles.cardIcon} />
          </Box>
          <Typography className={isPortrait ? styles.portraitFlickText : styles.flickText}>
            With our user-friendly interface, you can effortlessly browse through upcoming games,
            join matches with opponents that match your skill level.
          </Typography>
        </FlexBox>
      </FlexBox>
    </Box>
  );

  const whatIsFlickmatch = () => (
    <FlexBox className={`${isPortrait ? styles.portraitSecondSection : styles.secondSection}`}>
      <Box className={isPortrait ? styles.portraitPhoneSection : styles.phoneSection}>
        <Box>
          <img
            className={styles.Iphone1}
            src="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/Iphone1.png?alt=media&token=37a2531f-c739-4361-86f0-f7d35dd701d0&_gl=1*q3tbgt*_ga*MTA1NTE1NDY0MC4xNjg4ODgzODE5*_ga_CW55HF8NVT*MTY5ODgwNTE2MC40LjEuMTY5ODgwNjQ1OS4zNC4wLjA."
            alt="iphone"
          />
        </Box>
      </Box>
      <Box className={isPortrait ? styles.portraitInfoSection : styles.infoSection}>
        <Typography className={styles.question}>What is FLICKMATCH ?</Typography>
        <Box className={isPortrait ? styles.mottoMobileSection : styles.mottoSection}>
          <Typography className={styles.whatIsFlickmatch}>
            Finding football matches should be as easy as getting a cab 🚕! FLICKMATCH finds or
            organizes football games near you. Whether you&apos;re a casual solo, in a group or a
            team looking to play LTP (Losers to Pay), FLICKMATCH takes care of all your football
            matchmaking needs from finding players to reserving grounds.
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
            <FlexBox
              className={activeImage === 1 ? styles.iconContainer : styles.iconContainerFirst}
              onClick={() => switchImage(1)}
            >
              <SearchIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>Explore Games</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Find and join a game Solo or with friend(s)
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
            <FlexBox
              className={activeImage === 2 ? styles.iconContainer : styles.iconContainerSecond}
              onClick={() => switchImage(2)}
            >
              <SnowshoeingIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>Make the payment</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                You&apos;ll be assigned a team. Make sure you follow the team colors.
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
            <FlexBox
              className={activeImage === 3 ? styles.iconContainer : styles.iconContainerSecond}
              onClick={() => switchImage(3)}
            >
              <TouchAppIcon className={styles.gameIcon} />
            </FlexBox>
            <FlexBox className={isPortrait ? styles.portraitStepsContainer : styles.stepsContainer}>
              <Typography className={styles.title}>Play</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Choose your own position early by just clicking Join Game.
              </Typography>
            </FlexBox>
          </FlexBox>
          <FlexBox className={styles.whatsapp}>
            <a href="https://wa.me/message/V77TZJHDVM7WP1" target="_blank" rel="noreferrer">
              <Button
                className={styles.sendHiButton}
                variant="contained"
                startIcon={<WhatsAppIcon />}
              >
                Start by sending Hi
              </Button>
            </a>
          </FlexBox>

          <Box className={styles.bar} />
        </Box>

        <Box className={isPortrait ? styles.portraitInstructionImg : styles.instructionImg}>
          <FlexBox className={styles.imageContainer}>
            {activeImage == 1 ? gamesQueue() : activeImage == 2 ? playerList() : joinNow()}
          </FlexBox>
        </Box>
      </FlexBox>
    </Box>
  );

  const gamesQueue = () => (
    <img
      className={styles.games}
      src="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/game.png?alt=media&token=7dc803f8-32ad-480e-bf68-e57501da2b72&_gl=1*1sxrh3v*_ga*MTA1NTE1NDY0MC4xNjg4ODgzODE5*_ga_CW55HF8NVT*MTY5ODgwNTE2MC40LjEuMTY5ODgwNTIzNS42MC4wLjA."
      alt="games"
    />
  );

  const playerList = () => (
    <img
      className={styles.games}
      src="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/players.png?alt=media&token=40c06c96-8346-4bf5-ae54-d2c36f23904c&_gl=1*1kxb2v3*_ga*MTA1NTE1NDY0MC4xNjg4ODgzODE5*_ga_CW55HF8NVT*MTY5ODgwNTE2MC40LjEuMTY5ODgwNjI3Mi42MC4wLjA."
      alt="players"
    />
  );

  const joinNow = () => (
    <img
      className={styles.games}
      src="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/join.png?alt=media&token=e2798ac8-c1f5-46a6-bece-792ac2fe353a&_gl=1*1vjhyts*_ga*MTA1NTE1NDY0MC4xNjg4ODgzODE5*_ga_CW55HF8NVT*MTY5ODgwNTE2MC40LjEuMTY5ODgwNjI5My4zOS4wLjA."
      alt="join-now"
    />
  );

  const switchImage = (index: number) => {
    setActiveImage(index);
  };

  return (
    <>
      <Meta title="Home" />
      {videoContainer()}
      {secVision()}
      {whatIsFlickmatch()}
      {howToPlay()}
    </>
  );
}

export default Welcome;
