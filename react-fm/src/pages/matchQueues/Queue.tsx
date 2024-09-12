import { useEffect, useState } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import * as _ from 'lodash';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';

import { GamesList } from './GamesList';
import styles from './Queue.module.scss';
import { apiUrl, query } from './constants';
import dummyData from './data';
import { Cities } from './eventsComponents/Cities';
import type { CityDetails } from './types/Events.types';

function MatchQueue() {
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [players, setPlayers] = useState<string[]>([]);

  const isPortrait = useOrientation();

  const addPlayerInQueue = (name: string) => {
    setPlayers((prevData) => [...prevData, name]);
  };

  // Function to convert date strings to a comparable Date object
  const parseDate = (event: { date: string }) => new Date(event.date);

  useEffect(() => {
    setCitiesData([]);
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

        const citiesOrder = ['San Francisco', 'San Jose', 'Mountain View'];
        const reorderedCities: CityDetails[] = [];

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
                eventArray.events.sort(
                  (a: { date: string }, b: { date: string }) =>
                    parseDate(b).getTime() - parseDate(a).getTime(),
                ),
                  reorderedCities.push(eventArray);
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
                      reorderedCities.push(dummyData.data.cities[j]);
                    }
                  },
                );
              }
            } else {
              if (city.events.length > 0) {
                const eventArray = data.data.cities[i];
                eventArray.events.sort(
                  (a: { date: string }, b: { date: string }) =>
                    parseDate(b).getTime() - parseDate(a).getTime(),
                ),
                  reorderedCities.push(eventArray);
              }
            }
            setShowSkeleton(false);
          },
        );

        // Sort the reorderedCities array to move specified cities to the end
        reorderedCities.sort((a, b) => {
          const aIndex = citiesOrder.indexOf(a.cityName);
          const bIndex = citiesOrder.indexOf(b.cityName);

          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return -1;
          if (bIndex === -1) return 1;
          return aIndex - bIndex;
        });

        setCitiesData(reorderedCities);
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
  }, [players]);

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
          <GamesList
            gameEvent={city.events}
            cityName={city.cityName}
            cityNameId={city.cityId}
            addPlayerInQueue={addPlayerInQueue}
          />
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

      <Typography className={styles.title}>Flickmatch Soccer</Typography>
      {events()}

      {skeleton()}
    </>
  );
}

export default MatchQueue;
