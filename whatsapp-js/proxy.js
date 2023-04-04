//require('isomorphic-fetch');
import fetch from 'isomorphic-fetch';
export const getEvents = () => {
    
    const data = fetch(' http://ec2-3-110-121-129.ap-south-1.compute.amazonaws.com:8080/platform-0.0.1-SNAPSHOT/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
        query {
        city(cityId: "1") {
          cityId
          cityName
          events {
            displayId
            displayTitle
            venueLocationLink
            charges
          }
        }
      }`
    }),
})
.then(res => res.json())
.then(res => {
    //console.log(res.data.city.events);
    const response = [];
    res.data.city.events.forEach(event => {
        //console.log(event);
        const displayString = event.displayTitle 
        + ' ' + event.venueLocationLink
        + ' ' + event.charges + "/- Per Person"
        + ' ' + event.displayId;
        //console.log(displayString);
        response.push(displayString);
    });
    return response;
});
return data;
}
















