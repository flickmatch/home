import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function ContactUs() {
  return (
    <>
      <Meta title="Contact Us" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h4">flickmatch@gmail.com</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default ContactUs;
