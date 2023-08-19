import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
//import { FullSizeCenteredFlexBox } from '@/components/styled';
import { FlexBox } from '@/components/styled';
import styles from './Welcome.module.scss';
import Box from '@mui/material/Box';
import mainlogo from '/logo.png';

function Welcome() {
  return (
    <>
      <Meta title="Home" />
      {/* <FullSizeCenteredFlexBox className={styles.container}>
        <Typography variant="h3">Welcome! to Home</Typography>
      </FullSizeCenteredFlexBox> */}
      <Box className={styles.videoContainer}>
        <video className={styles.fullscreenVideo} autoPlay muted loop>
          <source src="/football.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
        <Box className={styles.content}>
          <FlexBox className={styles.info}>
            <img src={mainlogo} alt="logo" className={styles.logo} />
            <Typography variant="h3" className={styles.companyName}>Flickmatch</Typography>
          </FlexBox>
          <Typography className={styles.tagLine}>Find players, join teams, and play matches!</Typography>
        </Box>
      </Box>
      
      <FlexBox className={styles.firstSection}>
        <Box className={styles.slideFromLeft}>
          <Box>
            <Typography className={styles.whatIsFlickmatch}>Flickmatch is the perfect place for you and your mates to play for leisure or event competitive. Our match-making facilities ensure that every game is better than the one before with plenty of thrills and goals! Plus, you get spectacular views of Mountain’s View glistening skyline and the majestic feel of Gurgaon and Hyderabad.</Typography>
          </Box>
        </Box>
        <div className={styles.divider} />
        <Box className={styles.slideFromRight}>
          <Box>
            <img className={styles.football} src="/football.jpeg" alt="football"/>
          </Box>
        </Box>
      </FlexBox>

      <FlexBox className={styles.secondSection}>
        <Box className={styles.phoneSection}>
          <Box>
            <img className={styles.Iphone1} src="/Iphone1.png" alt="iphone"/>
          </Box>
        </Box>
        <Box className={styles.infoSection}>
          <Typography className={styles.question}>What is FLICKMATCH ?</Typography>
          <Box className={styles.mottoSection}>
            <Typography className={styles.whatIsFlickmatch}>Finding football matches ⚽ should be as easy as getting a cab 🚕! FLICKMATCH finds or organises football games near you.Whether you're a casual solo, Or in a group Or a team looking to play LTP (Losers to Pay), FLICKMATCH takes care of all your football MATCHMAKING needs from finding players to reserving grounds.</Typography>
          </Box>
        </Box>
      </FlexBox>
    </>
  );
}

export default Welcome;
