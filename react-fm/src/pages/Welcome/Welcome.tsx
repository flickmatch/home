import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Welcome() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Welcome! to Home</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
