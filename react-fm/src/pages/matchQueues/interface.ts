interface ReservedPlayerDetails {
  displayName: string;
}

interface UnReservedPlayerDetails {
  displayName: string;
}

interface EventsDetails {
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

interface CityDetails {
  cityId: string;
  cityName: string;
  events: EventsDetails[];
}

export type { CityDetails, ReservedPlayerDetails, UnReservedPlayerDetails, EventsDetails };