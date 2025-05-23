import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import styles from './TermsConditions.module.scss';

function TermsConditionsIO() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Terms & Conditions" />

      <FlexBox className={isPortrait ? styles.portraitHead : styles.head}>
        <Typography variant="h3" className={styles.heading}>
          Terms & Conditions
        </Typography>
      </FlexBox>
      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          In order to be permitted to take part in any Flickmatch events or activities, I
          understand, acknowledge, and agree to the following terms:
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I acknowledge the physical demands of the program, event, or activity I will be joining
          and confirm that I am in good physical condition to participate. I have not received any
          medical advice suggesting otherwise from a qualified healthcare professional.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I agree to follow all rules, regulations, terms, and conditions related to participating
          in the program, event, or activity—including the rules of any sport involved and the
          Participant’s Code of Conduct.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I, on behalf of myself and my heirs, beneficiaries, executors, administrators, personal
          representatives, and assigns, HEREBY WAIVE, RELEASE, AND DISCHARGE Flickmatch—along with
          its affiliates, subsidiaries, parent companies, and all of their managers, directors,
          officers, employees, volunteers, agents, coaches, referees, other participants, sponsors,
          advertisers, and, where applicable, the owners and lessors of any equipment, facilities,
          or venues used for the events or activities (collectively referred to as the
          “Releasees”)—from any and all claims, liabilities, damages, losses, or expenses. This
          includes claims arising from the negligence of any Releasee, that I now have or may have
          in the future, related to or resulting from my participation in any Flickmatch programs,
          events, or activities, including any injury or damage to myself, my property, or others. I
          also agree not to pursue legal action against any of the Releasees for such matters.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I agree to protect, defend, and compensate the Releasees against any and all claims,
          damages, injuries, losses, liabilities, or expenses that Flickmatch may face as a result
          of my participation in any of its programs, events, or activities.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I give my consent to receive medical treatment if it is considered necessary in the event
          of an injury, accident, or illness during any program, event, or activity. I release
          Flickmatch and anyone involved in providing such medical care from any liability related
          to that treatment.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I give Flickmatch, and those acting on its behalf, permission to photograph, record, or
          otherwise capture my image, voice, and sounds (&quot;Content&quot;) during my
          participation in any Flickmatch program, event, or activity. I understand that this
          Content is considered a work made for hire and I irrevocably assign all rights to
          Flickmatch. Flickmatch may use or license the Content, along with my name, image, and
          biography, in any media and format, for any purpose—including advertising or
          promotion—without any further payment or restriction.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          By registering with Flickmatch, I consent to receiving SMS messages about my scheduled
          games, such as confirmations and cancellations. These messages are service-related, not
          promotional. Standard message and data rates from my mobile provider may apply, and the
          number of messages may vary. To stop receiving messages, I can reply STOP or change my
          preferences in the app settings. For assistance, I can reply HELP.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I intend for this Waiver and Release of Liability to be interpreted as broadly as
          possible, allowing the fullest release and waiver permitted under applicable law.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          Having carefully read and fully understood this waiver and release of liability, I
          acknowledge that I am giving up significant rights by signing it. My decision to sign is
          made knowingly, intelligently, and voluntarily, without any pressure or coercion.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The Flickmatch Participant&apos;s Code of Conduct applies to all individuals and teams
          involved in Flickmatch from the moment they arrive at the playing facility until they
          leave. Penalties for violating this code can be applied to individual players or entire
          teams.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The Participant&apos;s Code of Conduct aims to ensure a secure and enjoyable experience
          for everyone in the Flickmatch community. All participants are expected to behave
          ethically, respectfully, and with good sportsmanship. Flickmatch values diversity,
          fairness, and inclusion, and does not tolerate discrimination based on race, sex,
          religion, national origin, age, sexual orientation, or gender identity.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          When you use this app, you&apos;re agreeing to follow our Terms of Service, which strictly
          prohibits offensive content and abusive behavior. We have a zero-tolerance policy for
          anything illegal, threatening, harassing, abusive, defamatory, discriminatory, offensive,
          or otherwise inappropriate. You are accountable for all the content you share and interact
          with on this app. If you see anything that violates our rules, please report it right
          away. We have the right to remove content and block or delete the accounts of users who
          don&apos;t follow these terms. By using this app, you&apos;re confirming that you
          understand and will stick to these guidelines, and that not doing so could lead to your
          account being suspended or terminated.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The Participant’s Code of Conduct is subject to change without notice.
        </Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>No Participant Shall:</Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitTerms : styles.terms}>
        <ul>
          <li>
            Do not express any negative, biased, or offensive remarks that target someone&apos;s
            race, sex, religion, national origin, disability, age, sexual orientation, or gender
            identity.
          </li>
          <li>
            Do not participate in any physical or verbal sexual harassment. This includes any
            unwanted, unacceptable, inappropriate, or offensive sexual behavior that disrespects
            another player and makes the playing environment feel intimidating, hostile, unstable,
            or offensive.
          </li>
          <li>
            Do not touch, push, shove, hit, or threaten any official, employee, participant, or
            spectator.
          </li>
          <li>Refuse to abide by an official’s decision.</li>
          <li>
            Do not show unacceptable behavior or disagree with an official&apos;s decision by
            throwing equipment or acting forcefully.
          </li>
          <li>
            Only team captains are allowed to discuss an official&apos;s decision with them. Other
            participants should not engage in any discussion about the official&apos;s ruling.
          </li>
          <li>Verbally or physically abuse any official for any decision or judgment.</li>
          <li>Verbally or physically abuse any participant.</li>
          <li>
            Engage in overly physical play or use unnecessary rough tactics against another
            participant.
          </li>
          <li>
            Do not publicly criticize other participants&apos; plays, decisions, or personal
            opinions in a negative way.
          </li>
          <li>Smoke at the facility.</li>
          <li>Possess or consume alcohol at the facility.</li>
          <li>Do not come to the facility while under the influence of alcohol or drugs.</li>
          <li>Display a lack of respect or care for facilities.</li>
          <li>Knowingly engage in illegal activities.</li>
          <li>
            Do not register or play using someone else&apos;s name, a fake name, or a false address
            on any official team list.
          </li>
          <li>
            Do not advertise any products or competing sports leagues to officials, employees,
            participants, or spectators.
          </li>
          <li>
            Do not intentionally ignore Flickmatch rules. Additionally, participants will be held
            responsible for any damage they cause to equipment or the facility.
          </li>
        </ul>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          Not following the Participant’s Code of Conduct could result in penalties such as:
        </Typography>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitTerms : styles.terms}>
        <ul>
          <li>Warning by official</li>
          <li>Ejection</li>
          <li>Suspension from games without refund</li>
          <li>Removal from the league without refund</li>
        </ul>
      </FlexBox>

      <FlexBox className={isPortrait ? styles.portraitContent : styles.content}>
        <Typography className={styles.termsHeading}>
          I confirm that I have thoroughly read and completely understand this waiver and release of
          liability. I am aware that by signing it, I am giving up significant rights, and I am
          doing so consciously, with full understanding, and of my own free will, without any
          pressure or influence.
        </Typography>
      </FlexBox>
    </>
  );
}

export default TermsConditionsIO;
