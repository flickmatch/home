import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';


import { FlexBox } from '@/components/styled';
<<<<<<< HEAD
import { title } from '@/config';
import mainlogo from './logo.png'
=======
>>>>>>> 53a0d7d001e5b1e75d1de956b83898c1d1e03566
import useHotKeysDialog from '@/store/hotkeys';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import styles from './Header.module.scss';
import { HotKeysButton } from './styled';
import mainlogo from '/logo.png';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
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
<<<<<<< HEAD
            
              <img src={mainlogo} alt="logo" style={{height: 42}}/>
            
=======

            <img src={mainlogo} alt="logo" className={styles.logo} />
>>>>>>> 53a0d7d001e5b1e75d1de956b83898c1d1e03566
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + /
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
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
