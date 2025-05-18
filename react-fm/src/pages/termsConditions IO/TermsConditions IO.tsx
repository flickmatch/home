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
          In consideration of being allowed to participate in any way, in Flickmatch events or
          activities, I understand, acknowledge and agree to the following:
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I understand the physical requirements of the program, event, or activity in which I will
          be participating, and certify that I am physically fit and able to participate in the
          program, event, or activity, and have not been advised otherwise by a qualified medical
          professional.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I agree to comply with any and all rules, regulations, terms, and conditions for
          participation in the program, event, or activity, including but not limited to the rules
          of any sport that I may participate in and the Participant’s Code of Conduct. I agree to
          inspect the equipment, facilities, and premises to be used prior to participation. If I
          believe that anything is unsafe, I will inform Flickmatch officials, team captains,
          referees, or facilities owners of the issue and refuse to participate if not corrected.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I acknowledge and fully understand that as a participant, I will be engaging in activities
          that involve risk of serious injury, including permanent disability and death, property
          loss, and severe social and economic losses. These risks include, but are not limited to,
          those caused by: (a) the actions, inactions, or negligence of Flickmatch, other
          participants, volunteers, spectators, coaches, event officials, referees, and organizers;
          (b) conditions of the premises, facilities, or equipment used; (c) rules of play; (d)
          weather conditions; (e) the skill, ability, and condition of other participants, and their
          failure to abide by the rules, regulations, terms, and conditions for participation in the
          program, event, or activity; and, (f) vehicular traffic. I further acknowledge and fully
          understand that there may also be other risks that are not known or foreseeable at this
          time. Flickmatch cannot control these risks, nor has Flickmatch judged my skill level or
          ability prior to allowing me to participate and consequently is not in a position to
          guarantee my personal health or safety during my participation in the programs, events, or
          activities. I KNOWINGLY, INTELLIGENTLY, AND VOLUNTARILY ASSUME ALL SUCH RISKS, BOTH KNOWN
          AND UNKNOWN, ANTICIPATED AND UNANTICIPATED, FORESEEABLE AND UNFORESEEABLE, EVEN IF ARISING
          FROM THE NEGLIGENCE OF FLICKMATCH OR OTHERS, AND I ASSUME FULL RESPONSIBILITY AND
          LIABILITY FOR MY PARTICIPATION.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I, on behalf of myself, my heirs, beneficiaries, executors, administrators, personal
          representatives, and assigns, HEREBY WAIVE, RELEASE, DISCHARGE, AND AGREE NOT TO SUE
          Flickmatch, any of its affiliates, subsidiaries, or parents, or any of its or their
          managers, members, directors, officers, employees, volunteers, representatives, agents,
          coaches and referees, and other participants, sponsoring agencies, sponsors, advertisers,
          and if applicable, owners and lessors of equipment, facilities, and premises used to
          conduct the programs, events, or activities (collectively the “Releasees”), from any and
          all claims for damages, injuries, losses, liabilities, and expenses, including claims
          based on any Releasee’s negligence, which I may have or which may subsequently accrue to
          me, relating to, resulting from, or arising out of my use and/or participation in any
          programs, events, or activities of Flickmatch, including any injury or damage to my person
          or property, or to that of any other person or property.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I agree to indemnify, defend, and hold the Releasees harmless from and against any and all
          claims for damages, injuries, losses, liabilities, and expenses incurred by Flickmatch
          relating to, resulting from, or arising out of my participation in any Flickmatch program,
          event, or activity.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I consent to have medical treatment that may be deemed advisable in the event of injury,
          accident, and/or illness during any program, event, or activity. I release Flickmatch and
          all persons participating in any such medical treatment from all responsibility for any
          such actions.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I hereby grant to Flickmatch and those acting with its authority, the right to photograph,
          videotape, or otherwise capture or collect my likeness, voice, and sounds (the “Content”)
          during my participation in the Flickmatch program, event, or activity. I further
          acknowledge the Content to be works made for hire, and otherwise irrevocably assign and
          grant to Flickmatch all rights in this Content and the right to use or sublicense the
          Content and my name, likeness, and biography, in Flickmatch’s discretion, in all media and
          in all forms and for all purposes, including without limitation, advertising and other
          promotions for Flickmatch, without any further consideration to me or any limitation
          whatsoever.
        </Typography>

        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          By signing up for Flickmatch, I agree to receive SMS messages related to my scheduled
          games, including confirmations and cancellations. These messages are non-promotional and
          required for service updates. Message and data rates of your service provider may apply.
          Message frequency varies. If I wish to opt out, I can reply STOP to any message or update
          my preferences in the app settings. If I want help, I can reply HELP.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I intend that this Waiver and Release of Liability shall be construed broadly to provide a
          release and waiver to the maximum extent permissible under applicable law.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          I HAVE READ THIS WAIVER AND RELEASE OF LIABILITY CAREFULLY AND I FULLY UNDERSTAND ITS
          TERMS, AND I UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING THIS DOCUMENT,
          AND I SIGN IT KNOWINGLY, INTELLIGENTLY AND VOLUNTARILY WITHOUT ANY INDUCEMENT OR DURESS.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          CODE OF CONDUCT: The Participant’s Code of Conduct applies to all Flickmatch participants.
          This code applies to players as individuals or as a team, and the penalties can apply to
          any individual or an entire team. This code becomes effective as soon as participants
          arrive at the facility of play and remains in effect until the participants leave the
          facility.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          The purpose of the Participant’s Code of Conduct is to promote a safe and fun environment
          for all participants in the Flickmatch community. All Flickmatch participants should
          exhibit ethical, respectful, and sportsmanlike conduct. Flickmatch celebrates diversity,
          equity, and inclusion, and prohibits discrimination based on race, sex, religion, national
          origin, age, sexual orientation, and gender identity.
        </Typography>
        <Typography className={isPortrait ? styles.portraitSubheading : styles.subHeading}>
          By using this app, you agree to abide by our Terms of Service, which includes our strict
          policy against objectionable content and abusive behavior. We do not tolerate any content
          or conduct that is illegal, threatening, harassing, abusive, defamatory, discriminatory,
          offensive, or otherwise objectionable. You are responsible for all content you post and
          engage with on this app. If you encounter content that violates our policies, please
          report it immediately. We reserve the right to remove any content and to restrict or
          terminate access to users who violate these terms. By using this app, you agree that you
          understand and will adhere to these guidelines and that failure to comply may result in
          the suspension or termination of your account.
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
            Express any derogatory, discriminatory, or unwelcome comments based on or in reference
            to race, sex, religion, national origin, disability, age, sexual orientation, or gender
            identity.
          </li>
          <li>
            Engage in any physical or verbal sexual harassment. Sexual harassment is unwanted,
            unacceptable, inappropriate, or offensive behavior of a sexual nature that affects the
            dignity of another player and creates an intimidating, hostile, unstable, or offensive
            play environment.
          </li>
          <li>
            Lay hand upon, push, shove, strike, or threaten an official, employee, participant, or
            spectator.
          </li>
          <li>Refuse to abide by an official’s decision.</li>
          <li>
            Demonstrate objectionable behavior or dissent at an official’s decision by throwing
            equipment or any other forceful action.
          </li>
          <li>
            Discuss with an official, in any manner, the decision reached by such official
            (exception is made for team captains).
          </li>
          <li>Verbally or physically abuse any official for any decision or judgment.</li>
          <li>Verbally or physically abuse any participant.</li>
          <li>
            Engage in overly physical play or use unnecessary rough tactics against another
            participant.
          </li>
          <li>
            Discuss publicly in a derogatory manner any play, decision, or personal opinion of other
            participants.
          </li>
          <li>Smoke at the facility.</li>
          <li>Possess or consume alcohol at the facility.</li>
          <li>Appear in an intoxicated condition at the facility.</li>
          <li>Display a lack of respect or care for facilities.</li>
          <li>Knowingly engage in illegal activities.</li>
          <li>
            Play under another individual’s name, falsified name, or falsified address on an
            official roster.
          </li>
          <li>
            Promote any product or competing league to officials, employees, participants, or
            spectators.
          </li>
          <li>
            Purposely disregard Flickmatch rules. In addition, participants are liable for damage to
            equipment or the facility.
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
          I acknowledge that I HAVE READ THIS WAIVER AND RELEASE OF LIABILITY CAREFULLY AND I FULLY
          UNDERSTAND ITS TERMS, AND I UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING
          THIS DOCUMENT, AND I SIGN IT KNOWINGLY, INTELLIGENTLY, AND VOLUNTARILY WITHOUT ANY
          INDUCEMENT OR DURESS.
        </Typography>
      </FlexBox>
    </>
  );
}

export default TermsConditionsIO;
