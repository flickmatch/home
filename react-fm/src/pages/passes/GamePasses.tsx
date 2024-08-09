import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useOrientation from '@/hooks/useOrientation';

import { appLogo } from '../../sections/Header/constants';
import styles from './GamePasses.module.scss';

function GamePasses() {
  const isPortrait = useOrientation();

  return (
    <Box className={styles.pageContainer}>
      <Typography variant="h3" className={styles.heading}>
        Flickmatch Passes
      </Typography>
      <Box className={styles.container}>
        <Box className={isPortrait ? styles.portraitPassCard : styles.passCard}>
          <img src={appLogo} alt="logo" className={styles.logo} />
          <Typography variant="h3" className={styles.title}>
            30 days pass
          </Typography>
          <Typography className={styles.subtitle}>Unlimited games for 1 month</Typography>
          <Typography className={styles.price}>
            <CurrencyRupeeIcon className={styles.currency} />
            2500
          </Typography>
          <Typography className={styles.status}>Active</Typography>
          <ul className={styles.details}>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Access to all fields
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Join game in single click
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Exclusive member events
            </li>
          </ul>
          <Box className={styles.ribbon}>
            <span>Best Value</span>
          </Box>
          <Button className={styles.buyNow}>Buy Now</Button>
        </Box>
        <Box className={isPortrait ? styles.portraitPassCard : styles.passCard}>
          <img src={appLogo} alt="logo" className={styles.logo} />
          <Typography variant="h3" className={styles.title}>
            10 games pass
          </Typography>
          <Typography className={styles.subtitle}>pay for 8 games, play 10 games</Typography>
          <Typography className={styles.price}>
            <CurrencyRupeeIcon className={styles.currency} />
            3000
          </Typography>
          <Typography className={styles.status}>Active</Typography>

          <ul className={styles.details}>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Access to all fields
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Join game in single click
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Exclusive member events
            </li>
          </ul>
          <Button className={styles.buyNow}>Buy Now</Button>
        </Box>
        {/* <Box className={styles.passCard}>
          <Typography variant="h3" className={styles.title}>
            30 days pass
          </Typography>
          <Typography className={styles.subtitle}>Unlimited games for 1 month</Typography>
          <Typography className={styles.price}>
            <CurrencyRupeeIcon className={styles.currency} />
            1000
          </Typography>
          <Typography className={styles.status}>Active</Typography>
          <Button className={styles.buyNow}>Buy Now</Button>
        </Box> */}
      </Box>
    </Box>
  );
}

export default GamePasses;
