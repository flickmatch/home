import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import { settingAdmin } from '@/slices/loginSlice';
import useSidebar from '@/store/sidebar';
import type { RootState } from '@/store/types';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();

  const mailSheet = import.meta.env.VITE_GOOGLE_SHEET_API;
  const dispatch = useDispatch();

  const userState = useSelector((state: RootState) => state);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parseData = JSON.parse(storedData);
      if (parseData.email === 'admin@flickmatch.in') {
        dispatch(settingAdmin(true));
      } else {
        const fetchMailIds = async () => {
          try {
            const response = await fetch(`${mailSheet}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const check = data.data
              .map((mailId: { EmailId: string }) => mailId.EmailId)
              .includes(parseData.email);
            dispatch(settingAdmin(check));
          } catch (error) {
            // console.error('Failed to fetch mail IDs:', error);
            dispatch(settingAdmin(false));
          }
        };

        fetchMailIds();
      }
    }
  }, [dispatch, mailSheet]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
    >
      <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
        {Object.values(routes)
          .filter((route) => route.title)
          .map(({ path, title, icon: Icon }) => (
            <ListItem sx={{ p: 0 }} key={path}>
              <ListItemButton component={Link} to={path as string} onClick={sidebarActions.close}>
                <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                <ListItemText>
                  <span className={styles.link}>{title}</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        {userState.login.isAdmin ? (
          <>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton component={Link} to="/add-game" onClick={sidebarActions.close}>
                <ListItemIcon>
                  <VideogameAssetIcon />
                </ListItemIcon>
                <ListItemText>
                  <span className={styles.link}>Add game</span>
                </ListItemText>
                <Chip
                  label="admin mode"
                  color="primary"
                  variant="outlined"
                  className={styles.adminModeTag}
                />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton component={Link} to="/add-turf" onClick={sidebarActions.close}>
                <ListItemIcon>
                  <RoundedCornerOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <span className={styles.link}>Add turf</span>
                </ListItemText>
                <Chip
                  label="admin mode"
                  color="primary"
                  variant="outlined"
                  className={styles.adminModeTag}
                />
              </ListItemButton>
            </ListItem>
          </>
        ) : null}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
