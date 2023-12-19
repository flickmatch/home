import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';

import styles from './GoogleLogin.module.scss';
import platformLogo from '/logo.png';

function GoogleLogin() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Contact Us" />
      <Box className={styles.container}>
        <Box className={isPortrait ? styles.portraitLeftSide : styles.leftSide}>
          <img
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Football Image"
          />
        </Box>

        <Box className={isPortrait ? styles.portraitRightSide : styles.rightSide}>
          <Box className={isPortrait ? styles.portraitLoginContainer : styles.loginContainer}>
            <Box className={styles.logo}>
              <img src={platformLogo} alt="Matchmaking Platform Logo" />
            </Box>

            <Button
              variant="outlined"
              className={isPortrait ? styles.portraitGoogleLoginButton : styles.googleLoginButton}
              onClick={() => alert('Logged In')}
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GoogleLogin;
