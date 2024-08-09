import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// https://redux-toolkit.js.org/introduction/getting-started for redux implementation
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { logingin, settingAdmin } from '@/slices/loginSlice';
import useSidebar from '@/store/sidebar';
import type { RootState } from '@/store/types';

import styles from './Header.module.scss';
import { appLogo } from './constants';

interface UserDetails {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
}

const Header = () => {
  const [, sidebarActions] = useSidebar();
  const isPortrait = useOrientation();
  const [userData, setUserData] = useState<UserDetails>({
    email: '',
    family_name: '',
    given_name: '',
    id: '',
    name: '',
    picture: '',
  });

  const mailSheet = import.meta.env.VITE_GOOGLE_SHEET_API;
  const userState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (userState.login.isLoggedIn) {
      if (storedData) {
        const parseData = JSON.parse(storedData);
        setUserData(parseData);

        if (parseData.email === 'admin@flickmatch.in') {
          dispatch(settingAdmin(true));
        } else {
          const fetchMailIds = async () => {
            const response = await fetch(mailSheet);
            const data = await response.json();

            localStorage.setItem('adminIds', JSON.stringify(data));
            const check = data.data
              .map((mailId: { EmailId: string }) => mailId.EmailId)
              .includes(parseData.email);
            dispatch(settingAdmin(check));
          };

          fetchMailIds();
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userState.login.isLoggedIn]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      dispatch(logingin(storedData));
    }
  }, [dispatch]);

  const menus = () =>
    !isPortrait ? (
      <FlexBox style={{ alignItems: 'center' }}>
        <Typography className={styles.menuItem} component={Link} to="/">
          Home
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <Typography className={styles.menuItem} component={Link} to="/what-we-do">
          What we do
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <Typography className={styles.menuItem} component={Link} to="/about-us">
          About us
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <Typography className={styles.menuItem} component={Link} to="/contact-us">
          Contact us
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />

        <Typography className={styles.menuItem} component={Link} to="/match-queues">
          Match Queues
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <Typography className={styles.menuItem} component={Link} to="/rewards">
          Rewards
        </Typography>

        {userState.login.isAdmin && userState.login.isLoggedIn ? (
          <>
            <Divider className={styles.divider} orientation="vertical" flexItem />

            <Typography className={styles.menuItem} component={Link} to="/add-game">
              Add Game
              <span className={styles.adminMode}>admin mode</span>
            </Typography>

            <Divider className={styles.divider} orientation="vertical" flexItem />
            <Typography className={styles.menuItem} component={Link} to="/add-turf">
              Add Turf
              <span className={styles.adminMode}>admin mode</span>
            </Typography>
          </>
        ) : null}
      </FlexBox>
    ) : null;

  const navIcon = () =>
    isPortrait ? (
      <IconButton
        onClick={sidebarActions.toggle}
        size="large"
        edge="start"
        color="info"
        aria-label="menu"
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
    ) : null;

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.box}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            {navIcon()}
            <Typography component={Link} to="/home">
              <img src="./fm_rainbow.webp" alt="logo" className={styles.logo} />
            </Typography>
            {userState.login.isAdmin ? (
              <Chip
                label="admin mode"
                color="primary"
                variant="outlined"
                className={styles.adminModeTag}
              />
            ) : null}
          </FlexBox>
          <FlexBox>
            {menus()}
            <Divider className={styles.divider} orientation="horizontal" flexItem />

            {userState.login.isLoggedIn ? (
              <Tooltip title="Profile Page" arrow>
                <Box component={Link} to="/profile-page">
                  {userState.login.picture || (userData.picture && userData.picture != '') ? (
                    <img
                      src={userState.login.picture || userData.picture}
                      alt="Profile Pic"
                      className={styles.profilePic}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Box className={styles.letterProfile}>
                      {userData.name.charAt(0).toLocaleUpperCase()}
                    </Box>
                  )}
                </Box>
              </Tooltip>
            ) : (
              <Button variant="contained" className={styles.signUp} component={Link} to="/login">
                Login / Sign up
              </Button>
            )}
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
