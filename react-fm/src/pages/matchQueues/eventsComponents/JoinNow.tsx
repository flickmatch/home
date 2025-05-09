import type { FC } from 'react';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CelebrationIcon from '@mui/icons-material/Celebration';
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
import Swal from 'sweetalert2';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';
import type { RootState } from '@/store/types';

import { apiUrl } from '../constants';
import type { EventDetails } from '../types/Events.types';
import styles from './Events.module.scss';
import { JoinNowPayLater } from './JoinNowPayLater';
import { createOrder, displayRazorpay } from './RazorPay';
import { checkoutProducts } from './Stripe';

const url =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

type subscriptionType = {
  subscriptionId: string;
  passId: string;
  userId: string;
  expiryDate: number;
  creditsLeft: number;
  status: string;
  cityId: number;
};

export const JoinNow: FC<EventDetails> = ({
  reservedPlayersCount,
  reservedPlayersList,
  waitListPlayers,
  waitListPlayersCount,
  venueName,
  uniqueEventId,
  handlePassName,
  addPlayerInQueue,
  cityId,
  credits,
  team_division,
  team1_color,
  team2_color,
  venuePinCode,
  paymentMethods,
  //singleEvent,
}) => {
  const [, notificationsActions] = useNotifications();
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const [currency, setCurrencyCode] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [orderId, setOrderId] = useState('');
  const [razorPay, setRazorPay] = useState(false);
  const [stripe, setStripe] = useState(false);
  const [value, setValue] = useState(1);
  const [names, setNames] = useState<Array<string>>([]);
  const [amount, setAmount] = useState(0);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [teamAData, setTeamAData] = useState({ color: '', totalPlayers: 0 });
  const [teamBData, setTeamBData] = useState({ color: '', totalPlayers: 0 });
  const [activeSubscriptonData, setActiveSubscriptionData] = useState<subscriptionType>({
    subscriptionId: '',
    passId: '',
    userId: '',
    expiryDate: 0,
    creditsLeft: 0,
    status: '',
    cityId: 0,
  });
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [openJoinModal, setOpenJoinModal] = useState(false);

  const openSpots = reservedPlayersCount - reservedPlayersList.length;
  const openWaitList = waitListPlayersCount - waitListPlayers.length;
  const [teamColor, setTeamColor] = useState('');
  const userState = useSelector((state: RootState) => state);
  // console.log(userState.login.isAdmin);

  useEffect(() => {
    if (!team1_color || !team2_color) return;
    const { teamAplayers, teamBplayers } = reservedPlayersList.reduce(
      (acc, player) => {
        if (player.teamColor === team1_color) {
          acc.teamAplayers++;
        } else {
          acc.teamBplayers++;
        }
        return acc;
      },
      { teamAplayers: 0, teamBplayers: 0 },
    );

    setTeamAData({ color: team1_color, totalPlayers: teamAplayers });
    setTeamBData({ color: team2_color, totalPlayers: teamBplayers });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleColorChange = (event: { target: { value: string } }) => {
    setTeamColor(event.target.value);
  };

  const currencyFromCity = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query City {
        city(cityId: ${cityId}) {
        cityId
        cityName
        localTimeZone
        countryCode
        iconUrl
    }
  }`,
      }),
    });

    const data = await response.json();
    setCurrencyCode(data.data.city.countryCode);
  };

  useEffect(() => {
    const googleUserInfo = localStorage.getItem('userData');
    if (googleUserInfo) {
      const data = JSON.parse(googleUserInfo);
      setUserData({ name: data.name, email: data.email, phoneNumber: '' });
    }

    currencyFromCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservedPlayersList]);

  const checkActiveSubscription = async (email: string) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query HasActiveSubscription { hasActiveSubscription(email: "${email}") }`,
        }),
      });
      const data = await response.json();
      setHasSubscription(data.data.hasActiveSubscription);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error checking active subscription:', error);
    }
  };

  const fetchActiveSubscriptionData = async (email: string) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query GetActiveSubscription {
            getActiveSubscription(email: "${email}") {
              subscriptionId passId userId expiryDate creditsLeft status cityId
            }
          }`,
        }),
      });
      const data = await response.json();
      setActiveSubscriptionData(data.data.getActiveSubscription);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching subscription data:', error);
    }
  };

  useEffect(() => {
    if (userData.email) {
      checkActiveSubscription(userData.email);
    }
  }, [userData.email]);

  useEffect(() => {
    if (hasSubscription && userData.email) {
      fetchActiveSubscriptionData(userData.email);
    }
  }, [hasSubscription, userData.email]);

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
                teamColor: "${teamColor}"
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
            Swal.fire({
              title: 'Game Joined Successfully',
              text: 'Your name is successfully added to the event.',
              icon: 'success',
            }).then(() => {
              navigate(`/match-queues#${uniqueEventId}`);
            });
          }
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const joinWithPass = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    history.replaceState(null, '', `#${uniqueEventId}`);

    if (userData.name) {
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation UpdateSubscription($input: UpdateSubscriptionInput!) {
          updateSubscription(input: $input) {
              isSuccessful
              errorMessage
          }
      }`,
          variables: {
            input: {
              subscriptionId: activeSubscriptonData.subscriptionId,
              credits: credits,
            },
          },
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.data.updateSubscription.errorMessage) {
            return alert(result.data.updateSubscription.errorMessage);
          }
          joinGameViaSubscription();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
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
    const objectArray = namesArray.map((name) => ({
      waNumber: phoneNumber,
      name: name,
      email: email,
    }));

    const emptyName = namesArray.filter((item) => item.trim() == '');

    if (emptyName.length > 0 || email === '' || phoneNumber === '') {
      alert('Please fill all the details');
    } else if (namesArray.length > openSpots) {
      alert(`Names are more than openspots. Only ${openSpots} players are required`);
    } else if (team_division && teamColor == '') {
      alert('Please select a team color.');
    } else {
      setOpen(false);

      if (!razorPay && !stripe) {
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
                          .map(
                            (obj) =>
                              `{ waNumber: "${obj.waNumber}", name: "${obj.name}",teamColor: "${teamColor}",email:"${obj.email}" }`,
                          )
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
      } else if (razorPay) {
        // createOrder('2-2024-07-11-1', objectArray, setAmount, currency || 'INR', email) // to be changed after local testing
        createOrder(
          // '2-2025-01-03-1',
          uniqueEventId,
          objectArray,
          setAmount,
          currency || 'INR',
          email,
          userData.phoneNumber,
          teamColor,
          venuePinCode || '',
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
      } else if (stripe) {
        checkoutProducts(
          // '2-2025-01-03-1',
          uniqueEventId,
          objectArray,
          setAmount,
          currency || 'INR',
          email,
          userData.phoneNumber,
          teamColor,
          venuePinCode || '',
        )
          .then((res: { sessionId: string; sessionUrl: string }) => {
            setOpen(false);
            openInNewTab(res.sessionUrl);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }
    }
  };

  const isUserLoggedIn = () => {
    if (userData.name) {
      setShowPaymentOptions(true);
    } else {
      navigate('/login', {
        state: {
          from: `/event/${uniqueEventId}`,
        },
      });
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

  const handleOpen = (eventId: string) => {
    history.replaceState(null, '', `#${eventId}`);
    setSelectedEventId(eventId);
    setOpenJoinModal((prevState) => !prevState);
  };

  const handleToggle = () => {
    if (selectedEventId) {
      handleOpen(selectedEventId);
    }
  };

  const passName = (name: string) => {
    if (addPlayerInQueue) {
      addPlayerInQueue(name);
    }
  };

  //console.log(activeSubscriptonData.cityId, cityId, activeSubscriptonData);
  // console.log(team1_color, team2_color, team_division);

  return (
    <>
      {openWaitList > 0 ? (
        <>
          {!showPaymentOptions ? (
            <Box className={isPortrait ? styles.portraitJoinNowContainer : styles.joinNowContainer}>
              <JoinNowPayLater
                isOpen={openJoinModal}
                onToggle={handleToggle}
                uniqueEventId={selectedEventId ? selectedEventId : ''}
                cityId={cityId ? cityId : ''}
                handlePassName={passName}
                team1_color={team1_color ? team1_color : ''}
                team2_color={team2_color ? team2_color : ''}
              />
              {userState.login.isAdmin ? (
                <Button
                  className={isPortrait ? styles.portraitGetPassButton : styles.getPassButton}
                  startIcon={<CelebrationIcon />}
                  variant="contained"
                  onClick={() => handleOpen(uniqueEventId)}
                >
                  Pay Later
                </Button>
              ) : null}
              {hasSubscription &&
              activeSubscriptonData &&
              Number(activeSubscriptonData.cityId) === Number(cityId) &&
              Number(activeSubscriptonData.creditsLeft) > Number(credits) ? (
                <Button
                  className={isPortrait ? styles.portraitGetPassButton : styles.getPassButton}
                  startIcon={<LocalOfferIcon />}
                  variant="contained"
                  onClick={joinWithPass}
                >
                  Join with pass
                </Button>
              ) : (
                <Button
                  className={isPortrait ? styles.portraitGetPassButton : styles.getPassButton}
                  startIcon={<LocalOfferIcon />}
                  variant="contained"
                  onClick={() => navigate(`/game-passes/${cityId}`)}
                >
                  Get pass
                </Button>
              )}
              {!hasSubscription &&
              Number(activeSubscriptonData.cityId) === Number(cityId) &&
              Number(activeSubscriptonData.creditsLeft) < Number(credits) ? null : (
                <Button variant="contained" onClick={isUserLoggedIn}>
                  Pay to Join
                </Button>
              )}
            </Box>
          ) : null}

          {showPaymentOptions ? (
            <FlexBox className={isPortrait ? styles.paymentOptionsPortrait : styles.paymentOptions}>
              {userState.login.isAdmin && paymentMethods?.includes('phonepe') && (
                <Button
                  variant="contained"
                  startIcon={<Icon icon="simple-icons:phonepe" color="navy" />}
                  className={isPortrait ? '' : styles.payViaUpi}
                  onClick={handleClickOpen}
                  // style={{ display: 'none' }}
                >
                  UPI
                </Button>
              )}
              {userState.login.isAdmin && (
                <Button
                  variant="contained"
                  startIcon={
                    <CreditCardIcon />
                    // <Icon icon="simple-icons:stripe" color="navy" style={{ fontSize: 16 }} />
                  }
                  className={isPortrait ? '' : styles.payViaCard}
                  onClick={() => {
                    setStripe(true);
                    setOpen(true);
                  }}
                  style={{ display: 'none' }}
                >
                  Pay via card
                </Button>
              )}
              {paymentMethods?.includes('razorpay') && (
                <Button
                  variant="contained"
                  className={styles.payViaRazorpay}
                  startIcon={
                    <Icon icon="simple-icons:razorpay" color="navy" style={{ fontSize: 16 }} />
                  }
                  onClick={() => {
                    setRazorPay(true);
                    setOpen(true);
                  }}
                >
                  Pay Now
                </Button>
              )}
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

                {team_division && (
                  <Box mt={2}>
                    <div className={styles.playersNumber}>
                      <InputLabel id="team-color-select-label">Select Team Color</InputLabel>
                      <Select
                        labelId="team-color-select-label"
                        id="team-color-select"
                        value={teamColor}
                        onChange={handleColorChange}
                        variant="standard"
                      >
                        {teamAData.color === team1_color &&
                        reservedPlayersCount / 2 - teamAData.totalPlayers > 0 ? (
                          <MenuItem value={team1_color}>{team1_color}</MenuItem>
                        ) : null}
                        {teamBData.color === team2_color &&
                        reservedPlayersCount / 2 - teamBData.totalPlayers > 0 ? (
                          <MenuItem value={team2_color}>{team2_color}</MenuItem>
                        ) : null}
                      </Select>
                    </div>
                  </Box>
                )}
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
