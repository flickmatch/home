import type {FC} from 'react';
import Typography from '@mui/material/Typography';
import styles from './Cities.module.scss';
import delhiIcon from '/gate-of-india.png';
import charminar from '/hyderabad-charminar.png';
import type { CityDetails } from '../interface'

export const Cities: FC<CityDetails> = ({cityName, cityId}) => {
  //calculate the image source based on the city name
  const cityImage = cityName === 'Hyderabad' ? charminar : delhiIcon;

  return (
    <Typography className={styles.citiesName} key={cityId}>
     {cityName} <img src={cityImage} alt={cityName} />
    </Typography>
  ); 
};