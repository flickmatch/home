import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function AboutUs() {
  return (
    <>
      <Meta title="About Us" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">About Us</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default AboutUs;
