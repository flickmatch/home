import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
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

function Footer() {
  const isPortrait = useOrientation();

  const menus = () => (
    <>
      <Box className={styles.box} sx={{ flexGrow: 1 }}>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/contact-us"
        >
          Contact us
        </Typography>

        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/refund-cancellation"
        >
          Refund Policy
        </Typography>
      </Box>
      <Box className={styles.box} sx={{ flexGrow: 1 }}>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/terms-conditions"
        >
          Terms & Conditions
        </Typography>
        <Typography
          className={isPortrait ? styles.mobileMenuItem : styles.menuItem}
          component={Link}
          to="/privacy-policy"
        >
          Privacy Policy
        </Typography>
      </Box>
    </>
  );

  const socialIcons = () => (
    <>
      <a
        href="https://www.youtube.com/@FlickMatch"
        aria-label="Connect via YouTube"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip title="Connect via YouTube" arrow>
          <YouTubeIcon className={styles.youtubeIcon} />
        </Tooltip>
      </a>
      <a
        href="https://www.instagram.com/flickmatch/"
        aria-label="Connect via Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip title="Connect via Instagram" arrow>
          <InstagramIcon className={styles.instaIcon} />
        </Tooltip>
      </a>
      <a
        href="https://wa.me/+919000346921"
        aria-label="Message on Whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip title="Message on Whatsapp" arrow>
          <WhatsAppIcon className={styles.whatsappIcon} />
        </Tooltip>
      </a>
      <a
        href="https://www.linkedin.com/company/flickmatch-incorporated"
        aria-label="Follow on LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip title="Follow on LinkedIn" arrow>
          <LinkedInIcon className={styles.linkedInIcon} />
        </Tooltip>
      </a>
      <a
        href="https://github.com/flickmatch"
        aria-label="Follow on github"
        target="_blank"
        rel="noreferrer"
      >
        <Tooltip title="Follow on github" arrow>
          <GitHubIcon className={styles.githubIcon} />
        </Tooltip>
      </a>
    </>
  );

  return (
    <AppBar color="transparent" elevation={1} position="static" className={styles.container}>
      <FlexBox className={isPortrait ? styles.mobileAppBar : styles.appBar}>
        <FlexBox className={isPortrait ? styles.mobileCompanyDetails : styles.companyDetails}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314"
            alt="logo"
            className={styles.logo}
          />
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
          <Typography className={styles.email}>flickmatch@gmail.com</Typography>
        </FlexBox>

        <FlexBox className={isPortrait ? styles.mobileSocialMediaIcons : styles.socialMediaIcons}>
          {socialIcons()}
        </FlexBox>
      </FlexBox>
    </AppBar>
  );
}

export default Footer;
