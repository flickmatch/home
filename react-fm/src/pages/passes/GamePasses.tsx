import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { appLogo } from '../../sections/Header/constants';
import mapCityData from '../matchQueues/map';
import styles from './GamePasses.module.scss';
import { createOrder, displayRazorpay } from './RazorPay';

type CitiesData = {
  city: string;
  cityId: number;
  currency: string;
  iconUrl: string;
};

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

const url = 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql';

function GamePasses() {
  const isPortrait = useOrientation();
  const [matchPasses, setMatchPasses] = useState<PassDetails[]>([]);
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [razorPay, setRazorPay] = useState(true);
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState('');
  const userState = useSelector((state: RootState) => state);

  const [passCity, setPassCity] = useState<CitiesData | null>(null);
  const path = window.location.pathname;
  const cityId = path.split('/').pop();

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
          body: JSON.stringify({
            query: `query PassesForCity {
            passesForCity(cityId: "${cityId}") {
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
          }),
        });
        const data = await response.json();

        const passes = data.data.passesForCity;

        passes.forEach((pass: PassDetails) => {
          mapCityData.forEach((cityData) => {
            if (cityData.cityId === Number(pass.cityId)) {
              setPassCity({
                city: cityData.city,
                cityId: cityData.cityId,
                currency: cityData.currency,
                iconUrl: cityData.iconUrl,
              });
            }
          });
        });
        setMatchPasses(passes);
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
  }, [cityId]);

  const buyPass = (matchPassId: string, cityName: string, currencyType: string) => {
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
                    location: "${cityName}"
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
        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
          <Box className={styles.pageContainer}>
            <Typography variant="h3" className={styles.heading}>
              Flickmatch Pass
            </Typography>
            {passCity != null ? (
              <div className={styles.cityNameContainer}>
                <Typography className={styles.citiesName} key={passCity.cityId}>
                  {passCity.city}
                </Typography>
                <img
                  className={styles.citiesImg}
                  src={passCity.iconUrl}
                  alt={passCity.city}
                  height="40px"
                />
              </div>
            ) : null}
            <Box className={styles.container}>
              <>
                {matchPasses.length > 0 && passCity != null
                  ? matchPasses.map((matchPass: PassDetails, i: number) => (
                      <Box
                        className={isPortrait ? styles.portraitPassCard : styles.passCard}
                        key={i}
                      >
                        <img src={appLogo} alt="logo" className={styles.logo} />
                        <Typography variant="h3" className={styles.title}>
                          {matchPass.title}
                        </Typography>
                        <Typography className={styles.subtitle}>
                          Pay for {matchPass.totalGames - 2} games, Play {matchPass.totalGames}{' '}
                          games
                        </Typography>
                        <Typography className={styles.price}>
                          <CurrencyRupeeIcon className={styles.currency} />
                          {matchPass.price}
                        </Typography>
                        <Typography className={styles.status}>{matchPass.status}</Typography>

                        <ul className={isPortrait ? styles.portraitDetails : styles.details}>
                          <li>
                            <SportsSoccerIcon className={styles.footballIcon} />
                            No Waitlist
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
                          {matchPass.title === 'Unlimited game pass' ? (
                            <span style={{ fontWeight: 600 }}>Best Deal</span>
                          ) : (
                            <span>For {matchPass.totalDays} Days</span>
                          )}
                        </Box>
                        <Button
                          className={styles.buyNow}
                          onClick={() =>
                            buyPass(matchPass.passId, passCity.city, passCity.currency)
                          }
                        >
                          Buy Now
                        </Button>
                      </Box>
                    ))
                  : null}
              </>
            </Box>
          </Box>
        </Zoom>
      ) : null}
    </>
  );
}

export default GamePasses;
