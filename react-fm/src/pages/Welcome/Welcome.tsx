import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import Typography from '@mui/material/Typography';
import useOrientation from '@/hooks/useOrientation';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

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
