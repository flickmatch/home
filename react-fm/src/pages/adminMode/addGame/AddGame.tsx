import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import { InputAdornment, Switch } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import { parseInt } from 'lodash';
import Swal from 'sweetalert2';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';
import type { RootState } from '@/store/types';

import { getEventById } from '../../matchQueues/constants';
import { query } from '../../matchQueues/constants';
import type { CityDetails, SportsVenues } from '../../matchQueues/types/Events.types';
import styles from './AddGame.module.scss';
import { apiUrl, gameQueuesApiUrl } from './constants';

function AddGame() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [, notificationsActions] = useNotifications();

  const [cityName, setCityName] = useState('');
  const [turfName, setTurfName] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [charges, setCharges] = useState('');
  const [currencyType, setCurrencyType] = useState('');
  const [playersCount, setPlayersCount] = useState('');
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [sportsVenues, setSportsVenues] = useState<SportsVenues[]>([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [credits, setCredits] = useState('');
  const [testGame, setTestGame] = useState(false);
  const [teamDivision, setTeamDivision] = useState(true);
  const [team1Color, setTeam1Color] = useState('Bibs');
  const [team2Color, setTeam2Color] = useState('No Bibs');
  const [error, setError] = useState<string | null>(null);

  const userState = useSelector((state: RootState) => state);

  useEffect(() => {
    if (id) {
      getEventById(id, setError)
        .then((eventDetails) => {
          if (eventDetails) {
            const eventCityId = id.charAt(0);

            setCityName(eventCityId);
            fetchSportsTurf(eventCityId);

            setCharges(eventDetails.charges.toString());
            setCredits(eventDetails.credits != null ? eventDetails.credits.toString() : '');
            setMapLink(eventDetails.venueLocationLink);
            setTurfName(eventDetails.venueName);
            setPlayersCount(eventDetails.reservedPlayersCount.toString());
            setTeam1Color(
              eventDetails.team1Color !== undefined ? eventDetails.team1Color : team1Color,
            );
            setTeam2Color(
              eventDetails.team2Color !== undefined ? eventDetails.team2Color : team2Color,
            );
            setTeamDivision(
              eventDetails.teamDivision !== undefined ? eventDetails.teamDivision : teamDivision,
            );
          } else {
            // eslint-disable-next-line no-console
            console.error(`No event found with ID: ${id}`);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!userState.login.isAdmin) {
      Swal.fire({
        title: 'Unauthorized Access',
        text: 'You are not authorized to view this page.',
        icon: 'error',
      }).then(() => {
        navigate('/match-queues');
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState.login.isAdmin, navigate]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(gameQueuesApiUrl, {
          method: 'POST',
          signal: signal,
          headers: {
            'Content-Type': 'application/json',
          },
          body: query,
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  const fetchSportsTurf = (cityId: string) => {
    const fetchData = async () => {
      try {
        const response = await fetch(gameQueuesApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query {
              city(cityId: "${cityId}") {
                cityId
                cityName
                sportsVenues {
                  sportsVenueId
                  displayName
                  googleMapsLink
                  availableSportsIds
                  pinCode
                }      
              }
            }`,
          }),
        });

        const data = await response.json();

        setSportsVenues(data.data.city.sportsVenues);
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
  };

  const handleCityName = async (e: SelectChangeEvent) => {
    setCityName(e.target.value);
    setMapLink('');
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query City {
        city(cityId: ${e.target.value}) {
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

    if (data.data.city.cityId === e.target.value) {
      setCurrencyType(data.data.city.countryCode);
    }
    fetchSportsTurf(e.target.value);
  };

  const handleTurfName = (e: SelectChangeEvent) => {
    setTurfName(e.target.value);
  };

  function showInfoNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="info">
            <AlertTitle className={styles.alertTitle}>
              {cityName === ''
                ? 'City name'
                : turfName === ''
                ? 'Turf name'
                : charges === ''
                ? 'Charges'
                : 'Total Players'}{' '}
              cannot be empty!
            </AlertTitle>
          </Alert>
        ),
      },
    });
  }

  function showSuccessNotification(responsePrompt: string) {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="success">
            <AlertTitle className={styles.alertTitle}>{responsePrompt}</AlertTitle>
          </Alert>
        ),
      },
    });
  }

  function showErrorNotification(error: string) {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="error">
            <AlertTitle className={styles.alertTitle}>{error}</AlertTitle>
          </Alert>
        ),
      },
    });
  }

  const userInput = {
    input: {
      cityId: cityName,
      charges: parseInt(charges),
      sportsVenueId: turfName,
      startTime: startTime,
      endTime: endTime,
      reservedPlayersCount: parseInt(playersCount),
      waitListPlayersCount: parseInt(playersCount) / 2,
    },
  };

  const addGame = () => {
    if (cityName === '' || turfName === '' || charges === '' || playersCount === '') {
      showInfoNotification();
    } else if (teamDivision && (team1Color === '' || team2Color === '')) {
      Swal.fire({
        title: 'Invalid Selection',
        text: 'Please select team colors for both teams!',
        icon: 'warning',
      });
    } else {
      fetch(apiUrl, {
        // fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation {
            createEvent(
                  input: {
                      cityId: "${cityName}"
                      charges: ${parseInt(charges)}
                      sportsVenueId: "${turfName}"
                      startTime: "${startTime + '+0530'}"
                      endTime: "${endTime + '+0530'}"
                      reservedPlayersCount: ${parseInt(playersCount)}
                      waitListPlayersCount: ${parseInt(playersCount) / 2}
                      credits: ${Number(credits)}
                      testGame: ${testGame}
                      teamDivision: ${teamDivision}
                      team1Color: "${team1Color}"
                      team2Color: "${team2Color}"
                  }
              ) {
                isSuccessful
                errorMessage
              }
          }`,
          variables: userInput.input,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.data.createEvent.isSuccessful === false) {
            showErrorNotification(result.data.createEvent.errorMessage);
          } else {
            showSuccessNotification('Game Added Successfully');
            navigate('/match-queues');
          }
        })
        .catch((error) => {
          showErrorNotification(error.message);
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  };

  const updateEventDetails = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation UpdateEventDetails {
      updateEventDetails(input: { uniqueEventId: "${id}", reservedPlayersCount :${parseInt(
          playersCount,
        )}, 
      waitListPlayersCount : ${parseInt(playersCount) / 2}, charges: ${parseInt(charges)}
       }) {
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
        } else {
          if (result.data.updateEventDetails.isSuccessful === false) {
            showErrorNotification(result.data.createEvent.errorMessage);
          } else {
            showSuccessNotification('Game Updated Successfully');
            navigate(`/match-queues#${id}`);
          }
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const sectionFirst = () => (
    <Box className={styles.sectionFirst}>
      <Typography className={styles.fieldTitle}>City Name</Typography>
      <AccountBalanceIcon className={styles.fieldTitleIcon} />

      <FormControl className={styles.selectInput}>
        <Select
          id="demo-simple-select-autowidth"
          value={cityName}
          onChange={handleCityName}
          style={{ width: '100%' }}
        >
          {citiesData?.map((city, i) => (
            <MenuItem value={city.cityId} key={i} style={{ width: '100%' }}>
              {city.cityName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  const sectionSecond = () => (
    <Box className={styles.sectionSecond}>
      <Typography className={styles.fieldTitle}>Turf Name</Typography>
      <RoundedCornerOutlinedIcon className={styles.fieldTitleIcon} />

      <FormControl className={styles.selectInput}>
        <Select
          id="demo-simple-select-autowidth"
          value={turfName}
          onChange={handleTurfName}
          style={{ width: '100%' }}
        >
          {sportsVenues?.map((venue, i) => (
            <MenuItem
              value={venue.sportsVenueId}
              key={i}
              style={{ width: '100%' }}
              onClick={() => setMapLink(venue.googleMapsLink)}
            >
              {venue.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  const sectionThird = () => (
    <Box className={styles.sectionThird}>
      <Typography className={styles.fieldTitle}>Google Map Link</Typography>
      <CrisisAlertOutlinedIcon className={styles.fieldTitleIcon} />
      <TextField
        fullWidth
        value={mapLink}
        onChange={(e) => setMapLink(e.target.value)}
        placeholder="G-Map Link"
        id="fullWidth"
      />
    </Box>
  );

  const sectionDatetime = () => (
    <FlexBox className={isPortrait ? styles.portraitSectionThird : styles.sectionThird}>
      <Box className={isPortrait ? styles.portaitDateTimePicker : styles.dateTimePicker}>
        <FlexBox className={styles.startTimePicker}>
          <Box>
            <Typography className={styles.fieldTitle}>Start Time</Typography>
            <AccessTimeIcon className={styles.fieldTitleIcon} />
          </Box>
          <input
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
            className={styles.selectStartTimeInput}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </FlexBox>
      </Box>

      <Box className={isPortrait ? styles.portaitDateTimePicker : styles.dateTimePicker}>
        <FlexBox className={styles.startEndPicker}>
          <Box>
            <Typography className={styles.fieldTitle}>End Time</Typography>
            <AccessTimeIcon className={styles.fieldTitleIcon} />
          </Box>
          <input
            type="datetime-local"
            id="birthdaytime"
            name="birthdaytime"
            className={styles.selectStartTimeInput}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </FlexBox>
      </Box>
    </FlexBox>
  );

  const sectionChargesPlayers = () => (
    <FlexBox className={styles.sectionThird}>
      <Box className={styles.dateTimePicker}>
        <FlexBox className={styles.startTimePicker}>
          <Box>
            <Typography className={styles.fieldTitle}>Event Charges</Typography>
          </Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {currencyType === 'INR' ? (
                    <CurrencyRupeeSharp />
                  ) : currencyType === 'USD' ? (
                    <AttachMoneyIcon />
                  ) : null}
                </InputAdornment>
              ),
            }}
            fullWidth
            value={charges}
            onChange={(e) => {
              setCharges(e.target.value);
              setCredits(e.target.value);
            }}
            placeholder="Amount"
            id="fullWidth"
            type="number"
          />
        </FlexBox>
      </Box>

      <Box className={styles.dateTimePicker}>
        <FlexBox className={styles.startEndPicker}>
          <Box>
            <Typography className={styles.fieldTitle}>Total Players</Typography>
          </Box>
          <TextField
            fullWidth
            value={playersCount}
            onChange={(e) => setPlayersCount(e.target.value)}
            placeholder="Count"
            id="fullWidth"
            type="number"
          />
        </FlexBox>
      </Box>
    </FlexBox>
  );

  const sectionSwitch = (usecase: 'testGame' | 'teamDivision') => (
    <Box>
      <FlexBox className={styles.startEndPicker}>
        <Box>
          <Typography className={styles.fieldTitle}>
            {usecase === 'testGame' ? 'Test Game' : 'Team Division'}
          </Typography>
        </Box>
        <Switch
          className={styles.switchBtn}
          checked={usecase === 'testGame' ? testGame : teamDivision}
          onChange={() => {
            usecase === 'testGame' ? setTestGame(!testGame) : setTeamDivision(!teamDivision);
          }}
          color="default"
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#4ce95a',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#4ce95a',
            },
          }}
        />
      </FlexBox>
    </Box>
  );

  const sectionTeamColors = () => {
    const teamColors = [
      'Black',
      'White',
      'Red',
      'Blue',
      'Yellow',
      'Orange',
      'Green',
      'Light Purple',
      'Purple',
      'Bibs',
      'No Bibs',
    ];

    const handleTeam1ColorChange = (e: SelectChangeEvent<string>) => {
      const selectedColor = e.target.value as string;
      if (selectedColor === team2Color) {
        Swal.fire({
          title: 'Invalid Selection',
          text: 'Team 1 and Team 2 colors cannot be the same!',
          icon: 'warning',
        });
      } else {
        setTeam1Color(selectedColor);
      }
    };

    const handleTeam2ColorChange = (e: SelectChangeEvent<string>) => {
      const selectedColor = e.target.value as string;
      if (selectedColor === team1Color) {
        Swal.fire({
          title: 'Invalid Selection',
          text: 'Team 1 and Team 2 colors cannot be the same!',
          icon: 'warning',
        });
      } else {
        setTeam2Color(selectedColor);
      }
    };

    return (
      <FlexBox className={styles.sectionThird}>
        <Box className={styles.dateTimePicker}>
          <FlexBox className={styles.startTimePicker}>
            <Box>
              <Typography className={styles.fieldTitle}>Team 1</Typography>
            </Box>
            <FormControl fullWidth>
              <Select
                value={team1Color}
                onChange={handleTeam1ColorChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Team 1 Color' }}
              >
                <MenuItem value="" disabled>
                  Select Team 1 Color
                </MenuItem>
                {teamColors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FlexBox>
        </Box>

        <Box className={styles.dateTimePicker}>
          <FlexBox className={styles.startEndPicker}>
            <Box>
              <Typography className={styles.fieldTitle}>Team 2</Typography>
            </Box>
            <FormControl fullWidth>
              <Select
                value={team2Color}
                onChange={handleTeam2ColorChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Team 2 Color' }}
              >
                <MenuItem value="" disabled>
                  Select Team 2 Color
                </MenuItem>
                {teamColors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FlexBox>
        </Box>
      </FlexBox>
    );
  };

  const sectionFourth = () => (
    <Box className={styles.sectionFourth}>
      <Button
        variant="contained"
        color="success"
        className={styles.createButton}
        onClick={id ? updateEventDetails : addGame}
      >
        {id ? 'Update' : 'Add'} Game
      </Button>
    </Box>
  );

  return (
    <>
      <Meta title="Add Game" />

      {userState.login.isAdmin && userState.login.isLoggedIn ? (
        <>
          <Zoom in={true} style={{ transitionDelay: '300ms' }}>
            <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
              <Chip
                label="admin mode"
                color="primary"
                variant="outlined"
                className={styles.adminModeTag}
              />
              <Box>
                <Typography variant="h3" className={styles.title}>
                  {id ? 'Update' : 'Add'} Game
                </Typography>
                <Box className={styles.divider} />
              </Box>
              <FlexBox className={styles.formSection}>
                {sectionFirst()}
                {sectionSecond()}
                {sectionThird()}
                {sectionDatetime()}
                {sectionChargesPlayers()}

                <FlexBox className={styles.sectionThird}>
                  <Box className={styles.dateTimePicker}>
                    <FlexBox className={styles.startTimePicker}>
                      <Box>
                        <Typography className={styles.fieldTitle}>Game Credits</Typography>
                      </Box>
                      <TextField
                        fullWidth
                        value={credits}
                        disabled={true}
                        placeholder="Credits"
                        id="fullWidth"
                        type="number"
                      />
                    </FlexBox>
                  </Box>

                  {sectionSwitch('testGame')}
                  {sectionSwitch('teamDivision')}
                </FlexBox>
                {teamDivision && sectionTeamColors()}

                <br />
                {sectionFourth()}
              </FlexBox>
            </FlexBox>
          </Zoom>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AddGame;
