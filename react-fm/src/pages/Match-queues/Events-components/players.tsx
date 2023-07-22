import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { avatars } from '../constants';
import styles from '../queue.module.scss';

interface Props {
  displayName: string;
  index: number;
}

export const PlayerDetails: FC<Props> = ({ displayName, index }) => {

  return (
    <Grid item xs={2} sm={6} md={4} className={styles.grid} key={index} >
      <Avatar className={styles.avatar} alt="profile" src={avatars[index]} />
      <Typography className={styles.playerNames}>{displayName}</Typography>
    </Grid>
  );
};
