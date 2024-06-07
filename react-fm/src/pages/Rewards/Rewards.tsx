import { useState } from 'react';

import { Button, Input } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { addDoc, collection } from 'firebase/firestore';

import { db } from '@/Root';
import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './Rewards.module.scss';

function Rewards() {
  const isPortrait = useOrientation();

  const [email, setEmail] = useState('');
  const emailCollectionRef = collection(db, 'emails');

  function handleSubmit() {
    if (
      !email.match(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      alert('Please enter a valid email.');
      return;
    }
    try {
      const sendEmail = async () => {
        await addDoc(emailCollectionRef, { email });
      };
      sendEmail();
      alert('Thank you for submitting your email. We will notify you soon.');
      setEmail('');
    } catch (err) {
      alert('Something went wrong. Please try again later.');
      // eslint-disable-next-line
      console.error('Error:', err);
    }
  }

  return (
    <>
      <Meta title="Coming Soon" />

      <div className={styles.parent}>
        <FlexBox className={`${styles.Container} ${isPortrait ? styles.portraitContainer : ''}`}>
          <Typography
            variant="h3"
            className={isPortrait ? styles.pageTitleVertical : styles.pageTitle}
          >
            Get Free Games
          </Typography>
          <Typography variant="h5" className={styles.primaryHeading}>
            Monthly passes and flickmatch rewards coming soon...
          </Typography>
          <Typography variant="h6" className={styles.secondaryHeading}>
            Sign up to know more.
          </Typography>
          <Box className={styles.innerCard}>
            <Input
              placeholder="Enter you email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.emailInput} ${isPortrait ? styles.emailInputPotrait : ''}`}
            />
            <Button className={styles.submitBtn} onClick={handleSubmit}>
              Join the wailist
            </Button>
          </Box>
        </FlexBox>
      </div>
    </>
  );
}

export default Rewards;
