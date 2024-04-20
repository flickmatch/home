import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';

import styles from './GoogleLogin.module.scss';
import { apiUrl } from './constants';

function GoogleLogin() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailLogin, setEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminPassword = 'admin@flickmatch';

  const addUsers = (email: string, name: string) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation createUser {
        createUser(input: {
        email: "${email}"
        name: "${name}"
        }) {
            isSuccessful
            userId
        }
        }`,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          // Handle GraphQL errors
          throw new Error(result.errors[0].message);
          // console.log(result.errors[0].message)
        }
        // console.log(result)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const getGoogleUserInfo = async (accessToken: string) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        addUsers(res.data.email, res.data.name);
        localStorage.setItem('userData', JSON.stringify(res.data));
        setIsLoggedIn(true);
        navigate('/match-queues');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const emailLoginFunc = () => {
    if (password === adminPassword) {
      const name = email.split('@')[0];
      const emailData = { email: email, password: password, id: '344665', name: name };

      localStorage.setItem('userData', JSON.stringify(emailData));
      setIsLoggedIn(true);
      navigate('/match-queues');
    } else {
      alert('Incorrect password');
    }
  };

  const loginFunc = useGoogleLogin({
    onSuccess: (credentialResponse) => getGoogleUserInfo(credentialResponse.access_token),
    // eslint-disable-next-line no-console
    onError: (error) => console.log('Login Failed ', error),
  });

  return (
    <>
      <Meta title="Login/Signup" />
      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
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
                Join our community and start your <br />
                journey right away!
              </Typography>
            </Box>
            {!emailLogin ? (
              <Box className={styles.loginSignupButton}>
                <Button
                  variant="outlined"
                  className={
                    isPortrait ? styles.portraitGoogleLoginButton : styles.googleLoginButton
                  }
                  onClick={() => loginFunc()}
                  startIcon={<GoogleIcon />}
                >
                  Sign up with Google
                </Button>
                <Box className={styles.loginDivider}>
                  <Typography className={styles.loginOption}>OR</Typography>
                </Box>

                <Button
                  variant="outlined"
                  className={
                    isPortrait ? styles.portraitGoogleLoginButton : styles.googleLoginButton
                  }
                  onClick={() => setEmailLogin(true)}
                  startIcon={<EmailIcon />}
                >
                  Sign Up with Email
                </Button>
              </Box>
            ) : (
              <Box className={styles.emailSignup}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailField}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.passwordField}
                />
                <Button
                  variant="outlined"
                  className={isPortrait ? styles.portraitEmailLoginButton : styles.emailLoginButton}
                  onClick={() => emailLoginFunc()}
                >
                  Log In
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default GoogleLogin;
