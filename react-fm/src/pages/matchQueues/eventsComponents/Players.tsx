import type { FC } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { avatars } from '../constants';
import styles from './Players.module.scss';

interface PlayerDetailProps {
  displayName: string;
  index: number;
}

export const PlayerDetails: FC<PlayerDetailProps> = ({ displayName, index }) => (
  <Grid
    item
    xs={2}
    sm={4}
    md={3}
    className={displayName === 'Add Name' ? styles.addName : styles.grid}
    key={index}
  >
    {displayName === 'Add Name' ? (
      <AddCircleIcon className={styles.personAvatar} />
    ) : (
      <Box className={styles.profilePic}>
        <Avatar
          className={displayName === 'Add Name' ? styles.addIcon : styles.avatar}
          alt="profile"
          src={avatars[index]}
        />
      </Box>
    )}
    <Typography className={styles.playerNames}>{displayName}</Typography>
  </Grid>
);
