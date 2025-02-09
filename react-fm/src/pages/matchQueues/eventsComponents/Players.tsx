/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useOrientation from '@/hooks/useOrientation';

import { avatars } from '../constants';
import Jersey from './Jersey';
import styles from './Players.module.scss';

type PlayerDetailProps = {
  displayName: string;
  index: number;
  points?: { x: number; y: number };
  mobilePoints?: { x: number; y: number };
  id?: number;
  role?: string;
  teamColor?: string;
  coordinates?: {
    mobilePoints?: { x: number; y: number };
    mobileSingleTeam?: { x: number; y: number };
    id?: number;
    role?: string;
  };
  teamDivision: boolean;
  singleTeamView: boolean;
};

type Position = {
  x: number;
  y: number;
};

export const PlayerDetails: FC<PlayerDetailProps> = ({
  displayName,
  index,
  points,
  coordinates,
  id,
  teamColor,
  teamDivision,
  singleTeamView,
  role,
}) => {
  const isPortrait = useOrientation();
  const [activeDrags, setActiveDrags] = useState(0);

  const [deltaPosition, setDeltaPosition] = useState<Position>(points ? points : { x: 0, y: 0 });
  const [portraitDeltaPosition, setPortraitDeltaPosition] = useState<Position>(
    coordinates?.mobilePoints ? coordinates?.mobilePoints : { x: 0, y: 0 },
  );
  const [portraitSingleTeamDeltaPosition, setPortraitSingleTeamDeltaPosition] = useState<Position>(
    coordinates?.mobileSingleTeam ? coordinates?.mobileSingleTeam : { x: 0, y: 0 },
  );

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

  return isPortrait && teamDivision ? (
    <Draggable
      handle=".handle"
      // position={controlledPosition}
      onStart={onStart}
      onStop={onStop}
      defaultPosition={{
        x: normalizePosition(
          singleTeamView ? portraitSingleTeamDeltaPosition.x : portraitDeltaPosition.x,
          true,
        ),
        y: singleTeamView ? portraitSingleTeamDeltaPosition.y : portraitDeltaPosition.y,
      }}
      onDrag={isPortrait ? handlePortraitDrag : handleDrag}
    >
      <Box
        style={{
          position: 'absolute',
          zIndex: 9,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          maxWidth: 45,
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
        <Typography
          className={`${
            isPortrait ? styles.portraitFormationPlayerName : styles.formationPlayerNames
          } ${'handle'}`}
        >
          {displayName === 'Add Name' ? 'Available' : displayName}
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
          {/* <Jersey size={60} /> */}
          <Avatar className={styles.avatar} alt="profile" src={avatars[index]} />
        </Box>
      )}
      <Typography className={styles.playerNames}>{displayName}</Typography>
    </Grid>
  );
};
