import { useEffect, useState } from 'react';

import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import NumbersIcon from '@mui/icons-material/Numbers';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header/Header';

import { query } from '../matchQueues/constants';
import type { CityDetails } from '../matchQueues/types/Events.types';
import styles from './AdminPage.module.scss';
import { apiUrl } from './constants';

function AdminPage() {
  const isPortrait = useOrientation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cityName, setCityName] = useState('');
  const [turfName, setTurfName] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const url = apiUrl;
        const response = await fetch(url, {
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
            console.log(error);
          }
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const handleCityName = (e: { target: { value: string } }) => {
    setCityName(e.target.value);
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
      stripePaymentLinks: 'no idea',
    },
  };

  const addTurf1 = () => {
    console.log(cityName);
    citiesData.map((element) => {
      if (element.cityName === cityName) {
        return console.log(element.cityId);
      }
    });
  };

  const addTurf = () => {
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
                      stripePaymentLinks: "no idea"
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
        }
        console.log(result.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <>
      <Meta title="Add Turf" />
      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
      <FlexBox className={isPortrait ? styles.portraitContainere : styles.container}>
        <Box>
          <Typography variant="h3" className={styles.title}>
            Add Turf
          </Typography>
          <Box className={styles.divider} />
        </Box>
        <FlexBox className={styles.formSection}>
          <Box className={styles.sectionFirst}>
            <Typography className={styles.fieldTitle}>City Id</Typography>
            <NumbersIcon className={styles.fieldTitleIcon} />
            <TextField
              fullWidth
              value={cityName}
              onChange={handleCityName}
              placeholder="City Id"
              id="fullWidth"
            />
          </Box>

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

          <Box className={styles.sectionFourth}>
            <Button
              variant="contained"
              color="success"
              className={styles.createButton}
              onClick={addTurf1}
            >
              Create
            </Button>
          </Box>
        </FlexBox>
      </FlexBox>
      <Footer />
    </>
  );
}

export default AdminPage;
