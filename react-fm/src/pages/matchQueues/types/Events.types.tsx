type ReservedPlayerDetails = {
  displayName: string;
};

type waitListPlayerDetails = {
  displayName: string;
};

type EventDetails = {
  charges: number;
  date: string;
  eventId: string;
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
