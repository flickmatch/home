import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import * as _ from 'lodash';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import NotFound from '../notFound';
import { EventComponent } from './EventComponent';
// import { GamesList } from './GamesList';
import styles from './Queue.module.scss';
import { apiUrl, getEventById, query } from './constants';
import dummyData from './data';
import { Cities } from './eventsComponents/Cities';
import mapCityData from './map';
import type { CityDetails, EventDetails } from './types/Events.types';

function cityId(event: EventDetails | null) {
  const dateString = event?.uniqueEventId || '';
  const parts = dateString != '' ? dateString.split('-') : '';
  let cityId = '99999';
  cityId = parts.length > 0 ? parts[0] : '3';
  return cityId;
}

function cityName(event: EventDetails | null) {
  const cityIdd = cityId(event);
  const cityData = mapCityData.find((city) => city.cityId.toString() === cityIdd);

  // Return the city name if found, otherwise return undefined
  return cityData?.city;
}

function MatchQueue() {
  const [citiesData, setCitiesData] = useState<CityDetails[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [players, setPlayers] = useState<string[]>([]);
  const userState = useSelector((state: RootState) => state);
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      getEventById(id, setError)
        .then((eventDetails) => {
          if (eventDetails) {
            setEvent(eventDetails);
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
  }, [id]);

  const isPortrait = useOrientation();

  const addPlayerInQueue = (name: string) => {
    setPlayers((prevData) => [...prevData, name]);
  };

  // Function to convert date strings to a comparable Date object
  const parseDate = (event: { date: string }) => new Date(event.date);
  //
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
            const validEvents = city.events.filter(
              (event) => (event as { testGame: unknown }).testGame === false,
            );

            if (cityExists) {
              if (city.events.length > 0) {
                if (validEvents.length > 0) {
                  const eventArray = data.data.cities[i];
                  eventArray.events.sort(
                    (a: { date: string }, b: { date: string }) =>
                      parseDate(b).getTime() - parseDate(a).getTime(),
                  ),
                    reorderedCities.push(eventArray);
                }
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
              if (city.events.length > 0 && validEvents.length > 0) {
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

        // console.log(reorderedCities);
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
    if (event) {
      return (
        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
          <div className={isPortrait ? styles.mobileContainer : styles.container}>
            <Cities
              cityId={cityId(event)}
              cityName={cityName(event) || ''}
              countryCode="IN"
              dummyData={false}
              events={[]}
            />
            {/* <GamesList
              gameEvent={[event]}
              cityName={cityId(event) || ''}
              cityNameId={cityName(event) || ''}
              addPlayerInQueue={addPlayerInQueue}
              eventPage={true}
            /> */}
            <EventComponent
              gameEvent={[event]}
              cityName={cityName(event) || ''}
              cityNameId={cityId(event) || ''}
              addPlayerInQueue={addPlayerInQueue}
              eventPage={true}
            />
          </div>
        </Zoom>
      );
    }
    citiesData.sort((a) => (a.dummyData === false ? 1 : -1));

    const gameQueues = citiesData.map((city: CityDetails) => {
      const count = city?.events?.filter((event) => event.testGame !== true)?.length;

      if (count === 0 && !userState.login.isAdmin) {
        // console.log(city.cityName, count);
        return null;
      }
      return (
        <Zoom in={true} key={city.cityId} style={{ transitionDelay: '300ms' }}>
          <div className={isPortrait ? styles.mobileContainer : styles.container}>
            <Cities
              cityName={city.cityName}
              cityId={city.cityId}
              events={city.events}
              dummyData={city.dummyData}
              countryCode={city.countryCode}
            />
            {/* <GamesList
              gameEvent={city.events}
              cityName={city.cityName}
              cityNameId={city.cityId}
              addPlayerInQueue={addPlayerInQueue}
              eventPage={false}
            /> */}
            <EventComponent
              gameEvent={city.events}
              cityName={city.cityName}
              cityNameId={city.cityId}
              addPlayerInQueue={addPlayerInQueue}
              eventPage={false}
            />
          </div>
        </Zoom>
      );
    });
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

  if (id && !event && error) {
    return (
      <Zoom in={true} style={{ transitionDelay: '300ms' }}>
        <div className={isPortrait ? styles.portraitContainer : styles.parentContainer}>
          <div className={styles.parent}>
            <NotFound />
          </div>
        </div>
      </Zoom>
    );
  }

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
