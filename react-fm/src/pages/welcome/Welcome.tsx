import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
//import { FullSizeCenteredFlexBox } from '@/components/styled';

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
          <Box className={styles.info}>
            <img src={mainlogo} alt="logo" className={styles.logo} />
            <Typography variant="h3" className={styles.companyName}>Flickmatch</Typography>
          </Box>
          <Typography className={styles.tagLine}>Find players, join teams, and play matches!</Typography>
        </Box>
      </Box>
      <Box className={styles.otherContent}>
      <Typography variant="h3" className={styles.companyName}>Flickmatch</Typography>
      </Box>
    </>
  );
}

export default Welcome;
