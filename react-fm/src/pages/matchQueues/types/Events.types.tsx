type ReservedPlayerDetails = {
  displayName: string;
};

type waitListPlayerDetails = {
  displayName: string;
};

type optionsTypes = {
  weekday: string;
  month: string;
  day: string;
};

type EventDetails = {
  charges: number;
  date: string;
  eventId: string;
  reservedPlayersCount: number;
  reservedPlayersList: ReservedPlayerDetails[];
  time: string;
  venueLocationLink: string;
  venueName: string;
  waitListPlayers: waitListPlayerDetails[];
  waitListPlayersCount: number;
  stripePaymentUrl: string;
};

type CityDetails = {
  cityId: string;
  cityName: string;
  events: EventDetails[];
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
  optionsTypes,
};
