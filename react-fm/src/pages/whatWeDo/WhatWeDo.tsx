import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';

import styles from './WhatWeDo.module.scss';
import { assessmentUrl, comingSoonUrl, statsUrl } from './constants';

function WhatWeDo() {
  const isPortrait = useOrientation();
  const [hideIndicators, setHideIndicator] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const opts: YouTubeProps['opts'] = {
    height: '450',
    width: isPortrait ? '100%' : '60%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      setIsLoggedIn(true);
    }
  }, []);

  const onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  //hiding left/right buttons on play
  const onPlay = () => {
    setHideIndicator(false);
  };

  const onPause = () => {
    setHideIndicator(true);
  };

  const videosList = [
    {
      id: 'hWcpLjUQ7As',
    },
    {
      id: 'q-Z36q5RAzQ',
    },
    {
      id: 'aeJssUS7U7w',
    },
    {
      id: '00qyzOfbWgM',
    },
    {
      id: 'VeYnBAyyiO4',
    },
  ];

  return (
    <>
      <Meta title="What We Do" />
      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
      <Box className={styles.box}>
        <Box className={isPortrait ? styles.smallDeviceContainer : styles.container}>
          <Typography variant="h3" className={styles.heading}>
            What We Do
          </Typography>
          <Typography className={styles.job}>
            Flickmatch finds or organises football games near you.
          </Typography>
          <Carousel
            autoPlay={false}
            className={styles.videoCarousel}
            swipe={true}
            duration={500}
            interval={5000}
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
            navButtonsAlwaysVisible={hideIndicators}
          >
            {videosList.map((item, i) => (
              <YouTube
                key={i}
                videoId={item.id}
                opts={opts}
                onReady={onReady}
                onPlay={onPlay}
                onPause={onPause}
                onError={onPause}
                className={styles.youtube}
              />
            ))}
          </Carousel>

          <FlexBox className={styles.assessment}>
            <Typography variant="h3" className={styles.heading}>
              Skill Assessments
            </Typography>
            <Typography className={styles.job}>
              We record games and collect data to build a deep learning based video statistics
              generator.
            </Typography>
            <img
              src={assessmentUrl}
              alt="match assessments"
              className={isPortrait ? styles.mobileStats : styles.stats}
            />
            <img
              src={statsUrl}
              alt="stats"
              className={isPortrait ? styles.mobileStats : styles.stats}
            />
          </FlexBox>
          <Box className={styles.playerHistory}>
            <Typography variant="h3" className={styles.heading}>
              Players History
            </Typography>
            <img src={comingSoonUrl} alt="coming soon" className={styles.comingSoonImg} />
            <Typography className={styles.comingSoonText}>Coming soon....</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default WhatWeDo;

{
  /* <Typography className={styles.highlights}>
            Catch all the highlights on{' '}
            <a href="https://www.youtube.com/@FlickMatch" className={styles.yout}>
              YouTube
            </a>{' '}
            and{' '}
            <a href="https://www.instagram.com/flickmatch/" className={styles.insta}>
              Instagram.
            </a>
          </Typography> */
}
