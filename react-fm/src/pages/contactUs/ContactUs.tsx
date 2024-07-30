import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './ContactUs.module.scss';

function ContactUs() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Contact Us" />

      <div className={styles.contactPage}>
        <Typography variant="h3" className={styles.pageTitle}>
          Reach out to us
        </Typography>

        <FlexBox className={isPortrait ? styles.portraitContainer : styles.container}>
          <FlexBox className={isPortrait ? styles.portraitContactSection : styles.contactSection}>
            <Box className={styles.innerCard}>
              <EmailIcon className={styles.innerCardIcon} />
            </Box>
            <Typography className={styles.emailText}>
              <span className={styles.mailId}>Mail us at :-</span> flickmatch@gmail.com
            </Typography>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContactSection : styles.contactSection}>
            <Box className={styles.innerCard}>
              <MapsHomeWorkIcon className={styles.innerCardIcon} />
            </Box>
            <Typography className={styles.addressText}>
              Flickmatch Private Limited Tower 8 - Flat 1501, The Close South, Nirvana Country Road,
              Sector 50, Gurugram, Haryana, India 122018
            </Typography>
          </FlexBox>

          <FlexBox className={isPortrait ? styles.portraitContactSection : styles.contactSection}>
            <Box className={styles.innerCard}>
              <a
                href="https://wa.me/message/YM7GOPO75EHPG1"
                target="_blank"
                rel="noreferrer"
                className={styles.socialMediaLinks}
              >
                <Tooltip title="Message on Whatsapp" arrow>
                  <WhatsAppIcon className={styles.innerCardIcon} />
                </Tooltip>
              </a>
            </Box>

            <FlexBox className={styles.mediaSection}>
              <Box className={styles.innerCard}>
                <a
                  href="https://www.instagram.com/flickmatch/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialMediaLinks}
                >
                  <Tooltip title="Connect via Instagram" arrow>
                    <InstagramIcon className={styles.innerCardIcon} />
                  </Tooltip>
                </a>
              </Box>

              <Box className={styles.innerCard}>
                <a
                  href="https://www.youtube.com/@FlickMatch"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialMediaLinks}
                >
                  <Tooltip title="Connect via YouTube" arrow>
                    <YouTubeIcon className={styles.innerCardIcon} />
                  </Tooltip>
                </a>
              </Box>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  );
}

export default ContactUs;
