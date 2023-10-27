import type { FC } from 'react';

import Typography from '@mui/material/Typography';

import mapCityData from '../map';
import type { CityDetails } from '../types/Events.types';
import styles from './Cities.module.scss';

export const Cities: FC<CityDetails> = ({ cityName, cityId }) => {
  //calculate the image source based on the city name
  let cityImage;

  mapCityData.forEach((cityData) => {
    if (cityData.city === cityName) {
      cityImage = cityData.iconUrl;
    }
  });

  return (
    <div>
      <Typography className={styles.citiesName} key={cityId}>
        {cityName}
      </Typography>
      <img className={styles.citiesImg} src={cityImage} alt={cityName} />
    </div>
  );
};
