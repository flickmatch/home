import { googleLogout } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MailIcon from '@mui/icons-material/Mail';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { logingout, settingAdmin } from '@/slices/loginSlice';
import type { RootState } from '@/store/types';

import styles from './Profile.module.scss';

const url = 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql';
interface UserDetails {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
}

type subscriptionType = {
  subscriptionId: string;
  passId: string;
  userId: string;
  expiryDate: number;
  gamesLeft: number;
  status: string;
  cityId: number;
};

function Profile() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state);
  const [userData, setUserData] = useState<UserDetails>({
    email: '',
    family_name: '',
    given_name: '',
    id: '',
    name: '',
    picture: '',
  });
  const [activeSubscriptonData, setActiveSubscriptionData] = useState<subscriptionType>({
    subscriptionId: '',
    passId: '',
    userId: '',
    expiryDate: 0,
    gamesLeft: 0,
    status: '',
    cityId: 0,
  });
  const [hasSubscription, setHasSubscription] = useState(false);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(settingAdmin(false));
    googleLogout();
    localStorage.removeItem('userData');
    dispatch(logingout());
    navigate('/');
  };

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parseData = JSON.parse(storedData);
      setUserData(parseData);
    }
  }, []);

  useEffect(() => {
    if (userData.email) {
      const fetchData = async () => {
        const query = JSON.stringify({
          query: `query HasActiveSubscription {
        hasActiveSubscription(email: "${userData.email}")
          }`,
        });

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: query,
          });
          const data = await response.json();

          setHasSubscription(data.data.hasActiveSubscription);
        } catch (error) {
          if (error instanceof Error) {
            if (error.name === 'TypeError') {
              // eslint-disable-next-line no-console
              console.log(error);
            }
          }
        }
      };

      fetchData();
    }
  }, [userData.email]);

  useEffect(() => {
    const getAcitveSubscription = async () => {
      const getSubscription = JSON.stringify({
        query: `query GetActiveSubscription {
        getActiveSubscription(email: "${userData.email}") {
        subscriptionId
        passId
        userId
        expiryDate
        gamesLeft
        status
        cityId
    }}`,
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: getSubscription,
        });
        const subscriptions = await response.json();

        setActiveSubscriptionData(subscriptions.data.getActiveSubscription);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'TypeError') {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        }
      }
    };

    if (hasSubscription) {
      getAcitveSubscription();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSubscription]);

  //"https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"

  return (
    <>
      <Meta title="Profile Page" />
      {userState.login.isLoggedIn ? (
        <FlexBox className={isPortrait ? styles.portraitProfileContaienr : styles.profileContainer}>
          <Box className={isPortrait ? styles.portraitProfileInfoArea : styles.profileInfoArea}>
            <FlexBox className={styles.profileSection}>
              <Box className={styles.profilePic}>
                {userData.picture ? (
                  <img src={userData.picture} alt={userData.name} referrerPolicy="no-referrer" />
                ) : (
                  <Typography className={styles.profileIcon}>
                    {userData.name.charAt(0).toLocaleUpperCase()}
                  </Typography>
                )}
              </Box>
              {userData ? (
                <Box className={styles.nameSection}>
                  <AccountBoxIcon className={styles.accountIcon} />
                  <Typography className={styles.name}>{userData.name}</Typography>
                </Box>
              ) : null}

              {userData ? (
                <Box className={styles.emailSection}>
                  <MailIcon className={styles.mailIcon} />
                  <Typography className={styles.emailId}>{userData.email}</Typography>
                </Box>
              ) : null}
              {userData && userState.login.isAdmin ? (
                <Box className={styles.nameSection}>
                  <Typography className={styles.creditSection}>
                    <AccountBalanceWalletIcon className={styles.offerIcon} />
                    <span style={{ fontWeight: 600, marginLeft: 10, fontSize: 18 }}>
                      (Credits Left)
                    </span>
                  </Typography>

                  <Typography className={styles.name} style={{ textAlign: 'center' }}>
                    {activeSubscriptonData.gamesLeft}
                  </Typography>
                </Box>
              ) : null}
              <Box className={styles.signOutSection}>
                <Button
                  onClick={() => logOut()}
                  className={styles.signOut}
                  endIcon={<ExitToAppIcon className={styles.signOutIcon} />}
                >
                  Sign out
                </Button>
              </Box>
            </FlexBox>
          </Box>
          <Box className={isPortrait ? styles.portraitSkillSection : styles.skillsSection}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>10</Typography>
                    <SportsSoccerIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Goals
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>15</Typography>
                    <Diversity1SharpIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Passes
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>06</Typography>
                    <CrisisAlertOutlinedIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Shots
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>03</Typography>
                    <RoundedCornerOutlinedIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Corners
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>35</Typography>
                    <TimerOutlinedIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Possession
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>03</Typography>
                    <EmojiEventsIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Wins
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>02</Typography>
                    <SentimentVeryDissatisfiedOutlinedIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Losses
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>12</Typography>
                    <Diversity2SharpIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Assists
                </Box>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <Box className={isPortrait ? styles.portraitSkills : styles.skills}>
                  <FlexBox className={styles.skillsDataCard}>
                    <Typography className={styles.totalGoals}>04</Typography>
                    <AdjustSharpIcon className={styles.skillsDataIcon} />
                  </FlexBox>
                  Shots on target
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FlexBox>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
