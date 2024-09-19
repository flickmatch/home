import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { appLogo } from '../../sections/Header/constants';
import { query as cityquery } from '../matchQueues/constants';
import mapCityData from '../matchQueues/map';
import type { CityDetails } from '../matchQueues/types/Events.types';
import styles from './GamePasses.module.scss';
import { createOrder, displayRazorpay } from './RazorPay';

type PassDetails = {
  cityId: string;
  passId: string;
  passType: string;
  price: number;
  status: string;
  title: string;
  totalDays: number;
  totalGames: number;
};

const passquery = JSON.stringify({
  query: `query Passes {
  passes {
  passId
        cityId
        passType
        totalGames
        totalDays
        price
        title
        status
  }
    }`,
});

const url = 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql';

function GamePasses() {
  const isPortrait = useOrientation();
  const [matchPasses, setMatchPasses] = useState([]);
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [razorPay, setRazorPay] = useState(true);
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const userState = useSelector((state: RootState) => state);
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [cityName, setCityName] = useState('');
  const [currencyType, setCurrencyType] = useState('');
  const [matchPassId, setMatchPassId] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const googleUserInfo = localStorage.getItem('userData');
    if (googleUserInfo) {
      const data = JSON.parse(googleUserInfo);
      setUserData({ name: data.name, email: data.email, phoneNumber: '' });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: passquery,
        });
        const data = await response.json();
        const passes = data.data.passes;
        setMatchPasses(passes);
        // eslint-disable-next-line no-console
        console.log(passes);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          signal: signal,
          headers: {
            'Content-Type': 'application/json',
          },
          body: cityquery,
        });

        const data = await response.json();

        setCitiesData(data.data.cities);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            console.log(error.message);
          }
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const handleCityName = (e: SelectChangeEvent) => {
    setCityName(e.target.value);

    mapCityData.forEach((data) => {
      if (data.city === e.target.value) {
        setCurrencyType(data.currency);
      }
    });
  };

  const sectionFirst = () => (
    <>
      <Typography className={styles.fieldTitle}>City Name</Typography>
      <AccountBalanceIcon className={styles.fieldTitleIcon} />

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleCityName}
      >
        {citiesData.map((city, i) => (
          <FormControlLabel
            value={city.cityName}
            control={
              <Radio
                sx={{
                  '&, &.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label={city.cityName}
            key={i}
          />
        ))}
      </RadioGroup>
    </>
  );

  const buyPass = () => {
    if (!razorPay) {
      const generateUrl = () => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `mutation InitiatePassPayment {
            initiatePassPayment(
                input: {
                    passId: "${matchPassId}"
                    email: "${userData.email}",
                    currency: "INR",
                    location: "Noida"
                }
            ) {
                orderId
                isInitiated
                amount
            }
        }`,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.errors) {
              // Handle GraphQL errors

              throw new Error(result.errors[0].message);
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      };

      generateUrl();
    } else {
      createOrder(matchPassId, userData.email, setAmount, cityName, currencyType) // to be changed after local testing
        .then((orderId) => {
          setOrderId(orderId);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (passId: string) => {
    setOpen(true);
    setMatchPassId(passId);
  };

  if (orderId) {
    displayRazorpay(
      amount,
      orderId,
      userData.email,
      userData.name,
      userData.phoneNumber,
      setOrderId,
      setRazorPay,
    );
  }

  return (
    <>
      <Meta title="Game Passes" />
      {userState.login.isAdmin && userState.login.isLoggedIn ? (
        <Box className={styles.pageContainer}>
          <Typography variant="h3" className={styles.heading}>
            Flickmatch Passes
          </Typography>

          <Box className={styles.container}>
            {matchPasses.length > 0
              ? matchPasses.map((matchPass: PassDetails, i: number) => (
                  <Box className={isPortrait ? styles.portraitPassCard : styles.passCard} key={i}>
                    <img src={appLogo} alt="logo" className={styles.logo} />
                    <Typography variant="h3" className={styles.title}>
                      {matchPass.title}
                    </Typography>
                    <Typography className={styles.subtitle}>
                      Pay for {matchPass.totalGames - 2} games, Play {matchPass.totalGames} games
                    </Typography>
                    <Typography className={styles.price}>
                      <CurrencyRupeeIcon className={styles.currency} />
                      {matchPass.price}
                    </Typography>
                    <Typography className={styles.status}>{matchPass.status}</Typography>

                    <ul className={isPortrait ? styles.portraitDetails : styles.details}>
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
                      <span>For {matchPass.totalDays} Days</span>
                    </Box>
                    <Button className={styles.buyNow} onClick={() => handleOpen(matchPass.passId)}>
                      Buy Now
                    </Button>
                  </Box>
                ))
              : null}

            {/* <Box className={isPortrait ? styles.portraitPassCard : styles.passCard}>
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
        </Box> */}
            <Dialog open={open} onClose={handleClose} className={styles.diaglogBox}>
              <DialogTitle>Please select your city</DialogTitle>
              <DialogContent style={{ width: 350 }}>{sectionFirst()}</DialogContent>
              <DialogActions>
                <Button className={styles.cancel} onClick={handleClose}>
                  Cancel
                </Button>
                <Button className={styles.pay} onClick={buyPass}>
                  Pay
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default GamePasses;
