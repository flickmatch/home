import Typography from '@mui/material/Typography';
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

<<<<<<< HEAD
//import useOrientation from '@/hooks/useOrientation';

=======
import styles from './Welcome.module.scss';

// import useOrientation from '@/hooks/useOrientation';
>>>>>>> 9d4bec37e13146dc84de31bdcdc883fc5dfa0641

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3" className={styles.test}>
          Welcome! to Home
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
