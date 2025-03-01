/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Jersey from './Jersey';
import styles from './Players.module.scss';

type PlayerDetailProps = {
  displayName: string;
  index: number;
  id?: number;
  role?: string;
  teamColor?: string;
  coordinates?: {
    mobilePoints?: { x: number; y: number };
    points?: { x: number; y: number };
    id?: number;
    role?: string;
  };
  teamDivision: boolean;
};

type Position = {
  x: number;
  y: number;
};

export const PlayerDetails: FC<PlayerDetailProps> = ({
  displayName,
  index,

  coordinates,
  id,
  teamColor,
  teamDivision,
  role,
}) => {
  const isPortrait = useOrientation();
  const [activeDrags, setActiveDrags] = useState(0);

  const [deltaPosition, setDeltaPosition] = useState<Position>(
    coordinates?.points ? coordinates?.points : { x: 0, y: 0 },
  );
  const [portraitDeltaPosition, setPortraitDeltaPosition] = useState<Position>(
    coordinates?.mobilePoints ? coordinates?.mobilePoints : { x: 0, y: 0 },
  );

  const userState = useSelector((state: RootState) => state);

  // eslint-disable-next-line no-console
  console.log(activeDrags, id, role, deltaPosition);

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

  const normalizePosition = (value: number, isWidth: boolean) => {
    const baseDimension = isWidth
      ? document.documentElement.clientWidth
      : document.documentElement.clientHeight;

    return (value / 100) * baseDimension;
  };

  const onStart = useCallback(() => setActiveDrags((prev) => prev + 1), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps, no-console
  const onStop = useCallback(() => console.log(deltaPosition), []);

  return teamDivision ? (
    isPortrait ? (
      <Draggable
        handle=".handle"
        onStart={onStart}
        onStop={onStop}
        defaultPosition={{
          x: normalizePosition(portraitDeltaPosition.x, true),
          y: portraitDeltaPosition.y,
        }}
        onDrag={handlePortraitDrag}
      >
        <Box
          style={{
            position: 'absolute',
            zIndex: 9,
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
          }}
        >
          {displayName === 'Add Name' ? (
            <Box className="handle">
              <Jersey size={45} color={teamColor} number={index.toString()} />
            </Box>
          ) : (
            <Box
              style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}
              className="handle"
            >
              <Jersey size={45} color={teamColor} number={index.toString()} />
            </Box>
          )}
          <Typography className={`${styles.portraitFormationPlayerName} ${'handle'}`}>
            {displayName === 'Add Name' ? 'Available' : displayName}
          </Typography>
        </Box>
      </Draggable>
    ) : (
      <Draggable
        handle=".handle"
        // position={controlledPosition}
        onStart={onStart}
        onStop={onStop}
        defaultPosition={{
          x: deltaPosition.x,
          y: deltaPosition.y,
        }}
        onDrag={handleDrag}
      >
        <Box
          style={{
            position: 'absolute',
            zIndex: 9,
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
          }}
        >
          {displayName === 'Add Name' ? (
            <Box className="handle" style={{ lineHeight: 0 }}>
              <Jersey size={42} color={teamColor} number={index.toString()} />
            </Box>
          ) : (
            <Box
              style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}
              className="handle"
            >
              <Jersey size={42} color={teamColor} number={index.toString()} />
            </Box>
          )}
          <Typography className={`${styles.formationPlayerNames} ${'handle'}`}>
            {displayName === 'Add Name' ? 'Available' : displayName.slice(0, 8)}
          </Typography>
        </Box>
      </Draggable>
    )
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
