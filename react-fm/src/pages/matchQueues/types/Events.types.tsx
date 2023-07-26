type ReservedPlayerDetails = {
  displayName: string;
}

type UnReservedPlayerDetails = {
  displayName: string;
}

type EventsDetails = {
  charges: number;
  date: string;
  displayId: string;
  reservedPlayersCount: number;
  reservedPlayersList: ReservedPlayerDetails[];
  time: string;
  venueLocationLink: string;
  venueName: string;
  waitListPlayers: UnReservedPlayerDetails[];
  waitListPlayersCount: number;
}

type CityDetails = {
  cityId: string;
  cityName: string;
  events: EventsDetails[];
}

export type { CityDetails, ReservedPlayerDetails, UnReservedPlayerDetails, EventsDetails };