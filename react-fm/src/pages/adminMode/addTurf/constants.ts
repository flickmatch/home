const apiUrl = 'https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/graphql';

const gameQueuesApiUrl = 'https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql';

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
