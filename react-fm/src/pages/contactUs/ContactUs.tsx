import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import styles from './ContactUs.module.scss';

function ContactUs() {
  return (
    <>
      <Meta title="Contact Us" />
      <FullSizeCenteredFlexBox className={styles.container}>
        <Typography variant="h4">flickmatch@gmail.com</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default ContactUs;
