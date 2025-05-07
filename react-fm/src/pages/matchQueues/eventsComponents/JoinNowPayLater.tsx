import { type FC, useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { FirebaseError } from 'firebase/app';
import type { ConfirmationResult } from 'firebase/auth';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';

import useNotifications from '@/store/notifications';

import { generateFirebaseAuthErrorMessage } from '../../googleLoginAuth/FirebaseError';
import styles from './JoinNowPayLater.module.scss';

interface ChildProps {
  isOpen: boolean;
  onToggle: () => void;
  uniqueEventId: string;
  cityId: string;
  handlePassName: (name: string) => void;
  team2_color?: string;
  team1_color?: string;
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

export const JoinNowPayLater: FC<ChildProps> = ({
  onToggle,
  isOpen,
  uniqueEventId,
  cityId,
  handlePassName,

  team1_color,
  team2_color,
}) => {
  const handleClose = () => onToggle();
  const [name, setName] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [teamColor, setTeamColor] = useState('');

  const [userConfirmation, setUserConfirmation] = useState<ConfirmationResult | null>(null);
  const [, notificationsActions] = useNotifications();
  const apiUrl =
    import.meta.env.MODE == 'development'
      ? import.meta.env.VITE_API_LOCAL
      : import.meta.env.VITE_API_URL;

  const auth = getAuth();

  function showSuccessNotification() {
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="success">
            <AlertTitle className={styles.alertTitle}>
              Game Joined Successfully, See you in the ground!
            </AlertTitle>
          </Alert>
        ),
      },
    });
  }

  const handleVerifyPhoneNumber = () => {
    if (phoneNumber.length < 10) {
      alert('Invalid phone number. Please try again.');
    } else {
      const appVerifier = new RecaptchaVerifier(auth, 'recaptcha', {});
      signInWithPhoneNumber(auth, '+91' + phoneNumber, appVerifier)
        .then((confirmationResult) => {
          //console.log("")
          // eslint-disable-next-line no-console
          console.log(confirmationResult);
          setUserConfirmation(confirmationResult);
          setShowOtpField(true);
        })
        .catch((error) => {
          //alert('error while sending otp ' + error);
          if (error instanceof FirebaseError) {
            generateFirebaseAuthErrorMessage(error);
          }
        });
    }
  };

  const handlePay = async () => {
    if (!name || !phoneNumber) {
      alert('All input fields are required.');
    } else {
      if (userConfirmation) {
        userConfirmation
          .confirm(phoneOtp)
          .then((result: { user: any }) => {
            const user = result.user;
            // eslint-disable-next-line no-console
            console.log(user);
            fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                query: `
                mutation JoinEvent($input: JoinEventInput!) {
                  joinEvent(input: $input) {
                    isSuccessful
                  }
                }
              `,
                variables: {
                  input: {
                    uniqueEventId,
                    cityId,
                    player: {
                      waNumber: phoneNumber,
                      name,
                      teamColor,
                    },
                  },
                },
              }),
            })
              .then((response) => response.json())
              .then((result) => {
                if (result.errors) {
                  // Handle GraphQL errors
                  alert(result.errors[0].message);
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
            // eslint-disable-next-line no-console
            console.log(user);
            // ...
          })
          .catch((error: any) => {
            // eslint-disable-next-line no-console
            console.log(error);
            // User couldn't sign in (bad verification code?)
            // ...
          });
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamColor((event.target as HTMLInputElement).value);
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
              Play Now Pay Later
            </Typography>
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
          <Box style={{ position: 'relative' }}>
            <TextField
              type="number"
              fullWidth
              label="Phone No."
              id="fullWidth"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {showOtpField ? (
              <Button className={styles.otpSend} onClick={handleVerifyPhoneNumber}>
                OTP sent <CheckCircleOutlineIcon style={{ fontSize: 16 }} />
              </Button>
            ) : (
              <button className={styles.verifyPhoneNumber} onClick={handleVerifyPhoneNumber}>
                verify
              </button>
            )}
          </Box>
          <Box id="recaptcha" style={{ marginTop: 10 }} />
          {showOtpField ? (
            <Box className={styles.verifyOtp}>
              <TextField
                type="number"
                fullWidth
                label="Enter OTP"
                id="fullWidth"
                value={phoneOtp}
                onChange={(e) => setPhoneOtp(e.target.value)}
              />
            </Box>
          ) : null}
          {team1_color ? (
            <Box style={{ marginTop: 20 }}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" style={{ marginBottom: 10 }}>
                  Select Team
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={teamColor}
                  onChange={handleChange}
                  name="radio-buttons-group"
                  style={{ display: 'flex', flexFlow: 'row' }}
                >
                  <FormControlLabel value={team1_color} control={<Radio />} label={team1_color} />
                  <FormControlLabel value={team2_color} control={<Radio />} label={team2_color} />
                </RadioGroup>
              </FormControl>
            </Box>
          ) : null}
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            className={styles.addButton}
            onClick={handlePay}
          >
            Join Now
          </Button>
        </Box>
      </Modal>
    </>
  );
};
