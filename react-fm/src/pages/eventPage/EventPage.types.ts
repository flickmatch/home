type PlayerDetail = {
  displayName: string;
};

type Event = {
  reservedPlayersList: ReservedPlayerDetails[];
  index: number;
  startTime: string;
  endTime: string;
  charges: number;
  reservedPlayersCount: number;
  waitListPlayersCount: number;
  sportName: string;
  venueName: string;
  venueLocationLink: string;
  stripePaymentUrl: string;
  currency: string;
  eventId: string;
  uniqueEventId: string;
  date: string;
  time: string;
  waitListPlayers: WaitListPlayerList[];
  credits?: number;
};

type WaitListPlayerList = {
  displayName: string;
};

type ReservedPlayerDetails = {
  displayName: string;
};

export type { Event, PlayerDetail, ReservedPlayerDetails };
