import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
//import useHotKeysDialog from '@/store/hotkeys';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import useSidebar from '@/store/sidebar';

//import useTheme from '@/store/theme';
import styles from './Header.module.scss';
//import { HotKeysButton } from './styled';
import mainlogo from '/logo.png';

interface UserDetails {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
}

type login = {
  loggedIn: boolean;
};

const Header: FC<login> = ({ loggedIn }) => {
  const [, sidebarActions] = useSidebar();
  //const [, themeActions] = useTheme();
  //const [, hotKeysDialogActions] = useHotKeysDialog();
  const isPortrait = useOrientation();

  const [userData, setUserData] = useState<UserDetails>({
    email: '',
    family_name: '',
    given_name: '',
    id: '',
    name: '',
    picture: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parseData = JSON.parse(storedData);
      setUserData(parseData);
    }
  }, []);

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
          Match Queue
        </Typography>
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
              <img src={mainlogo} alt="logo" className={styles.logo} />
            </Typography>
          </FlexBox>
          <FlexBox>
            {menus()}
            <Divider className={styles.divider} orientation="horizontal" flexItem />

            {loggedIn ? (
              <Tooltip title="Profile Page" arrow>
                <Box component={Link} to="/profile-page">
                  <img src={userData.picture} alt="logo" className={styles.profilePic} />
                </Box>
              </Tooltip>
            ) : (
              <Tooltip title="Sign up" arrow>
                <IconButton edge="end" size="large" component={Link} to="/login">
                  {/* <ThemeIcon /> */}
                  <PersonPinIcon className={styles.signUp} />
                </IconButton>
              </Tooltip>
            )}
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
