import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import { logingin } from '@/slices/loginSlice';

import styles from './TermsConditions.module.scss';

function TermsConditions() {
  const isPortrait = useOrientation();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      dispatch(logingin());
    }
  }, []);

  return (
    <>
      <Meta title="Terms & Conditions" />
      <div>
        <Header />
      </div>
      <FlexBox className={isPortrait ? styles.portraitHead : styles.head}>
        <Typography variant="h3" className={styles.heading}>
          Terms & Conditions
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The owner of the website, along with its subsidiaries and affiliates (referred to as
          &#34;Website,&#34; &#34;Website Owner,&#34; &#34;we,&#34; &#34;us,&#34; or &#34;our&#34;),
          presents the information found on the website or any of its pages (&#34;website&#34;) to
          visitors (&#34;visitors&#34;) (collectively referred to as &#34;you&#34; or &#34;your&#34;
          hereinafter). Your access and use of the website are governed by the terms and conditions
          outlined in these website terms and conditions, the privacy policy, and any other
          pertinent terms, conditions, policies, and notices that may be relevant to a specific
          section or module of the website.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          Greetings and welcome to our website. By continuing to explore and utilize this website,
          you indicate your agreement to adhere to and be governed by the subsequent terms and
          conditions of use. These terms, coupled with our privacy policy, establish the
          relationship between you and Flickmatch Private Limited concerning this website.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The term &#39;Flickmatch Private Limited&#39; or &#39;us&#39; or &#39;we&#39; refers to
          the owner of the website whose registered/operational office is Tower 8 - Flat 1501, The
          Close South, Nirvana Country, Nirvana Central Road, Sector 50, Gurugram Gurugram HARYANA
          122018. The term &#39;you&#39; refers to the user or viewer of our website.
        </Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          The use of this website is subject to the following terms of use:
        </Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitTerms : styles.terms}>
        <ul>
          <li>
            By engaging in Flickmatch games, you consent to potential recording and sharing of
            gameplay on social media, acknowledging that you have no objections.{' '}
          </li>
          <li>
            The content of the pages of this website is for your general information and use only.
            It is subject to change without notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
            timeliness, performance, completeness or suitability of the information and materials
            found or offered on this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we expressly exclude
            liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on this website is entirely at your own risk,
            for which we shall not be liable. It shall be your own responsibility to ensure that any
            products, services or information available through this website meet your specific
            requirements.
          </li>
          <li>
            This website contains material which is owned by or licensed to us. This material
            includes, but is not limited to, the design, layout, look, appearance and graphics.
            Reproduction is prohibited other than in accordance with the copyright notice, which
            forms part of these terms and conditions.
          </li>
          <li>
            All trademarks reproduced in this website which are not the property of, or licensed to,
            the operator are acknowledged on the website.
          </li>
          <li>
            Unauthorized use of this website may give rise to a claim for damages and/or be a
            criminal offense.
          </li>
          <li>
            From time to time this website may also include links to other websites. These links are
            provided for your convenience to provide further information.
          </li>
          <li>
            You may not create a link to this website from another website or document without
            Flickmatch Private Limited&#39;s prior written consent.
          </li>
          <li>
            Your use of this website and any dispute arising out of such use of the website is
            subject to the laws of India or other regulatory authority.
          </li>
        </ul>
      </FlexBox>
      <Footer />
    </>
  );
}

export default TermsConditions;
