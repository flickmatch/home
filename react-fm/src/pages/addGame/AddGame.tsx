import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CurrencyRupeeSharp } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import { InputAdornment } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import Footer from '@/sections/Footer';
import Header from '@/sections/Header/Header';
import useNotifications from '@/store/notifications';

import { query } from '../matchQueues/constants';
import mapCityData from '../matchQueues/map';
import type { CityDetails, SportsVenues } from '../matchQueues/types/Events.types';
import styles from './AddGame.module.scss';
import { apiUrl, gameQueuesApiUrl } from './constants';

function AddGame() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const [, notificationsActions] = useNotifications();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
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

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const userData = JSON.parse(storedData);
      setIsLoggedIn(true);

      const fetchMailIds = async () => {
        const response = await fetch(
          'https://sheet.best/api/sheets/ba455ca6-e174-4ce1-870b-b2f0ed772878',
        );
        const data = await response.json();

        const check = data
          .map((mailId: { EmailId: string }) => mailId.EmailId)
          .includes(userData.email);
        setHasAccess(check);
        if (!check) {
          Swal.fire({
            title: 'Unauthorized Access',
            text: 'You are not authorized to view this page.',
            icon: 'error',
          }).then(() => {
            navigate('/match-queues');
          });
        }
      };

      fetchMailIds();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleCityName = (e: SelectChangeEvent) => {
    setCityName(e.target.value);
    setMapLink('');
    mapCityData.forEach((data) => {
      if (data.cityId === parseInt(e.target.value)) {
        setCurrencyType(data.currency);
      }
    });
    fetchSportsTurf(e.target.value);
  };

  const handleTurfName = (e: SelectChangeEvent) => {
    setTurfName(e.target.value);
  };

  function showErrorNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="error">
            <AlertTitle className={styles.alertTitle}>
              {cityName === ''
                ? 'City Name'
                : turfName === ''
                ? 'Turf Name'
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

  function showSuccessNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="success">
            <AlertTitle className={styles.alertTitle}>Turf Added Successfully</AlertTitle>
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

  const addTurf = () => {
    if (cityName === '' || turfName === '' || charges === '' || playersCount === '') {
      showErrorNotification();
    } else {
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation {
            createEvent(
                  input: {
                      cityId: "${cityName}"
                      charges: ${parseInt(charges)},
                      sportsVenueId: "${turfName}",
                      startTime: "${startTime + '+0530'}",
                      endTime: "${endTime + '+0530'}",
                      reservedPlayersCount: ${parseInt(playersCount)},
                      waitListPlayersCount: ${parseInt(playersCount) / 2},
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
          if (result.errors) {
            // Handle GraphQL errors
            throw new Error(result.errors[0].message);
          } else {
            showSuccessNotification();
            navigate('/match-queues');
          }
          // eslint-disable-next-line no-console
          console.log(result.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
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
          {citiesData.map((city, i) => (
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
          {sportsVenues.map((venue, i) => (
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
            onChange={(e) => setCharges(e.target.value)}
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

  const sectionFourth = () => (
    <Box className={styles.sectionFourth}>
      <Button variant="contained" color="success" className={styles.createButton} onClick={addTurf}>
        Add Game
      </Button>
    </Box>
  );

  return (
    <>
      <Meta title="Add Game" />
      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
      {hasAccess ? (
        <>
          <Zoom in={true} style={{ transitionDelay: '300ms' }}>
            <FlexBox className={isPortrait ? styles.portraitContainere : styles.container}>
              <Box>
                <Typography variant="h3" className={styles.title}>
                  Add Game
                </Typography>
                <Box className={styles.divider} />
              </Box>
              <FlexBox className={styles.formSection}>
                {sectionFirst()}
                {sectionSecond()}
                {sectionThird()}
                {sectionDatetime()}
                {sectionChargesPlayers()}
                {sectionFourth()}
              </FlexBox>
            </FlexBox>
          </Zoom>

          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AddGame;
