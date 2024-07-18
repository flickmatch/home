import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './PrivacyPolicy.module.scss';

function PrivacyPolicy() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Privacy Policy" />

      <FlexBox className={isPortrait ? styles.portraitHead : styles.head}>
        <Typography variant="h3" className={styles.heading}>
          Privacy Policy
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          This privacy policy outlines how Flickmatch Private Limited uses and safeguards the
          information you provide on this website. We are dedicated to protecting your privacy. If
          we request identifiable information while you use this website, be assured it will only be
          used as per this privacy statement.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          Flickmatch Private Limited may periodically update this policy by revising this page.
          Please check this page occasionally to ensure you are content with any modifications.
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          We may collect the following information:
        </Typography>
        <ul>
          <li>Name</li>
          <li>Contact information including email address and phone number</li>
          <li>Demographic information such as postcode, preferences and interests</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          What we do with the information we gather
        </Typography>
        <ul>
          <li>Internal record keeping.</li>
          <li>
            Require this information to understand your needs and provide you with a better service.
          </li>
          <li>We may use the information to improve our products and services.</li>
          <li>
            We may periodically send promotional emails about new products, special offers or other
            information which we think you may find interesting using the email address which you
            have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you for market research
            purposes. We may contact you by email, phone, fax or mail. We may use the information to
            customise the website according to your interests.
          </li>
          <Typography className={styles.gatherInformation}>
            We are committed to ensuring that your information is secure. In order to prevent
            unauthorised access or disclosure we have put in suitable measures.
          </Typography>
        </ul>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>How we use cookies</Typography>
        <br />
        <Typography className={styles.whatIsCookie}>
          A cookie is a small file that seeks permission to be stored on your computer hard drive.
          Once accepted, the file is added, and the cookie aids in analyzing web traffic or
          notifying you during visits to specific sites. Cookies enable web applications to
          customize their operations based on your preferences, tailoring responses to your
          individual needs and preferences.
        </Typography>
        <Typography className={styles.whatIsCookie}>
          We use traffic log cookies to identify which pages are being used. This helps us analyses
          data about webpage traffic and improve our website in order to tailor it to customer
          needs. We only use this information for statistical analysis purposes and then the data is
          removed from the system.
        </Typography>
        <Typography className={styles.whatIsCookie}>
          Overall, cookies help us provide you with a better website, by enabling us to monitor
          which pages you find useful and which you do not. A cookie in no way gives us access to
          your computer or any information about you, other than the data you choose to share with
          us.
        </Typography>
        <Typography className={styles.whatIsCookie}>
          You can choose to accept or decline cookies. Most web browsers automatically accept
          cookies, but you can usually modify your browser setting to decline cookies if you prefer.
          This may prevent you from taking full advantage of the website.
        </Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          Controlling your personal information
        </Typography>
        <br />
        <ul>
          <Typography className={styles.chooseToRestrict}>
            You may choose to restrict the collection or use of your personal information in the
            following ways:
          </Typography>
          <li>
            Whenever you are asked to fill in a form on the website, look for the box that you can
            click to indicate that you do not want the information to be used by anybody for direct
            marketing purposes.
          </li>
          <li>
            If you have previously agreed to us using your personal information for direct marketing
            purposes, you may change your mind at any time by writing to or emailing us at
            flickmatch@gmail.com
          </li>

          <Typography className={styles.ourPolicy}>
            Your personal information will not be sold, distributed, or leased to third parties
            without your consent, unless mandated by law. With your permission, we may use your
            personal information to send you promotional material about third parties that we
            believe might interest you. If you believe any information we have about you is
            inaccurate or incomplete, please notify us promptly through writing or email at the
            provided address, and we will promptly rectify any inaccuracies.
          </Typography>
        </ul>
      </FlexBox>
    </>
  );
}

export default PrivacyPolicy;
