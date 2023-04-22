import { parseMessage } from "../src/parseUsualQueue.js";
const message = `FlickMatch pick-up game at Gallant Play Arena South City 1, Gurgaon (https://maps.app.goo.gl/ebEXAjXrsUvBanyY9)
12:08 PM - 09:30 PM 19-04-2023 (Saturday).
7v7
₹200- Per Person.

Add your name to the list:
1. Abhishek
2. Sarthak 
3. Uday
4. Maulik
5. Aditya R
6. Govind 
7. Nishant
8. Mridul
9. 
10. 
11.
12.
13. Abhimanyu
14.

Waitlist
1. Abhimanyu
2.
3.
4.

Please pay at 9818678977 on Paytm or GPay to confirm your spot.`;

const expected = {
  isSuccessful: true,
  location: "Gallant Play Arena South City 1, Gurgaon",
  startTime: "12:08 PM",
  endTime: "09:30 PM",
  date: "19-04-2023",
  format: "7v7",
  cost: '200',
  listOfPlayers: [
    {
      "name": "Abhishek"
    },
    {
      "name": "Sarthak"
    },
    {
      "name": "Uday"
    },
    {
      "name": "Maulik"
    },
    {
      "name": "Aditya R"
    },
    {
      "name": "Govind"
    },
    {
      "name": "Nishant"
    },
    {
      "name": "Mridul"
    },
    {
      "name": ""
    },
    {
      "name": ""
    },
    {
      "name": ""
    },
    {
      "name": ""
    },
    {
      "name": "Abhimanyu"
    },
    {
      "name": ""
    }
  ],
  waitlist: [
    {
      "name": "Abhimanyu"
    },
    {
      "name": ""
    },
    {
      "name": ""
    },
    {
      "name": ""
    }
  ],
};

const result = parseMessage(message);
console.log(result);
console.assert(JSON.stringify(result) === JSON.stringify(expected));
