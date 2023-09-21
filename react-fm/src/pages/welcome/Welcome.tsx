import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import ExtensionIcon from '@mui/icons-material/Extension';
import SearchIcon from '@mui/icons-material/Search';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TouchAppIcon from '@mui/icons-material/TouchApp';
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
      <video ref={videoRef} className={styles.fullscreenVideo} autoPlay loop muted playsInline>
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
          <img className={styles.Iphone1} src="/Iphone1.png" alt="iphone" />
        </Box>
      </Box>
      <Box className={isPortrait ? styles.portraitInfoSection : styles.infoSection}>
        <Typography className={styles.question}>What is FLICKMATCH ?</Typography>
        <Box className={isPortrait ? styles.mottoMobileSection : styles.mottoSection}>
          <Typography className={styles.whatIsFlickmatch}>
            Finding football matches should be as easy as getting a cab 🚕! FLICKMATCH finds or
            organizes football games near you. 
            Whether you&apos;re a casual solo, in a group or a
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
                Easily find and join a game Solo or with friend(s) on FlickMatch!
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
              <Typography className={styles.title}>Find Players</Typography>
              <Typography className={isPortrait ? styles.portraitStep : styles.step}>
                Explore all the players with whom you are going to play.
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

  const gamesQueue = () => <img className={styles.games} src="/game.png" alt="games" />;

  const playerList = () => <img className={styles.games} src="/players.png" alt="players" />;

  const joinNow = () => <img className={styles.games} src="/join.png" alt="join-now" />;

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
