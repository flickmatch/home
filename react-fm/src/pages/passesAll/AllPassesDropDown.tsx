import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { SelectChangeEvent } from '@mui/material';
import { Avatar, Box, CircularProgress, MenuItem, Select, Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import Meta from '@/components/Meta';

// import useOrientation from '@/hooks/useOrientation';
import styles from './AllPassesDropDown.module.scss';

interface City {
  cityId: string;
  cityName: string;
  iconUrl: string;
}

const cityMap: Record<string, { cityId: string; cityName: string; iconUrl: string }> = {
  '1': { cityId: '1', cityName: 'Gurgaon', iconUrl: '/india-gate.webp' },
  '2': { cityId: '2', cityName: 'Hyderabad', iconUrl: '/hyderabad-charminar.webp' },
  '3': { cityId: '3', cityName: 'Mountain View', iconUrl: '/mount-rushmore.webp' },
  '4': { cityId: '4', cityName: 'San Jose', iconUrl: '/golden-gate.webp' },
  '5': { cityId: '5', cityName: 'San Francisco', iconUrl: '/golden-gate.webp' },
  '6': { cityId: '6', cityName: 'Kolkata', iconUrl: '/hyderabad-charminar.webp' },
  '7': { cityId: '7', cityName: 'Noida', iconUrl: '/building.webp' },
};

function AllPassesDropDown() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // const isPortrait = useOrientation();

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `query Passes {
              passes {
                cityId
              }
            }`,
            }),
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const passes = data.data.passes;

        // Extract unique cities based on cityId and map to cityMap
        const uniqueCityIds = new Set<string>();
        passes.forEach((pass: { cityId: string }) => {
          uniqueCityIds.add(pass.cityId);
        });

        const uniqueCities: City[] = Array.from(uniqueCityIds)
          .map((cityId) => {
            const cityData = cityMap[cityId];
            return cityData
              ? { cityId: cityData.cityId, cityName: cityData.cityName, iconUrl: cityData.iconUrl }
              : null;
          })
          .filter((city): city is City => city !== null); // Type guard

        setCities(uniqueCities);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const cityId = event.target.value as string;
    setSelectedCity(cityId);
    navigate(`/game-passes/${cityId}`);
  };

  return (
    <>
      <Meta title="Game Passes" />
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <Box className={styles.pageContainer}>
          <Typography variant="h3" className={styles.heading}>
            Flickmatch Pass
          </Typography>
          <div className={styles.container}>
            <Typography variant="h4" className={styles.heading}>
              Select City
            </Typography>
            {loading ? (
              <CircularProgress />
            ) : (
              <Select
                value={selectedCity}
                onChange={handleCityChange}
                displayEmpty
                className={styles.cityDropdown}
              >
                <MenuItem value="" disabled>
                  Please select a city
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city.cityId} value={city.cityId}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={city.iconUrl}
                        alt={city.cityName}
                        style={{ marginRight: '16px' }}
                        variant="rounded"
                      />
                      {city.cityName}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            )}
          </div>
        </Box>
      </Zoom>
    </>
  );
}

export default AllPassesDropDown;
