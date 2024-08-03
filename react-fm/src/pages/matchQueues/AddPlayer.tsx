import { type FC, useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import useNotifications from '@/store/notifications';

import styles from './AddPlayer.module.scss';
import type { ReservedPlayerDetails } from './types/Events.types';

interface ChildProps {
  isOpen: boolean;
  onToggle: () => void;
  uniqueEventId: string;
  cityId: string;
  handlePassName: (name: string) => void;
  reservedPlayers: ReservedPlayerDetails[];
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AddPlayer: FC<ChildProps> = ({
  onToggle,
  isOpen,
  uniqueEventId,
  cityId,
  handlePassName,
}) => {
  const handleClose = () => onToggle();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [, notificationsActions] = useNotifications();

  function showSuccessNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="success">
            <AlertTitle className={styles.alertTitle}>Player Added Successfully</AlertTitle>
          </Alert>
        ),
      },
    });
  }

  const handlePay = () => {
    fetch('https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
        joinEvent(input: {
              uniqueEventId: "${uniqueEventId}"
              cityId: "${cityId}"
              player: {
                waNumber: "${phoneNumber}"
                name: "${name}"
            }
        }) {
          isSuccessful
        }
    }`,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          // Handle GraphQL errors
          throw new Error(result.errors[0].message);
        } else {
          handlePassName(name);
          showSuccessNotification();
          setName('');
          setPhoneNumber('');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={styles.adminModePanel}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Player
            </Typography>
            <Chip
              label="admin mode"
              color="primary"
              variant="outlined"
              className={styles.adminModeTag}
            />
          </Box>

          <Box className={styles.playerName}>
            <TextField
              fullWidth
              label="Player Name"
              id="fullWidth"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              label="Phone No."
              id="fullWidth"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            className={styles.addButton}
            onClick={handlePay}
          >
            Add Player
          </Button>
        </Box>
      </Modal>
    </>
  );
};
