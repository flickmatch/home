import Typography from '@mui/material/Typography';
<<<<<<< HEAD

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

// import useOrientation from '@/hooks/useOrientation';
=======
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

//import useOrientation from '@/hooks/useOrientation';

>>>>>>> 47894beb5c1db136f15b10ed5daa0c9f1b1e7298

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

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
