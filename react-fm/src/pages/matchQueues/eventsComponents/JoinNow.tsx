import { useEffect, useState } from 'react';
import type { FC } from 'react';
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LockIcon from '@mui/icons-material/Lock';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import { Icon } from '@iconify/react';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';

import { apiUrl } from '../constants';
import mapCityData from '../map';
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { createOrder, displayRazorpay } from './RazorPay';

const url = 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql';

type subscriptionType = {
  subscriptionId: string;
  passId: string;
  userId: string;
  expiryDate: number;
  gamesLeft: number;
  status: string;
  cityId: number;
};

export const JoinNow: FC<EventDetails> = ({
  stripePaymentUrl,
  reservedPlayersCount,
  reservedPlayersList,
  waitListPlayers,
  waitListPlayersCount,
  venueName,
  uniqueEventId,
  eventId,
  handlePassName,
  cityId,
  //singleEvent,
}) => {
  const [, notificationsActions] = useNotifications();
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [orderId, setOrderId] = useState('');
  const [razorPay, setRazorPay] = useState(false);
  const [value, setValue] = useState(1);
  const [names, setNames] = useState<Array<string>>([]);
  const [amount, setAmount] = useState(0);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [activeSubscriptonData, setActiveSubscriptionData] = useState<subscriptionType>({
    subscriptionId: '',
    passId: '',
    userId: '',
    expiryDate: 0,
    gamesLeft: 0,
    status: '',
    cityId: 0,
  });

  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;

  useEffect(() => {
    const googleUserInfo = localStorage.getItem('userData');
    if (googleUserInfo) {
      const data = JSON.parse(googleUserInfo);
      setUserData({ name: data.name, email: data.email, phoneNumber: '' });
    }
  }, []);

  useEffect(() => {
    if (userData.email) {
      const fetchData = async () => {
        const query = JSON.stringify({
          query: `query HasActiveSubscription {
        hasActiveSubscription(email: "${userData.email}")
          }`,
        });

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: query,
          });
          const data = await response.json();

          setHasSubscription(data.data.hasActiveSubscription);
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
    }
  }, [userData.email]);

  useEffect(() => {
    const getAcitveSubscription = async () => {
      const getSubscription = JSON.stringify({
        query: `query GetActiveSubscription {
        getActiveSubscription(email: "kshitij@flickmatch.in") {
        subscriptionId
        passId
        userId
        expiryDate
        gamesLeft
        status
    }}`,
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: getSubscription,
        });
        const subscriptions = await response.json();

        setActiveSubscriptionData(subscriptions.data.getActiveSubscription);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        }
      }
    };

    if (hasSubscription) {
      getAcitveSubscription();
    }
  }, [hasSubscription]);

  const openInNewTab = (url: string): void => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'Game Joined',
    });
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

    if (newWindow) newWindow.opener = null;
  };

  function showNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="info">
            <AlertTitle className={styles.alertTitle}>Message from {venueName}</AlertTitle>
            Event Full! Please check other events.
          </Alert>
        ),
      },
    });
  }

  const getCurrency = () => {
    let currency = 'INR';
    mapCityData.forEach((cityData) => {
      // console.log(cityData.currency);
      if (cityData.city === eventId) {
        currency = cityData.currency;
      }
    });
    return currency;
  };

  const currency = getCurrency();

  const handleEmail = (e: { target: { value: string } }) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handleNumber = (e: { target: { value: string } }) => {
    setUserData({ ...userData, phoneNumber: e.target.value });
  };

  const joinGameViaSubscription = () => {
    fetch('https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
        joinEvent(input: {
              uniqueEventId: "${uniqueEventId}"
              cityId: "${cityId}"
              player: {
                waNumber: "${userData.phoneNumber}"
                name: "${userData.name}"
            }
        }) {
          isSuccessful
        }
    }`,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          // Handle GraphQL errors
          alert(result.errors[0].message);
        } else {
          if (handlePassName) {
            handlePassName(userData.name);
          }
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const paymentOptions = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    history.replaceState(null, '', `#${uniqueEventId}`);

    if (userData.name) {
      if (
        hasSubscription &&
        activeSubscriptonData.gamesLeft > 0 &&
        activeSubscriptonData.cityId === Number(cityId)
      ) {
        // eslint-disable-next-line no-console
        console.log('Event Joined');

        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `mutation UpdateSubscription {
          updateSubscription(subscriptionId: "${activeSubscriptonData.subscriptionId}") {
              isSuccessful
              errorMessage
          }
      }`,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.errors) {
              // Handle GraphQL errors
              alert(result.errors[0].message);
              throw new Error(result.errors[0].message);
            }
            // eslint-disable-next-line no-console
            console.log(result.data);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
        joinGameViaSubscription();
      } else {
        setShowPaymentOptions(true);
      }
    } else {
      navigate('/login');
    }
  };

  const handleClickOpen = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleNameChange = (index: number, newName: string) => {
    const lettersRegex = /^[A-Za-z\s]*$/;
    if (!lettersRegex.test(newName)) {
      // newName contains invalid characters (numbers)
      alert('Only letters are allowed.');
      return;
    }
    setNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = newName;
      return newNames;
    });
  };

  const userInput = {
    input: {
      uniqueEventId: uniqueEventId,
      playerInputList: [{ waNumber: userData.phoneNumber, name: userData.name }],
    },
  };

  const handlePay = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    const { email, phoneNumber }: { email: string; phoneNumber: string } = userData;

    //setting names into array for multiple slots payment.
    const namesArray = names;
    const objectArray = namesArray.map((name) => ({ waNumber: phoneNumber, name: name }));

    const emptyName = namesArray.filter((item) => item.trim() == '');

    if (emptyName.length > 0 || email === '' || phoneNumber === '') {
      alert('Please fill all the details');
    } else if (namesArray.length > openSpots) {
      alert(`Names are more than openspots. Only ${openSpots} players are required`);
    } else {
      setOpen(false);

      if (!razorPay) {
        const generateUrl = () => {
          fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `mutation InitiatePayment {
                initiatePayment(
                    input: {
                        uniqueEventId: "${uniqueEventId}"
                        playerInputList: [${objectArray
                          .map((obj) => `{ waNumber: "${obj.waNumber}", name: "${obj.name}" }`)
                          .join(',')}] 
                    }
                ) {
                    isInitiated
                    paymentLink
                }
            }`,
              variables: userInput.input,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.errors) {
                // Handle GraphQL errors
                throw new Error(result.errors[0].message);
              }
              const paymentUrl = result.data.initiatePayment.paymentLink;
              window.open(paymentUrl, '_self');
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error);
            });
        };

        generateUrl();
      } else {
        // createOrder('2-2024-07-11-1', objectArray, setAmount, currency || 'INR', email) // to be changed after local testing
        createOrder(
          uniqueEventId,
          objectArray,
          setAmount,
          currency || 'INR',
          email,
          userData.phoneNumber,
        ) // to be changed after local testing
          .then((orderId) => {
            setOrderId(orderId);
            setOpen(false);
            setShowPaymentOptions(false);
            setValue(1);
            setNames(['']);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }
    }
  };

  const handleClose = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setOpen(false);
    setShowPaymentOptions(false);
    setValue(1);
    setNames(['']);
  };

  const onModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
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
      {openWaitList > 0 ? (
        <>
          {!showPaymentOptions ? (
            <Box className={isPortrait ? styles.portraitJoinNowContainer : styles.joinNowContainer}>
              <Button
                className={isPortrait ? styles.portraitGetPassButton : styles.getPassButton}
                startIcon={<LocalOfferIcon />}
                variant="contained"
                onClick={() => navigate('/game-passes')}
              >
                Get Pass
              </Button>
              <Button variant="contained" onClick={paymentOptions}>
                Join {stripePaymentUrl && openSpots > 0 ? 'Game' : 'Waitlist'}
              </Button>
            </Box>
          ) : null}

          {showPaymentOptions ? (
            <FlexBox className={isPortrait ? styles.paymentOptionsPortrait : styles.paymentOptions}>
              <Button
                variant="contained"
                startIcon={<Icon icon="simple-icons:phonepe" color="navy" />}
                className={isPortrait ? '' : styles.payViaUpi}
                onClick={handleClickOpen}
                style={{ display: 'none' }}
              >
                UPI
              </Button>
              {stripePaymentUrl.slice(0, 5) === 'https' ? (
                <Button
                  variant="contained"
                  startIcon={
                    <CreditCardIcon />
                    // <Icon icon="simple-icons:stripe" color="navy" style={{ fontSize: 16 }} />
                  }
                  className={isPortrait ? '' : styles.payViaCard}
                  onClick={() => {
                    openInNewTab(stripePaymentUrl);
                  }}
                >
                  Pay via card
                </Button>
              ) : null}
              <Button
                variant="contained"
                // className={isPortrait ? styles.payViaRazorpay : ''}
                className={styles.payViaRazorpay}
                startIcon={
                  <Icon icon="simple-icons:razorpay" color="navy" style={{ fontSize: 16 }} />
                }
                onClick={() => {
                  setRazorPay(true);
                  setOpen(true);
                }}
              >
                Pay via UPI
              </Button>
            </FlexBox>
          ) : null}

          <Dialog open={open} onClose={handleClose}>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <DialogTitle>Become our standout Flickplayer</DialogTitle>
              <DialogTitle className={styles.multipleSlotsText}>
                Book multiple slots by entering names
              </DialogTitle>
              <DialogContent>
                <div className={styles.playersNumber}>
                  <InputLabel id="demo-simple-select-label">Number of Players</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    variant="standard"
                    onChange={(e) => {
                      const selectedValue = Number(e.target.value);
                      setValue(selectedValue);
                      setNames(Array.from({ length: selectedValue }, () => ''));
                    }}
                  >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map((value, idx) => (
                      <MenuItem key={idx} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className={styles.playerInputs}>
                  {Array.from({ length: value }, (_, index) => index + 1).map((_, idx) => (
                    <TextField
                      key={idx}
                      required
                      autoFocus
                      margin="dense"
                      name="name"
                      id={`name_${idx}`}
                      label={`Name of Player ${idx + 1}`}
                      value={names[idx] || ''}
                      type="text"
                      autoComplete="none"
                      variant="standard"
                      onChange={(e) => {
                        handleNameChange(idx, e.target.value);
                      }}
                      onClick={onModalClick}
                    />
                  ))}
                </div>
                <TextField
                  required
                  margin="dense"
                  name="email"
                  id="email"
                  label="Email Address"
                  type="email"
                  value={userData.email}
                  autoComplete="none"
                  fullWidth
                  variant="standard"
                  onChange={handleEmail}
                  onClick={onModalClick}
                />
                <TextField
                  required
                  margin="dense"
                  name="number"
                  id="number"
                  label="Phone Number"
                  type="number"
                  autoComplete="none"
                  fullWidth
                  variant="standard"
                  onChange={handleNumber}
                  onClick={onModalClick}
                />
              </DialogContent>
              <DialogActions>
                <Button className={styles.cancel} onClick={handleClose}>
                  Cancel
                </Button>
                <Button className={styles.pay} onClick={handlePay}>
                  Pay
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </>
      ) : (
        <Tooltip title="Event Locked" arrow>
          <LockIcon onClick={showNotification} className={styles.lock} />
        </Tooltip>
      )}
    </>
  );
};
