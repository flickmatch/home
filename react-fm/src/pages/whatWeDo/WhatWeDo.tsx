import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import mainlogo from '/logo.png';
import stats from '/stats.png'
//import { FullSizeCenteredFlexBox } from '@/components/styled';
import Box from '@mui/material/Box';
import useOrientation from '@/hooks/useOrientation';
import styles from './WhatWeDo.module.scss';

function WhatWeDo() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="What We Do" />
      <Box className={styles.box}>
        <Box className={styles.container}>
          <img src={mainlogo} alt="logo" className={styles.logo} />
          <Typography className={styles.job}>Find a football game near you! ⚽</Typography>
          <img src={stats} alt="stats" className={isPortrait ? styles.mobileStats : styles.stats} />
        </Box>
        
      </Box>
    </>
  );
}


export default WhatWeDo;