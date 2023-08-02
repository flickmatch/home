import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import styles from './AboutUs.module.scss';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

function AboutUs() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="About Us" />
      <FullSizeCenteredFlexBox className={styles.box}>
        <Typography variant="h3" className={styles.ourStory}>Our Story</Typography>
        <Typography variant="h4" className={styles.journey}>We&#39;re on a Journey</Typography>
        
        <Typography className={isPortrait ? styles.mobileMotto : styles.motto}>
          FlickMatch is envisioned to be a matchmaking, player record keeping and ranking platform
          for casual sports in India and USA.
        </Typography>

        <Typography className={isPortrait ? styles.mobileDescription : styles.description}>
          While playing casual sports such as an evening game of football (soccer), an interested
          person would have to find 13 other interested people and find a 7v7 ground. This is
          tedious and de-motivational. We&#39;re a bunch of people building processes and technology to
          enhance local sports.
        </Typography>
        
        <Typography className={isPortrait ? styles.mobileAim : styles.aim}>&#x22;Sports do not build character. They reveal it.&#x22; ⚽</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default AboutUs;
