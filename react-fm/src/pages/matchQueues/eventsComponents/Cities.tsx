import type { FC } from 'react';

import Typography from '@mui/material/Typography';

import type { CityDetails } from '../types/Events.types';
import styles from './Cities.module.scss';
import delhiIcon from '/gate-of-india.png';
import goldenGateBridge from '/golden-gate.png';
import charminar from '/hyderabad-charminar.png';

export const Cities: FC<CityDetails> = ({ cityName, cityId }) => {
  //calculate the image source based on the city name
  let cityImage;
  switch (cityName) {
    case 'Hyderabad':
      cityImage = charminar;
      break;
    case 'Gurgaon':
      cityImage = delhiIcon;
      break;
    default:
      cityImage = goldenGateBridge;
  }

  return (
    <Typography className={styles.citiesName} key={cityId}>
      {cityName} <img src={cityImage} alt={cityName} />
    </Typography>
  );
};
