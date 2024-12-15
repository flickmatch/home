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
  points?: { x: number; y: number };
  mobilePoints?: { x: number; y: number };
  dummyData: boolean;
}

interface Position {
  x: number;
  y: number;
}

export const PlayerDetails: FC<PlayerDetailProps> = ({
  displayName,
  index,
  points,
  dummyData,
  mobilePoints,
}) => {
  const isPortrait = useOrientation();
  const [activeDrags, setActiveDrags] = useState(0);

  const [deltaPosition, setDeltaPosition] = useState<Position>(points ? points : { x: 0, y: 0 });
  const [portraitDeltaPosition, setPortraitDeltaPosition] = useState<Position>(
    mobilePoints ? mobilePoints : { x: 0, y: 0 },
  );

  const userState = useSelector((state: RootState) => state);

  // eslint-disable-next-line no-console
  console.log(activeDrags);

  //track position of the player in big screen devices while dragging {x, y} coordinates
  const handleDrag = useCallback((e: DraggableEvent, ui: DraggableData) => {
    setDeltaPosition((prevPosition) => ({
      x: prevPosition.x + ui.deltaX,
      y: prevPosition.y + ui.deltaY,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //track position of the player in mobile/small screen while dragging {x, y} coordinates
  const handlePortraitDrag = useCallback((e: DraggableEvent, ui: DraggableData) => {
    setPortraitDeltaPosition((prevPosition) => ({
      x: prevPosition.x + ui.deltaX,
      y: prevPosition.y + ui.deltaY,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onStart = useCallback(() => setActiveDrags((prev) => prev + 1), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps, no-console
  const onStop = useCallback(() => console.log(deltaPosition), []);

  return userState.login.isAdmin && dummyData ? (
    <Draggable
      handle=".handle"
      // position={controlledPosition}
      onStart={onStart}
      onStop={onStop}
      defaultPosition={
        isPortrait
          ? {
              x: (portraitDeltaPosition.x / 100) * window.innerWidth,
              y: (portraitDeltaPosition.y / 100) * window.innerHeight,
            }
          : {
              x: (deltaPosition.x / 100) * window.innerWidth,
              y: (deltaPosition.y / 100) * window.innerHeight,
            }
      }
      onDrag={isPortrait ? handlePortraitDrag : handleDrag}
    >
      <Box style={{ position: 'absolute', zIndex: 9999 }}>
        {displayName === 'Add Name' ? (
          <AddCircleIcon
            className={
              isPortrait ? styles.portraitFormationPersonAvatar : styles.formationPersonAvatar
            }
          />
        ) : (
          <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <Avatar
              alt="profile"
              src={avatars[index]}
              style={{ height: 31, width: 31, borderRadius: '50%' }}
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
      </Box>
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
