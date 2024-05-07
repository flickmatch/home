import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import useNotifications from '@/store/notifications';

import styles from './GoogleLogin.module.scss';
import { apiUrl } from './constants';

function GoogleLogin() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //----------------------------------------------------------------
  const [, notificationsActions] = useNotifications();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailLogin, setEmailLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const onAuthStateChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const creationTime = user.metadata.creationTime;
        const lastSignInTime = user.metadata.lastSignInTime;

        if (creationTime === lastSignInTime) {
          // eslint-disable-next-line no-console
          console.log('User is logging in for the first time');
          addUsers(user.email, user.displayName);
        } else {
          // eslint-disable-next-line no-console
          console.log('User has logged in before');
        }
      }
    });
  };

  const addUsers = (email: unknown, name: unknown) => {
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
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        const emailData = {
          email: user.email,
          id: user.uid,
          name: user.displayName,
          picture: user.photoURL,
        };

        // addUsers(user.email, user.displayName);
        localStorage.setItem('userData', JSON.stringify(emailData));
        setIsLoggedIn(true);
        navigate('/match-queues');
      })
      .catch((error) => {
        // Handling Errors
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.log(errorMessage);
      });
  };

  const errorNotification = (errorMessage: string) =>
    notificationsActions.push({
      options: {
        content: (
          <Alert severity="error">
            <AlertTitle className={styles.alertTitle}>{errorMessage}</AlertTitle>
          </Alert>
        ),
      },
    });

  //email signup function
  const emailSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user).then(() => {
          alert(
            'Email verification link sent successfully! Please login after email verification successful',
          );
        });
        setShowSignup(false);

        auth.signOut();
      })
      .catch((error) => {
        const errorMessage = error.message.slice(10);
        if (errorMessage === 'Error (auth/email-already-in-use).') {
          errorNotification('Email id already exists! Try logging in with google');
          setShowSignup(false);
          setEmailLogin(false);
        } else {
          errorNotification(errorMessage);
        }
      });
  };

  //email login function
  const emailLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const name = email.split('@')[0];

        // Signed in
        const user = userCredential.user;

        if (user.emailVerified) {
          const emailData = { email: user.email, id: user.uid, name: name };

          localStorage.setItem('userData', JSON.stringify(emailData));
          onAuthStateChange();
          setIsLoggedIn(true);
          navigate('/match-queues');
        } else {
          alert('Please verify your email before logging in');
        }
      })
      .catch((error) => {
        const errorMessage = error.message.slice(10);
        errorNotification(errorMessage);
      });
  };

  const emailLoginFunc = () => {
    setShowLogin(true);
    setEmailLogin(true);
  };

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
              {showSignup ? (
                <Typography className={styles.loginSignupText}>Sign up</Typography>
              ) : showLogin ? (
                <Typography className={styles.loginSignupText}>Login</Typography>
              ) : (
                <Typography className={styles.loginSignupText}>Login / Sign up</Typography>
              )}
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
                  onClick={() => googleAuth()}
                  startIcon={<GoogleIcon />}
                >
                  Log In / Sign up with Google
                </Button>
                <Box className={styles.loginDivider}>
                  <span className={styles.loginOption}>OR</span>
                </Box>

                <Button
                  variant="outlined"
                  className={
                    isPortrait ? styles.portraitGoogleLoginButton : styles.googleLoginButton
                  }
                  onClick={() => emailLoginFunc()}
                  startIcon={<EmailIcon />}
                >
                  Log In / Sign Up with Email
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
                {showSignup ? (
                  <Button
                    variant="outlined"
                    className={
                      isPortrait ? styles.portraitEmailLoginButton : styles.emailLoginButton
                    }
                    onClick={() => emailSignUp()}
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    className={
                      isPortrait ? styles.portraitEmailLoginButton : styles.emailLoginButton
                    }
                    onClick={() => emailLogIn()}
                  >
                    Sign In
                  </Button>
                )}
                <Box>
                  {showSignup ? (
                    <Typography style={{ marginTop: 10 }}>
                      Already have an account?{' '}
                      <span onClick={() => setShowSignup(false)} className={styles.signupText}>
                        Sign in
                      </span>
                    </Typography>
                  ) : (
                    <Typography style={{ marginTop: 10 }}>
                      Need an account?{' '}
                      <span onClick={() => setShowSignup(true)} className={styles.signupText}>
                        Sign up
                      </span>
                    </Typography>
                  )}
                </Box>
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
