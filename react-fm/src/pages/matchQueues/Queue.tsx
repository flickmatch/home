import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import * as _ from 'lodash';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header/Header';
import { logingin } from '@/slices/loginSlice';

import { GamesList } from './GamesList';
import styles from './Queue.module.scss';
import { apiUrl, query } from './constants';
import dummyData from './data';
import { Cities } from './eventsComponents/Cities';
import type { CityDetails } from './types/Events.types';

function MatchQueue() {
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();

  const isPortrait = useOrientation();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      dispatch(logingin());
    }
  }, [dispatch]);

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

        data.data.cities.forEach(
          (
            city: {
              cityName: string;
              cityId: string;
              events: unknown[];
            },
            i: number,
          ) => {
            const cityExists = _.some(dummyData.data.cities, { cityId: city.cityId });
            if (cityExists) {
              if (city.events.length > 0) {
                const eventArray = data.data.cities[i];
                setCitiesData((prevData) => [...prevData, eventArray]);
              } else {
                dummyData.data.cities.forEach(
                  (
                    dummyCityData: {
                      cityName: string;
                      cityId: string;
                      events: unknown[];
                    },
                    j: number,
                  ) => {
                    if (dummyCityData.cityName == city.cityName) {
                      setCitiesData((prevData) => [...prevData, dummyData.data.cities[j]]);
                    }
                  },
                );
              }
            } else {
              if (city.events.length > 0) {
                const eventArray = data.data.cities[i];
                setCitiesData((prevData) => [...prevData, eventArray]);
              }
            }
            setShowSkeleton(false);
          },
        );
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

  const events = () => {
    citiesData.sort((a) => (a.dummyData === false ? 1 : -1));

    const gameQueues = citiesData.map((city: CityDetails) => (
      <Zoom in={true} key={city.cityId} style={{ transitionDelay: '300ms' }}>
        <div className={isPortrait ? styles.mobileContainer : styles.container}>
          <Cities
            cityName={city.cityName}
            cityId={city.cityId}
            events={city.events}
            dummyData={city.dummyData}
            countryCode={city.countryCode}
          />
          <GamesList gameEvent={city.events} cityName={city.cityName} />
        </div>
      </Zoom>
    ));
    return gameQueues;
  };

  const skeleton = () =>
    showSkeleton ? (
      <Stack spacing={1} className={styles.skeletonContainer}>
        <Skeleton
          variant="rectangular"
          className={isPortrait ? styles.mobileSkeleton : styles.skeleton}
        />
        <Skeleton
          variant="rectangular"
          className={isPortrait ? styles.mobileSkeleton : styles.skeleton}
        />
        <Skeleton
          variant="rectangular"
          className={isPortrait ? styles.mobileSkeleton : styles.skeleton}
        />
        <Skeleton
          variant="rectangular"
          className={isPortrait ? styles.mobileSkeleton : styles.skeleton}
        />
      </Stack>
    ) : null;

  return (
    <>
      <Meta title="Match Queues" />
      <div>
        <Header />
      </div>
      <Typography className={styles.title}>Flickmatch Soccer</Typography>
      {events()}

      {skeleton()}
      <Footer />
    </>
  );
}

export default MatchQueue;
