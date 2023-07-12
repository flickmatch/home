import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import Typography from '@mui/material/Typography';

function Welcome() {

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
