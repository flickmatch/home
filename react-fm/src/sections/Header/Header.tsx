import { Link } from 'react-router-dom';

import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
//import useHotKeysDialog from '@/store/hotkeys';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import styles from './Header.module.scss';
//import { HotKeysButton } from './styled';
import mainlogo from '/logo.png';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  //const [, hotKeysDialogActions] = useHotKeysDialog();
  const isPortrait = useOrientation();

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
            <a href="https://www.flickmatch.in/" rel="noreferrer" className={styles.link}>
              <img src={mainlogo} alt="logo" className={styles.logo} />
            </a>
            
          </FlexBox>
          <FlexBox>
            {menus()}
            <Divider className={styles.divider} orientation="horizontal" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
