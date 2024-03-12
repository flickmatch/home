import { type FC ,useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import mapCityData from '../map';
import type { CityDetails,Weather, WeatherIcon } from '../types/Events.types';
import styles from './Cities.module.scss';
import useOrientation from '@/hooks/useOrientation';

const weatherIconMap: WeatherIcon = {
  '01': 'weather-icons/clear.png',
  '02': 'weather-icons/fewclouds.png',
  '03': 'weather-icons/scatteredclouds.png',
  '04': 'weather-icons/brokenclouds.png',
  '05': 'weather-icons/showerrain.png',
  '06': 'weather-icons/showerrain.png',
  '09': 'weather-icons/showerrain.png',
  '10': 'weather-icons/rain.png',
  '11': 'weather-icons/thunderstorm.png',
  '13': 'weather-icons/snow.png',
  '50': 'weather-icons/mist.png',
}

export const Cities: FC<CityDetails> = ({ cityName, cityId,countryCode }) => {

  const [weather,setWeather] = useState<Weather>({temp: "", description: "", icon: ""});
  const isPortrait = useOrientation();
  //calculate the image source based on the city name
  let cityImage;

  mapCityData.forEach((cityData) => {
    if (cityData.city === cityName) {
      cityImage = cityData.iconUrl;
    }
  });

  useEffect(function() {
    async function fetchWeather() {
      try {
        const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=2d9b4d6c529fae9a54f7e64abefede4c`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setWeather({
          temp: data.main.temp,
          description: data.weather[0]?.description,
          icon: data.weather[0]?.icon
        });
      }
      catch(err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

    }
    fetchWeather();
  },[cityName, countryCode])

  const formattedWeather = (weather: Weather) => {
    const description = weather?.description?.charAt(0).toUpperCase() + weather?.description?.slice(1);
    const image = weatherIconMap?.[weather?.icon.substring(0, 2)] || "";

    return (
      <div className={isPortrait ? styles.mobileWeather : styles.weather}>
        <span>{weather?.temp ? `${Math.round(Number(weather?.temp))} °C` : ""} </span>
        <span>{description || ''}</span>
        {image && <img className={isPortrait ? styles.weatherImgMobile : styles.weatherImg} src={image} alt={description} />}
      </div>
    );
  };
  return (
    <div className={isPortrait ? styles.mobileContainer : styles.citiesContainer}>
      <div>
        <Typography className={styles.citiesName} key={cityId}>
          {cityName}
        </Typography>
        <img className={styles.citiesImg} src={cityImage} alt={cityName} />
      </div>
      {formattedWeather(weather)}
    </div>
  );
};

