import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
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
import Footer from '@/sections/Footer';
import Header from '@/sections/Header/Header';
import useNotifications from '@/store/notifications';

import { query } from '../matchQueues/constants';
import type { CityDetails, SportsVenues } from '../matchQueues/types/Events.types';
import styles from './AdminPage.module.scss';
import { apiUrl, gameQueuesApiUrl } from './constants';

function AdminPage() {
  const [, notificationsActions] = useNotifications();
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [cityName, setCityName] = useState('');
  const [turfName, setTurfName] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [sportsVenues, setSportsVenues] = useState<SportsVenues[]>([]);
  const mailSheet = import.meta.env.VITE_MAIL_SHEET;

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const userData = JSON.parse(storedData);

      setIsLoggedIn(true);

      const fetchMailIds = async () => {
        const response = await fetch(`${mailSheet}`);
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

  function showErrorNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="error">
            <AlertTitle className={styles.alertTitle}>
              {cityName === '' ? 'City Name' : turfName === '' ? 'Turf Name' : 'Google Map field'}{' '}
              cannot be empty!
            </AlertTitle>
          </Alert>
        ),
      },
    });
  }

  function existingTurfError() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="error">
            <AlertTitle className={styles.alertTitle}>Turf already exists!</AlertTitle>
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
      showErrorNotification();
    } else {
      if (sportsVenues.some((venue) => Object.values(venue).includes(turfName))) {
        return existingTurfError();
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

      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
      {hasAccess ? (
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

          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AdminPage;
