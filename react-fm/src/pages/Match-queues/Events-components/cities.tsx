import React,{FC} from 'react';
import Typography from '@mui/material/Typography';
import styles from '../queue.module.scss';
import delhiIcon from '/gate-of-india.png';

interface Props {
    cityName: string,
    cityId: string
}

export const Cities: FC<Props> = ({cityName, cityId}) => {
    return (
        <Typography className={styles.citiesName} key={cityId}>
            {cityName} <img src={delhiIcon} alt={cityName} />
        </Typography>
    )
}