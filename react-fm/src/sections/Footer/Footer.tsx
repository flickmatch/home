import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Footer.module.scss';
import mainlogo from '/logo.png';
import { Typography } from '@mui/material';

function Footer() {
  //const [, hotKeysDialogActions] = useHotKeysDialog();
  const isPortrait = useOrientation();

  const menus = () => 
    <FlexBox style={{alignItems: 'center'}}>
      <Typography className={styles.menuItem}>
        Footer
      </Typography>      
    </FlexBox>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            {menus()}
            <img src={mainlogo} alt="logo" className={styles.logo} />
          </FlexBox>
          <FlexBox>
            {menus()}
            <Divider className={styles.divider} orientation="vertical" flexItem />
            
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
