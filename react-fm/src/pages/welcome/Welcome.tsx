import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import styles from './Welcome.module.scss';

function Welcome() {
  return (
    <>
      <Meta title="Home" />
      <FullSizeCenteredFlexBox className={styles.container}>
        <Typography variant="h3">Welcome! to Home</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}


export default Welcome;
