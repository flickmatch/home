import { parseMessage } from "../src/parseUsualQueue.js";
const message = `FlickMatch pick-up game at Gallant Play Arena South City 1, Gurgaon (https://maps.app.goo.gl/ebEXAjXrsUvBanyY9)
12:08 PM - 09:30 PM 19-04-2023 (Saturday).
7v7
₹200.20/- Per Person.

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

const message2 = `
FlickMatch pick-up game at Gallant Play Arena South City 1, Gurgaon (https://maps.app.goo.gl/ebEXAjXrsUvBanyY9)
08:00 PM - 09:30 PM 
26-01-2024 (Friday).
7v7
₹250/- Per Person.

Add your name to the list:

⚫ Black/Blue 🔵

 1.⁠ ⁠Aman ✅
 2.⁠ ⁠Dwai + 3 ✅
 3.⁠ ⁠Milind + 1✅
 4.⁠ ⁠Dwai + 1✅
 5.⁠ ⁠Dwai✅
 6.⁠ ⁠Milind ✅
 7.⁠ ⁠Dwai +2✅

⚪White/Red🔴

 8.⁠ ⁠Aditya G
 9.⁠ ⁠Sanav 
10.⁠ ⁠Sahil T ✅
11.⁠ ⁠Prashant 
12.⁠ ⁠Pranit
13.⁠ ⁠Kishan ✅
14.⁠ ⁠Nishant

Waitlist
 1.⁠ ⁠Uday
2. 
3.
4.
5.

Please pay at
https://razorpay.me/@Flickmatch
`;

const message3 = `FlickMatch pick-up game at Lakeside Turf (https://goo.gl/maps/jvjUfqqcogZNMK8K6)
08:00 PM - 09:00 PM
23-02-2024 (Friday).
5v5
₹200/- Per Person. 


Add your name to the list:

⚫ Black/Blue 🔵

1. Uday
2.Sarthak
3.
4.
5. 

⚪White/Red🔴
   6.rahul
   7.rahul 1 
8.rahul 2
9.gairik
9. Abhishrey
10.harsh

Waitlist
1.
2.  
3.
4.
5. 

Please pay at play.flickmatch.in/match-queues or 
https://razorpay.me/@Flickmatch`;

// console.log(parseMessage(message3));

const expected = {
  isSuccessful: true,
  location: "Gallant Play Arena South City 1, Gurgaon",
  startTime: "12:08 PM",
  endTime: "09:30 PM",
  date: "19-04-2023",
  format: "7v7",
  cost: "200.20",
  listOfPlayers: [
    {
      name: "Abhishek",
    },
    {
      name: "Sarthak",
    },
    {
      name: "Uday",
    },
    {
      name: "Maulik",
    },
    {
      name: "Aditya R",
    },
    {
      name: "Govind",
    },
    {
      name: "Nishant",
    },
    {
      name: "Mridul",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "Abhimanyu",
    },
    {
      name: "",
    },
  ],
  waitlist: [
    {
      name: "Abhimanyu",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ],
};

const expected2 = {
  isSuccessful: true,
  location: "Gallant Play Arena South City 1, Gurgaon",
  startTime: "08:00 PM",
  endTime: "09:30 PM",
  date: "26-01-2024",
  format: "7v7",
  cost: "250",
  listOfPlayers: [
    { name: "⁠ ⁠Aman ✅" },
    { name: "⁠ ⁠Dwai + 3 ✅" },
    { name: "⁠ ⁠Milind + 1✅" },
    { name: "⁠ ⁠Dwai + 1✅" },
    { name: "⁠ ⁠Dwai✅" },
    { name: "⁠ ⁠Milind ✅" },
    { name: "⁠ ⁠Dwai +2✅" },
    { name: "⁠ ⁠Aditya G" },
    { name: "⁠ ⁠Sanav" },
    { name: "⁠ ⁠Sahil T ✅" },
    { name: "⁠ ⁠Prashant" },
    { name: "⁠ ⁠Pranit" },
    { name: "⁠ ⁠Kishan ✅" },
    { name: "⁠ ⁠Nishant" },
  ],
  waitlist: [
    { name: "⁠ ⁠Uday" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
};

const expected3 = {
  isSuccessful: true,
  location: "Lakeside Turf",
  startTime: "08:00 PM",
  endTime: "09:00 PM",
  date: "23-02-2024",
  format: "5v5",
  cost: "200",
  listOfPlayers: [
    { name: "Uday" },
    { name: "Sarthak" },
    { name: "rahul" },
    { name: "rahul 1" },
    { name: "rahul 2" },
    { name: "gairik" },
    { name: "Abhishrey" },
    { name: "harsh" },
  ],
  waitlist: [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
};

function assertEqual(actual, expected, label) {
  const areEqual = JSON.stringify(actual) === JSON.stringify(expected);
  // console.log(label, actual);
  console.assert(areEqual, `Assertion failed for ${label}:`, actual);
}

assertEqual(parseMessage(message), expected, "result");
assertEqual(parseMessage(message2), expected2, "result2");
assertEqual(parseMessage(message3), expected3, "result3");
