const apiUrl = `${import.meta.env.VITE_API_URL}`;

const query = JSON.stringify({
  query: `
  query event {
    event(uniqueEventId: '2-2024-08-03-1') {
      currency
      startTime
      endTime
      eventId
      uniqueEventId
      displayTitle
      venueLocationLink
      charges
      date
      time
      venueName
      reservedPlayersCount
      waitListPlayersCount
      stripePaymentUrl
      reservedPlayersList {
        displayName
      }
    }
  }
`,
});
export { apiUrl, query };
