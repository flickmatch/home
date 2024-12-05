type ReservedPlayerDetails = {
  displayName: string;
  points?: { x: number; y: number };
  mobilePoints?: { x: number; y: number };
};

type waitListPlayerDetails = {
  displayName: string;
};

type EventDetails = {
  charges: number;
  date: string;
  eventId: string;
  testGame?: boolean;
  uniqueEventId: string;
  reservedPlayersCount: number;
  reservedPlayersList: ReservedPlayerDetails[];
  time: string;
  venueLocationLink: string;
  team_division: boolean;
  team1_color: string;
  team2_color: string;
  venueName: string;
  waitListPlayers: waitListPlayerDetails[];
  waitListPlayersCount: number;
  stripePaymentUrl: string;
  dummyData: boolean;
  singleEvent?: boolean;
  cityId?: string;
  handlePassName?: (name: string) => void;
  credits?: number;
  // team1Color?: string;
  // team2Color?: string;
};

type CityDetails = {
  cityId: string;
  cityName: string;
  dummyData: boolean;
  events: EventDetails[];
  countryCode: string;
};

type SportsVenues = {
  toLowerCase(): { [s: string]: unknown } | ArrayLike<unknown>;
  availableSportsIds: [];
  displayName: string;
  googleMapsLink: string;
  sportsVenueId: string;
};

type Weather = {
  temp: string;
  description: string;
  icon: string;
};

type WeatherIcon = {
  [key: string]: string;
};

type dummyDataArrays = {
  data: CityDetails[];
};

export type {
  CityDetails,
  ReservedPlayerDetails,
  waitListPlayerDetails,
  EventDetails,
  dummyDataArrays,
  SportsVenues,
  Weather,
  WeatherIcon,
};
