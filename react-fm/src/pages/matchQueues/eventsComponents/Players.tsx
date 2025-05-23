/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

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
    mobileSingleTeam?: { x: number; y: number };
    desktopSingleTeam?: { x: number; y: number };
    points?: { x: number; y: number };
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
  coordinates,
  id,
  teamColor,
  teamDivision,
  singleTeamView,
  role,
}) => {
  const isPortrait = useOrientation();
  const [activeDrags, setActiveDrags] = useState(0);
  //console.log(coordinates);

  const [deltaPosition, setDeltaPosition] = useState<Position>(
    coordinates?.points ? coordinates?.points : { x: 0, y: 0 },
  );
  const [deltaSingleTeamPosition, setPortraitDeltaSinglePosition] = useState<Position>(
    coordinates?.desktopSingleTeam ? coordinates?.desktopSingleTeam : { x: 0, y: 0 },
  );
  const [portraitDeltaPosition, setPortraitDeltaPosition] = useState<Position>(
    coordinates?.mobilePoints ? coordinates?.mobilePoints : { x: 0, y: 0 },
  );
  const [portraitSingleTeamDeltaPosition, setPortraitSingleTeamDeltaPosition] = useState<Position>(
    coordinates?.mobileSingleTeam ? coordinates?.mobileSingleTeam : { x: 0, y: 0 },
  );

  const userState = useSelector((state: RootState) => state);

  // eslint-disable-next-line no-console

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
  const onStop = useCallback(() => console.log(), []);

  return teamDivision ? (
    isPortrait ? (
      <Draggable
        handle=".handle"
        onStart={onStart}
        onStop={onStop}
        defaultPosition={{
          x: normalizePosition(
            singleTeamView ? portraitSingleTeamDeltaPosition.x : portraitDeltaPosition.x,
            true,
          ),
          y: singleTeamView ? portraitSingleTeamDeltaPosition.y : portraitDeltaPosition.y,
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
            maxWidth: '51px',
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
              {userState.login.isAdmin && userState.login.isLoggedIn ? (
                <div className={styles.paymentStatus} style={{ position: 'absolute' }}>
                  unpaid
                </div>
              ) : null}
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
          x: singleTeamView ? deltaSingleTeamPosition.x : deltaPosition.x,
          y: singleTeamView ? deltaSingleTeamPosition.y : deltaPosition.y,
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
            maxWidth: '51px',
          }}
        >
          {displayName === 'Add Name' ? (
            <Box className="handle" style={{ lineHeight: 0 }}>
              <Jersey size={42} color={teamColor} number={index.toString()} />
            </Box>
          ) : (
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 4,
                position: 'relative',
              }}
              className="handle"
            >
              {userState.login.isAdmin && userState.login.isLoggedIn ? (
                <div className={styles.paymentStatus} style={{ position: 'absolute' }}>
                  unpaid
                </div>
              ) : null}
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
