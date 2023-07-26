import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Welcome() {
  return (
    <>
      <Meta title="Home" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Welcome! to Home</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}


export default Welcome;
