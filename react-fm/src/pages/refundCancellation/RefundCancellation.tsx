import { useEffect, useState } from 'react';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';

import styles from './RefundCancellation.module.scss';

function RefundCancellation() {
  const isPortrait = useOrientation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Meta title="Refund & Cancellation" />
      <div>
        <Header loggedIn={isLoggedIn} />
      </div>
      <FlexBox className={isPortrait ? styles.portraitHome : styles.home}>
        <Typography variant="h3" className={styles.heading}>
          Cancellation & Refund Policy
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          Flickmatch Private Limited is committed to assisting its customers to the fullest extent
          possible, and as a result, maintains a lenient cancellation policy. According to this
          policy:
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitConditions : styles.conditions}>
        <FlexBox
          className={
            isPortrait ? styles.portraitConditionFirstContainer : styles.conditionFirstContainer
          }
        >
          <FlexBox className={styles.conditionsIcon}>
            <RemoveShoppingCartIcon className={styles.icon} />
          </FlexBox>
          <Typography
            className={isPortrait ? styles.portraitConditionFirst : styles.conditionFirst}
          >
            We can only consider cancellations if requested promptly after placing the order. Please
            note that cancellation requests may not be accommodated if the orders have already been
            communicated to the on-ground team.
          </Typography>
        </FlexBox>
        <FlexBox
          className={
            isPortrait ? styles.portraitConditionSecondContainer : styles.conditionSecondContainer
          }
        >
          <FlexBox className={styles.conditionsIcon}>
            <CurrencyExchangeIcon className={styles.icon} />
          </FlexBox>
          <Typography
            className={isPortrait ? styles.portraitConditionSecond : styles.conditionSecond}
          >
            Events may be subject to changes, including cancellation, postponement, rescheduling, or
            relocation. In case of cancellation, refunds will be automatically issued to your
            original payment method within 6-8 business days, requiring no additional action from
            you.
          </Typography>
        </FlexBox>
        <FlexBox
          className={
            isPortrait ? styles.portraitConditionThirdContainer : styles.conditionThirdContainer
          }
        >
          <FlexBox className={styles.conditionsIcon}>
            <AttachEmailIcon className={styles.icon} />
          </FlexBox>
          <Typography
            className={isPortrait ? styles.portraitConditionThird : styles.conditionThird}
          >
            While our aim is to ensure an enjoyable experience for everyone, if you encounter any
            issues, kindly reach out to our Customer Service team at flickmatch@gmail.com. Requests
            will be addressed after a thorough investigation by our team within 2 days of the event.
          </Typography>
        </FlexBox>
        <FlexBox
          className={
            isPortrait ? styles.portraitConditionFourthContainer : styles.conditionFourthContainer
          }
        >
          <FlexBox className={styles.conditionsIcon}>
            <QueryBuilderIcon className={styles.icon} />
          </FlexBox>
          <Typography
            className={isPortrait ? styles.portraitConditionFourth : styles.conditionFourth}
          >
            In case of any Refunds approved by the Flickmatch Private Limited, it’ll take 6-8
            business days for the refund to be processed to the end customer.
          </Typography>
        </FlexBox>
      </FlexBox>
      <Footer />
    </>
  );
}

export default RefundCancellation;
