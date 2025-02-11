import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { appLogo } from '../../sections/Header/constants';
import mapCityData from '../matchQueues/map';
import styles from './GamePasses.module.scss';
import dummyPassData from './PassesData';
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
  description: string;
  features: string[];
};

const url =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

function GamePasses() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
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
                  features
                  description
            }
              }`,
          }),
        });
        const data = await response.json();
        const passes = data.data.passesForCity;

        mapCityData.forEach((cityData) => {
          if (Number(cityId) === Number(cityData.cityId)) {
            setPassCity({
              city: cityData.city,
              cityId: cityData.cityId,
              currency: cityData.currency,
              iconUrl: cityData.iconUrl,
            });
          }
        });
        setMatchPasses(passes);
      } catch (error) {
        setMatchPasses(dummyPassData.data.pass);
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            alert(error);
            navigate('/match-queues');
          }
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId]);

  const buyPass = (matchPassId: string, cityName: string, currencyType: string) => {
    if (userState.login.isLoggedIn) {
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

                alert(result.errors[0].message);
              }
            })
            .catch((error) => {
              alert(error);
            });
        };

        generateUrl();
      } else {
        createOrder(matchPassId, userData.email, setAmount, cityName, currencyType) // to be changed after local testing
          .then((orderId) => {
            setOrderId(orderId);
          })
          .catch((error) => {
            alert(error);
          });
      }
    } else {
      alert('Please login to proceed with the purchase.');
      navigate('/login');
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
                    <Box className={isPortrait ? styles.portraitPassCard : styles.passCard} key={i}>
                      <img src={appLogo} alt="logo" className={styles.logo} />
                      <Typography variant="h3" className={styles.title}>
                        {matchPass.title ? matchPass.title : dummyPassData.data.pass[0].title}
                      </Typography>
                      <Typography className={styles.subtitle}>
                        {matchPass.description
                          ? matchPass.description
                          : dummyPassData.data.pass[0].description}
                      </Typography>
                      <Typography className={styles.price}>
                        <CurrencyRupeeIcon className={styles.currency} />
                        {matchPass.price ? matchPass.price : dummyPassData.data.pass[0].price}
                      </Typography>
                      <Typography className={styles.status}>
                        {matchPass.status ? matchPass.status : dummyPassData.data.pass[0].status}
                      </Typography>

                      <ul className={isPortrait ? styles.portraitDetails : styles.details}>
                        {matchPass.features !== null && matchPass.features.length > 0
                          ? matchPass.features.map((feature, i) => (
                              <li key={i}>
                                <SportsSoccerIcon className={styles.footballIcon} />
                                {feature}
                              </li>
                            ))
                          : dummyPassData.data.pass[0].features.map((feature, i) => (
                              <li key={i}>
                                <SportsSoccerIcon className={styles.footballIcon} />
                                {feature}
                              </li>
                            ))}
                      </ul>
                      <Box className={styles.ribbon}>
                        {matchPass.title === 'Unlimited game pass' ? (
                          <span style={{ fontWeight: 600 }}>Best Deal</span>
                        ) : (
                          <span>
                            For{' '}
                            {matchPass.totalDays
                              ? matchPass.totalDays
                              : dummyPassData.data.pass[0].totalDays}{' '}
                            Days
                          </span>
                        )}
                      </Box>
                      <Button
                        className={styles.buyNow}
                        onClick={() => buyPass(matchPass.passId, passCity.city, passCity.currency)}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  ))
                : null}

              {userState.login.isAdmin && userState.login.isLoggedIn && passCity != null ? (
                <Box className={isPortrait ? styles.portraitPassCard : styles.passCard}>
                  <Chip
                    label="for testing"
                    color="primary"
                    variant="outlined"
                    className={styles.testingPurposeTag}
                  />
                  <img src={appLogo} alt="logo" className={styles.logo} />
                  <Typography variant="h3" className={styles.title}>
                    {dummyPassData.data.pass[0].title}
                  </Typography>
                  <Typography className={styles.subtitle}>
                    {dummyPassData.data.pass[0].description}
                  </Typography>
                  <Typography className={styles.price}>
                    <CurrencyRupeeIcon className={styles.currency} />
                    {dummyPassData.data.pass[0].price}
                  </Typography>
                  <Typography className={styles.status}>
                    {dummyPassData.data.pass[0].status}
                  </Typography>

                  <ul className={isPortrait ? styles.portraitDetails : styles.details}>
                    {dummyPassData.data.pass[0].features
                      ? dummyPassData.data.pass[0].features.map((feature, i) => (
                          <li key={i}>
                            <SportsSoccerIcon className={styles.footballIcon} />
                            {feature}
                          </li>
                        ))
                      : null}
                  </ul>
                  <Box className={styles.ribbon}>
                    {dummyPassData.data.pass[0].status === 'Unlimited game pass' ? (
                      <span style={{ fontWeight: 600 }}>Best Deal</span>
                    ) : (
                      <span>For {dummyPassData.data.pass[0].totalDays} Days</span>
                    )}
                  </Box>
                  <Button
                    className={styles.buyNow}
                    onClick={() =>
                      buyPass(dummyPassData.data.pass[0].passId, passCity.city, passCity.currency)
                    }
                  >
                    Buy Now
                  </Button>
                </Box>
              ) : null}
            </>
          </Box>
        </Box>
      </Zoom>
    </>
  );
}

export default GamePasses;
