import { type FC } from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { avatars } from '../constants';
import type { EventDetails } from '../types/Events.types';
import styles from './Players.module.scss';

interface PlayerDetailProps {
  displayName: string;
  index: number;
  playerDetailsArray: EventDetails['reservedPlayersList'];
  gameCharges: number;
  gameTime: string;
  gameVenueName: string;
  gameEventId: string;
  handlePassName: (name: string) => void;
}

export const PlayerDetails: FC<PlayerDetailProps> = ({
  displayName,
  index,
  playerDetailsArray,
  gameCharges,
  gameTime,
  gameVenueName,
  gameEventId,
  handlePassName,
}) => {
  const deletePlayer = async () => {
    const waitListPlayersArray = [{ name: '' }];
    const time = gameTime.split(' ')[0];
    const [startTime, endTime] = time.split('-');
    const startTimeFormat = startTime.replace(/([APM]+)$/, ' $1');
    const endTimeFormat = endTime.replace(/([APM]+)$/, ' $1');
    const [time1, period] = startTimeFormat.split(' ');
    const [time2, period1] = endTimeFormat.split(' ');

    // Split the hour and minute
    // eslint-disable-next-line prefer-const
    let [hour, minute] = time1.split(':');
    // eslint-disable-next-line prefer-const
    let [hour1, minute1] = time2.split(':');

    hour = hour.padStart(2, '0');
    hour1 = hour1.padStart(2, '0');

    const actualFormatStartTime = `${hour}:${minute} ${period}`;
    const actualFormatEndTime = `${hour1}:${minute1} ${period1}`;

    //console.log('starttime ', actualFormatStartTime, ' endtime ', actualFormatEndTime);

    const formatDate = gameEventId.slice(0, -2);
    const [year, month, day] = formatDate.split('-');
    const newDateString = `${day}-${month}-${year}`;

    const updatedPlayers = playerDetailsArray
      .filter((player) => player.displayName !== displayName)
      .map((player) => `{ name: "${player.displayName}" }`);

    const waitListPlayersList = waitListPlayersArray
      .map((player) => `{ name: "${player.name}" }`)
      .join(', ');

    //check status in console
    // eslint-disable-next-line no-console
    console.log(
      'updated players array => ',
      updatedPlayers,
      'previous array => ',
      playerDetailsArray,
    );

    const query = `mutation {
      updatePlayerList(input: {
        date: "${newDateString}",
        startTime: "${actualFormatStartTime}",
        venueName: "${gameVenueName}",
        endTime: "${actualFormatEndTime}",
        charges: "${gameCharges}",
        format: "${startTime.replace(/([APM]+)$/, ' $1')}",
        reservedPlayersList: [${updatedPlayers}],
        waitListPlayers: [${waitListPlayersList}]
      }) {
        isSuccessful
        errorMessage
      }
    }`;

    fetch('https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          // Handle GraphQL errors
          throw new Error(result.errors[0].message);
        } else {
          // eslint-disable-next-line no-console
          console.log('Mutation result:', result.data.updatePlayerList, updatedPlayers);
          handlePassName(displayName);
          if (result.data.updatePlayerList.isSuccessful) {
            // eslint-disable-next-line no-console
            console.log('Player list updated successfully.');
          } else {
            // eslint-disable-next-line no-console
            console.log('Failed to update player list:', result.data.updatePlayerList.errorMessage);
          }
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  return (
    <Grid item xs={2} sm={4} md={3} className={styles.grid} key={index}>
      {displayName === '(Empty)' ? (
        <PersonPinIcon className={styles.personAvatar} />
      ) : (
        <>
          <Box style={{ position: 'relative' }}>
            <CancelIcon className={styles.cancelIcon} onClick={deletePlayer} />
            <Avatar className={styles.avatar} alt="profile" src={avatars[index]} />
          </Box>
        </>
      )}
      <Typography className={styles.playerNames}>{displayName}</Typography>
    </Grid>
  );
};
