import {
  convertToTimeSlot,
  createMessage,
} from "../src/notificationRequestParser.js";

const jsonData =
  '{"startTime":1699715640000,"endTime":1699719240000,"venueName":"HotFut GachiBowli","reservedPlayersCount":10,"charges":200,"venueLocationLink":"https://goo.gl/maps/1QzakRkJPHxT8GjRA","localTimeZone":"GMT+5:30","playerNameList":["Player1","Player2","sam","nooo"],"uniqueEventId": "1-2024-03-28-1","currency":"INR"}';
const expected = `Flickmatch football game at HotFut GachiBowli
📍 https://goo.gl/maps/1QzakRkJPHxT8GjRA
🕐 02:14 AM - 03:14 AM 
📅 12/11/2023 (Sunday)
5 🆚 5
₹200/- Per Person.

Confirmed Players:
1. Player1
2. Player2
3. sam
4. nooo

Please pay at (https://play.flickmatch.in/match-queues#1-2024-03-28-1) to confirm your spot.`;

function assertEqual(actual, expected, label) {
  const areEqual = JSON.stringify(actual) === JSON.stringify(expected);
  console.assert(areEqual, `Assertion failed for ${label}:`, actual);
}

assertEqual(
  createMessage(
    JSON.parse(jsonData),
    "https://play.flickmatch.in/match-queues"
  ),
  expected,
  "createMessage test"
);

const expectedFormattedTime1 = `🕐 11:30 AM - 05:30 PM 
📅 25/03/2024 (Monday)`;

assertEqual(
  convertToTimeSlot(1711368000000, 1711389600000, "GMT-6:00"),
  expectedFormattedTime1,
  "Date time conversion of time zone"
);

const expectedFormattedTime2 = `🕐 06:00 AM - 12:00 PM 
📅 26/03/2024 (Tuesday)`;
assertEqual(
  convertToTimeSlot(1711368000000, 1711389600000, "GMT+12:30"),
  expectedFormattedTime2,
  "Date time conversion of time zone"
);
