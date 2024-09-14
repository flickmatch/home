import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { appLogo } from '../../sections/Header/constants';
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

const query = JSON.stringify({
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
          body: query,
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

  const buyPass = (passId: string) => {
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
                    passId: "${passId}"
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

            const paymentUrl = result.data.initiatePassPayment.paymentLink;
            window.open(paymentUrl, '_self');
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      };

      generateUrl();
    } else {
      createOrder(passId, userData.email, setAmount) // to be changed after local testing
        .then((orderId) => {
          setOrderId(orderId);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
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
      <Meta title="Add Turf" />
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
                      <span>For {matchPass.totalDays} Days</span>
                    </Box>
                    <Button className={styles.buyNow} onClick={() => buyPass(matchPass.passId)}>
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
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default GamePasses;
