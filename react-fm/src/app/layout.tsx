// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Flickmatch',
    template: `%s | Flickmatch`,
  },
  keywords: [
    'flickmatch',
    'find-players',
    'matchmaking',
    'skill',
    'grounds',
    'football',
    'soccer',
    'sports',
    'games',
    'ranking-plaform',
    'technology',
    'skill-assessments',
    'collect-data',
    'deep-learning',
    'video-statistics-generator',
    'players-history',
    'find-games',
    'organise-games',
    'India',
    'US',
    'Gurgaon',
    'Hyderabad',
    'Kolkata',
    'Noida',
    'San Francisco',
    'San Jose',
    'Mountain View',
  ],
  metadataBase: new URL('https://play.flickmatch.in/'),
  description:
    "Flickmatch is envisioned to be a platform that offers matchmaking and record keeping for casual everyday sports. Currently, Flickmatch finds or organises football games near you. Whether you're a casual solo, in a group or a team looking to play Losers to Pay (LTP), we take care of all your football matchmaking needs from finding players to reserving grounds.",
  authors: [
    {
      name: 'Flickmatch',
      url: 'https://play.flickmatch.in/',
    },
  ],
  creator: 'Flickmatch',
  openGraph: {
    title: 'Find players, join teams and play matches!',
    description: 'Looking to play football ? Play your next football match with Flickmatch!',
    url: 'https://play.flickmatch.in',
    siteName: 'flickmatch.in',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314',
    shortcut:
      'https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314',
    apple:
      'https://firebasestorage.googleapis.com/v0/b/flickmatch-374a2.appspot.com/o/fm_rainbow.png?alt=media&token=1b06ae27-bf10-4974-9100-6bb5f2308314',
  },
  manifest: `https://www.yoursite/site.webmanifest`,
};
