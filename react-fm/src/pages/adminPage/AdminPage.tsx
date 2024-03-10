import { useEffect, useState } from 'react';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
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

  const handleCityName = (e: SelectChangeEvent) => {
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
      stripePaymentLinks: [],
    },
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
        }
        // eslint-disable-next-line no-console
        console.log(result.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
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
          autoWidth
        >
          {citiesData.map((city, i) => (
            <MenuItem value={city.cityId} key={i}>
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
      <FlexBox className={isPortrait ? styles.portraitContainere : styles.container}>
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
      <Footer />
    </>
  );
}

export default AdminPage;
