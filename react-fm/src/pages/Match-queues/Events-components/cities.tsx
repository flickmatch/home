import type {FC} from 'react';
import Typography from '@mui/material/Typography';
import styles from '../queue.module.scss';
import delhiIcon from '/gate-of-india.png';
import charminar from '/hyderabad-charminar.png';

interface Props {
    cityName: string,
    cityId: string
}

export const Cities: FC<Props> = ({cityName, cityId}) => (
        <Typography className={styles.citiesName} key={cityId}>
            {cityName} <img src={cityName === "Hyderabad" ? charminar : delhiIcon} alt={cityName} />
        </Typography>
    )