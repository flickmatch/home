import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
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

import Swal from 'sweetalert2';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useNotifications from '@/store/notifications';
import type { RootState } from '@/store/types';

import { query } from '../../matchQueues/constants';
import type { CityDetails, SportsVenues } from '../../matchQueues/types/Events.types';
import styles from './AddTurf.module.scss';
import { apiUrl, gameQueuesApiUrl } from './constants';

// const mailSheet = import.meta.env.VITE_GOOGLE_SHEET_API;
function AddTurfPage() {
  const [, notificationsActions] = useNotifications();
  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const userState = useSelector((state: RootState) => state);
  // const [hasAccess, setHasAccess] = useState(false);
  const [cityName, setCityName] = useState('');
  const [turfName, setTurfName] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [sportsVenues, setSportsVenues] = useState<SportsVenues[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    if (!userState.login.isAdmin) {
      Swal.fire({
        title: 'Unauthorized Access',
        text: 'You are not authorized to view this page.',
        icon: 'error',
      }).then(() => {
        navigate('/match-queues');
      });
    }
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

  function showInforNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="info">
            <AlertTitle className={styles.alertTitle}>
              {cityName === '' ? 'City Name' : turfName === '' ? 'Turf Name' : 'Google Map field'}{' '}
              cannot be empty!
            </AlertTitle>
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
    fetchSportsTurf(e.target.value);
  };

  const handleTurfName = (e: { target: { value: string } }) => {
    setTurfName(e.target.value);
  };

  const handleMapLink = (e: { target: { value: string } }) => {
    setMapLink(e.target.value);
  };
  const handlePinCode = (e: { target: { value: string } }) => {
    const value = e.target.value;

    const regex = /^\d+$/;

    if (regex.test(value) || value === '') {
      setPinCode(value);
    } else {
      showErrorNotification('Pin code should only contain numbers!');
    }
  };

  const userInput = {
    input: {
      cityId: cityName,
      displayName: turfName,
      googleMapsLink: mapLink,
      stripePaymentLinks: [],
    },
  };

  const addTurf = () => {
    if (cityName === '' || mapLink === '' || turfName === '') {
      showInforNotification();
    } else {
      if (sportsVenues.some((venue) => Object.values(venue).includes(turfName))) {
        return showErrorNotification('Turf already exists!');
      } else {
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `mutation {
              createSportsVenue(
                    input: {
                        cityId: "${cityName}"
                        displayName: "${turfName}"
                        googleMapsLink: "${mapLink}"
                        stripePaymentLinks: []
                        pinCode: "${pinCode}"
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
              setTurfName('');
              setMapLink('');
              navigate('/match-queues');
            }
          })
          .catch((error) => {
            showErrorNotification(error.message);
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }
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
      <TextField
        fullWidth
        value={turfName}
        onChange={handleTurfName}
        placeholder="Turf Name"
        id="fullWidth"
      />
    </Box>
  );

  const sectionThird = () => (
    <>
      <Box className={styles.sectionThird}>
        <Typography className={styles.fieldTitle}>Google Map Link</Typography>
        <CrisisAlertOutlinedIcon className={styles.fieldTitleIcon} />
        <TextField
          fullWidth
          value={mapLink}
          onChange={handleMapLink}
          placeholder="G-Map Link"
          id="fullWidth"
        />
      </Box>
      <Box className={styles.sectionThird}>
        <Typography className={styles.fieldTitle}>Pin Code</Typography>
        <MyLocationIcon className={styles.fieldTitleIcon} />
        <TextField
          fullWidth
          value={pinCode}
          onChange={handlePinCode}
          placeholder="Pin Code"
          id="fullWidth"
        />
      </Box>
    </>
  );

  const sectionFourth = () => (
    <Box className={styles.sectionFourth}>
      <Button variant="contained" color="success" className={styles.createButton} onClick={addTurf}>
        Create
      </Button>
    </Box>
  );

  return (
    <>
      <Meta title="Add Turf" />

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
                  Add Turf
                </Typography>
                <Box className={styles.divider} />
              </Box>
              <FlexBox className={styles.formSection}>
                {sectionFirst()}
                {sectionSecond()}
                {sectionThird()}
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

export default AddTurfPage;
