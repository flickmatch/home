import { type FC ,useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import mapCityData from '../map';
import type { CityDetails,Weather } from '../types/Events.types';
import styles from './Cities.module.scss';
import useOrientation from '@/hooks/useOrientation';

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
        // console.log(data)
      }
      catch(err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

    }
    fetchWeather();
  },[cityName, countryCode])

  const weatherData = () =>  {
    const description = weather?.description?.charAt(0).toUpperCase() + weather?.description?.slice(1);
    let image;
    if (weather?.icon?.startsWith("01")) {
      image = "weather-icons/clear.png";
    }
    else if (weather?.icon?.startsWith("02")) {
      image = "weather-icons/fewclouds.png";
      
    }
    else if (weather?.icon?.startsWith("03")) {
      image = "weather-icons/scatteredclouds.png";
    }
    else if (weather?.icon?.startsWith("04")) {
      image = "weather-icons/brokenclouds.png";
      
    }
    else if (weather?.icon?.startsWith("05")) {
      image = "weather-icons/showerrain.png";
    }
    else if (weather?.icon?.startsWith("06")) {
      image = "weather-icons/showerrain.png";
    }
    else if (weather?.icon?.startsWith("09")) {
      image = "weather-icons/showerrain.png";
    }
    else if (weather?.icon?.startsWith("10")) {
      image = "weather-icons/rain.png";
    }
    else if (weather?.icon?.startsWith("11")) {
      image = "weather-icons/thunderstorm.png";
    }
    else if (weather?.icon?.startsWith("13")) {
      image = "weather-icons/snow.png";
    }
    else if (weather?.icon?.startsWith("50")) {
      image = "weather-icons/mist.png";
    }
    
    return (
          <div className={isPortrait ? styles.mobileWeather : styles.weather}>
           <span>{Math.round(Number(weather?.temp)) || 27} °C </span>
           <span>{description || "Clear Sky"}</span>
           <img className={isPortrait ? styles.weatherImgMobile : styles.weatherImg}  src={`${image}`} alt={description} />
          </div>
    )}



  return (
    <div  className={ isPortrait ? styles.mobileContainer : styles.citiesContainer}>
    <div>
      <Typography className={styles.citiesName} key={cityId}>
        {cityName}
      </Typography>
      <img className={styles.citiesImg} src={cityImage} alt={cityName} />
    </div>
        {weatherData()}
    </div>
  );
};
