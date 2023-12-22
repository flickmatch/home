import GoogleIcon from '@mui/icons-material/Google';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';

import styles from './GoogleLogin.module.scss';

function GoogleLogin() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Login/Signup" />
      <Box className={styles.container}>
        <Box className={isPortrait ? styles.portraitLeftSide : styles.leftSide}>
          <img
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Football Image"
          />
        </Box>

        <Box className={isPortrait ? styles.portraitRightSide : styles.rightSide}>
          <Box className={isPortrait ? styles.portraitLoginContainer : styles.loginContainer}>
            <Box className={styles.sportsIconSection}>
              <SportsSoccerIcon className={styles.sportsIcon} />
            </Box>
            <Box className={styles.loginSignupHeader}>
              <Typography className={styles.loginSignupText}>Login/Signup</Typography>
              <Typography className={styles.getStarted}>Let&#39;s get Started</Typography>
              <Typography className={styles.signUpImmediately}>
                Join our sports organizing community and start your journey right away!
              </Typography>
            </Box>
            <Box className={styles.loginSignupButton}>
              <Button
                variant="outlined"
                className={isPortrait ? styles.portraitGoogleLoginButton : styles.googleLoginButton}
                onClick={() => alert('Logged In')}
                startIcon={<GoogleIcon />}
              >
                Sign up with Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GoogleLogin;
