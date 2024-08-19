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
          <Typography className={styles.subtitle}>Pay for 8 games, Play 10 games</Typography>
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
        <Box className={isPortrait ? styles.portraitPassCard : styles.passCard}>
          <img src={appLogo} alt="logo" className={styles.logo} />
          <Typography variant="h3" className={styles.title}>
            FPL Reward
          </Typography>
          <Typography className={styles.subtitle}>
            Fantasy Premier League winner gets a free game!
          </Typography>
          <Typography className={styles.price}>Free</Typography>
          <Typography className={styles.status}>LIMITED OFFER</Typography>

          <ul className={styles.details}>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />1 free game at any location
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Exclusive for the top winner
            </li>
            <li>
              <SportsSoccerIcon className={styles.footballIcon} />
              Valid for 1 week
            </li>
          </ul>
          <Button
            className={styles.buyNow}
            href="https://fantasy.premierleague.com/leagues/auto-join/nl0zon"
          >
            Join FPL
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GamePasses;
