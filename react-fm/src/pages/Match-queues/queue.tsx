import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function MatchQueue() {
  return (
    <>
      <Meta title="Match Queues" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Match Queues</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default MatchQueue;
