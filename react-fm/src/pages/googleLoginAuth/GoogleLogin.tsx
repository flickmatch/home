import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
import { logingin, settingAdmin } from '@/slices/loginSlice';

import { generateFirebaseAuthErrorMessage } from './FirebaseError';
import styles from './GoogleLogin.module.scss';

//import { apiUrl } from './constants';

const apiUrl = 'http://localhost:8080/graphql';

function GoogleLogin() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const auth = getAuth();
  // const [emailId, setEmailId] = useState('');
  // const login = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const mailSheet = import.meta.env.VITE_GOOGLE_SHEET_API;

  //----------------------------------------------------------------

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

  const addUsers = (email: string | null, name: string | null) => {
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
        }
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
        addUsers(res.data.email, res.data.name);
        localStorage.setItem('userData', JSON.stringify(res.data));
        checkAdmin(res.data.email);

        dispatch(logingin(res.data));

        navigate('/match-queues');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const checkAdmin = (email: string) => {
    if (email === 'admin@flickmatch.in') dispatch(settingAdmin(true));
    else {
      const fetchMailIds = async (email: string) => {
        const response = await fetch(mailSheet);
        const data = await response.json();

        const check = data.data
          .map((mailId: { EmailId: string }) => mailId.EmailId)
          .includes(email);

        dispatch(settingAdmin(check));
      };
      fetchMailIds(email);
    }
  };

  const loginFunc = useGoogleLogin({
    onSuccess: (credentialResponse) => getGoogleUserInfo(credentialResponse.access_token),
    onError: (error) => alert('Login Failed ' + error),
  });

  //email signup function
  const emailSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user).then(() => {
          alert(
            'A verification email has been sent to your email address. Please verify your email to login.',
          );
        });
        setShowSignup(false);

        auth.signOut();
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          generateFirebaseAuthErrorMessage(error);
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
          dispatch(logingin(emailData));

          checkAdmin(user.email as string);
          navigate('/match-queues');
        } else {
          alert('Please verify your email to login.');
        }
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          generateFirebaseAuthErrorMessage(error);
        }
      });
  };

  const emailLoginFunc = () => {
    setShowLogin(true);
    setEmailLogin(true);
  };

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
                  onClick={() => loginFunc()}
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
    </>
  );
}

export default GoogleLogin;
