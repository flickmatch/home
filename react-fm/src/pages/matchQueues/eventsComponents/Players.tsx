import type { FC } from 'react';
import { useCallback, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useOrientation from '@/hooks/useOrientation';
import type { RootState } from '@/store/types';

import { avatars } from '../constants';
import styles from './Players.module.scss';

interface PlayerDetailProps {
  displayName: string;
  index: number;
}

interface Position {
  x: number;
  y: number;
}

export const PlayerDetails: FC<PlayerDetailProps> = ({ displayName, index }) => {
  const isPortrait = useOrientation();
  const [activeDrags, setActiveDrags] = useState(0);
  const [controlledPosition, setControlledPosition] = useState<Position>({ x: -40, y: 5 });
  const userState = useSelector((state: RootState) => state);

  // eslint-disable-next-line no-console
  console.log(activeDrags);

  const onStart = useCallback(() => setActiveDrags((prev) => prev + 1), []);
  const onStop = useCallback(() => setActiveDrags((prev) => prev - 1), []);

  const onControlledDrag = useCallback((e: DraggableEvent, position: DraggableData) => {
    setControlledPosition({ x: position.x, y: position.y });
    localStorage.setItem(
      'currentPlayerPosition',
      JSON.stringify({ [displayName]: [{ x: position.x, y: position.y }] }),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onControlledDragStop = useCallback(
    (e: DraggableEvent, position: DraggableData) => {
      onControlledDrag(e, position);
      onStop();
    },
    [onControlledDrag, onStop],
  );

  return userState.login.isAdmin ? (
    <Draggable
      axis="both"
      handle=".handle"
      position={controlledPosition}
      onStart={onStart}
      onDrag={onControlledDrag}
      onStop={onControlledDragStop}
    >
      <Grid
        item
        xs={2}
        sm={4}
        md={3}
        className={isPortrait ? styles.formationPortraitGrid : styles.formationGrid}
        key={index}
        style={{ borderRadius: displayName === 'Add Name' ? 15 : '' }}
      >
        {displayName === 'Add Name' ? (
          <AddCircleIcon
            className={
              isPortrait ? styles.portraitFormationPersonAvatar : styles.formationPersonAvatar
            }
          />
        ) : (
          <Box className={styles.formationProfilePic}>
            <Avatar
              className={isPortrait ? styles.portraitFormationAvatar : styles.formationAvatar}
              alt="profile"
              src={avatars[index]}
            />
          </Box>
        )}
        <Typography
          className={`${
            isPortrait ? styles.portraitFormationPlayerName : styles.formationPlayerNames
          } ${'handle'}`}
        >
          {displayName}
        </Typography>
      </Grid>
    </Draggable>
  ) : (
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
          <Avatar className={styles.avatar} alt="profile" src={avatars[index]} />
        </Box>
      )}
      <Typography className={styles.playerNames}>{displayName}</Typography>
    </Grid>
  );
};
