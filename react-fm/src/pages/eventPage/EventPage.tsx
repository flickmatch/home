import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import Meta from '@/components/Meta';
// import Loading from '@/components/Loading';
import useOrientation from '@/hooks/useOrientation';

import { EventComponent } from '../matchQueues/EventComponent';
import { getEventById } from '../matchQueues/constants';
import { Cities } from '../matchQueues/eventsComponents/Cities';
import mapCityData from '../matchQueues/map';
import type { EventDetails } from '../matchQueues/types/Events.types';
import NotFound from '../notFound';
import styles from './EventPage.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/types';

// import type { Event } from './EventPage.types';

const EventPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const [event, setEvent] = useState<EventDetails | null>(null);
  const [, setPlayers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const userState = useSelector((state: RootState) => state);
  const isLoggedIn = userState.login.isLoggedIn;

  useEffect(() => {
    if(!isLoggedIn)
      navigate('/login', {
        state: {
          from: location.pathname,
        }
      });
  }, [isLoggedIn, location.pathname, navigate]);

  const addPlayerInQueue = (name: string) => {
    setPlayers((prevData) => [...prevData, name]);
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  // console.log(event);

  const isPortrait = useOrientation();

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event && id && loading) return null;
  else if (event) {
    return (
      <>
        <Meta title="Events Page" />

        <Typography className={styles.title}>Flickmatch Soccer</Typography>
        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
          <div className={isPortrait ? styles.mobileContainer : styles.container}>
            <Cities
              cityId={cityId(event)}
              cityName={cityName(event) || ''}
              countryCode="IN"
              dummyData={false}
              events={[]}
            />

            <EventComponent
              gameEvent={[event]}
              cityName={cityName(event) || ''}
              cityNameId={cityId(event) || ''}
              addPlayerInQueue={addPlayerInQueue}
              eventPage={true}
            />
          </div>
        </Zoom>
      </>
    );
  } else {
    return (
      <div className={isPortrait ? styles.portraitContainer : styles.parentContainer}>
        <div className={styles.parent}>
          <NotFound />
        </div>
      </div>
    );
  }
};

export default EventPage;
