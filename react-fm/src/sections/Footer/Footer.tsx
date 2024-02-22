import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Footer.module.scss';
import mainlogo from '/logo.png';

function Footer() {
  const isPortrait = useOrientation();

  const menus = () => (
    <>
      <Box className={styles.box} sx={{ flexGrow: 1 }}>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/contact-8"
        >
          Contact us
        </Typography>

        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/general-clean"
        >
          Refund Policy
        </Typography>
      </Box>
      <Box className={styles.box} sx={{ flexGrow: 1 }}>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/general-clean-1"
        >
          Terms & Conditions
        </Typography>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/services-7"
        >
          Privacy Policy
        </Typography>
      </Box>
    </>
  );

  const socialIcons = () => (
    <>
      <a href="https://www.youtube.com/@FlickMatch" target="_blank" rel="noreferrer">
        <Tooltip title="Connect via YouTube" arrow>
          <YouTubeIcon className={styles.youtubeIcon} />
        </Tooltip>
      </a>
      <a href="https://www.instagram.com/flickmatch/" target="_blank" rel="noreferrer">
        <Tooltip title="Connect via Instagram" arrow>
          <InstagramIcon className={styles.instaIcon} />
        </Tooltip>
      </a>
      <a href="https://wa.me/message/YM7GOPO75EHPG1" target="_blank" rel="noreferrer">
        <Tooltip title="Message on Whatsapp" arrow>
          <WhatsAppIcon className={styles.whatsappIcon} />
        </Tooltip>
      </a>
      <a href="https://www.linkedin.com/company/flickmatch/about/" target="_blank" rel="noreferrer">
        <Tooltip title="Follow on LinkedIn" arrow>
          <LinkedInIcon className={styles.linkedInIcon} />
        </Tooltip>
      </a>
    </>
  );

  return (
    <AppBar color="transparent" elevation={1} position="static" className={styles.container}>
      <FlexBox className={isPortrait ? styles.mobileAppBar : styles.appBar}>
        <FlexBox className={isPortrait ? styles.mobileCompanyDetails : styles.companyDetails}>
          <img src={mainlogo} alt="logo" className={styles.logo} />
          <Typography className={styles.companyName}>Flickmatch Private Limited</Typography>
        </FlexBox>
        <FlexBox className={isPortrait ? styles.mobileMenuDetails : styles.menuDetails}>
          {menus()}
        </FlexBox>
      </FlexBox>

      <Divider className={styles.divider} orientation="horizontal" flexItem />

      <FlexBox className={isPortrait ? styles.mobileContactus : styles.appBar}>
        <FlexBox className={isPortrait ? styles.mobileMailId : styles.mailId}>
          <TelegramIcon className={styles.emailIcon} />
          <Typography className={styles.email}>&nbsp; flickmatch@gmail.com</Typography>
        </FlexBox>

        <FlexBox className={isPortrait ? styles.mobileSocialMediaIcons : styles.socialMediaIcons}>
          {socialIcons()}
        </FlexBox>
      </FlexBox>
    </AppBar>
  );
}

export default Footer;
