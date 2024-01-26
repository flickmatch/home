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

function assertEqual(actual, expected, label) {
  const areEqual = JSON.stringify(actual) === JSON.stringify(expected);
  // console.log(label, actual);
  console.assert(areEqual, `Assertion failed for ${label}:`, actual);
}

assertEqual(parseMessage(message), expected, 'result');
assertEqual(parseMessage(message2), expected2, 'result2');
