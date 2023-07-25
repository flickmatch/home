import type { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { avatars } from '../constants';
import styles from './Players.module.scss';

interface Props {
  displayName: string;
  index: number;
}

export const PlayerDetails: FC<Props> = ({ displayName, index }) => (
    <Grid item xs={2} sm={4} md={4} className={styles.grid} key={index} >
      <Avatar className={styles.avatar} alt="profile" src={avatars[index]} />
      <Typography className={styles.playerNames}>{displayName}</Typography>
    </Grid>
  );
