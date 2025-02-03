const apiUrl =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

const gameQueuesApiUrl =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_API_LOCAL
    : import.meta.env.VITE_API_URL;

const query = JSON.stringify({
  query: `query {
        city(cityId) {
          cityId
          cityName
          sportsVenues {
            sportsVenueId
            displayName
            googleMapsLink
            availableSportsIds
          }      
        }
      }`,
});

export { apiUrl, gameQueuesApiUrl, query };
