import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parseData = JSON.parse(storedData);

      const fetchMailIds = async () => {
        const response = await fetch(
          'https://sheet.best/api/sheets/ba455ca6-e174-4ce1-870b-b2f0ed772878',
        );
        const data = await response.json();

        const check = data
          .map((mailId: { EmailId: string }) => mailId.EmailId)
          .includes(parseData.email);
        setHasAccess(check);
      };

      fetchMailIds();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const toHome = (navTitle: string | undefined) => {
  //   navTitle === 'Home' ? (location.href = 'https://play.flickmatch.in/home') : null;
  // };

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
        {hasAccess ? (
          <>
            <ListItem sx={{ p: 0 }}>
              <ListItemButton component={Link} to="/add-game" onClick={sidebarActions.close}>
                <ListItemIcon>
                  <VideogameAssetIcon />
                </ListItemIcon>
                <ListItemText>
                  <span className={styles.link}>Add game</span>
                </ListItemText>
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
              </ListItemButton>
            </ListItem>
          </>
        ) : null}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
