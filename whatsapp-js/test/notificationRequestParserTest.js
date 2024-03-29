import {
  convertToTimeSlot,
  createMessage,
} from "../src/notificationRequestParser.js";

const jsonData =
  '{"startTime":1699715640000,"endTime":1699719240000,"venueName":"HotFut GachiBowli","reservedPlayersCount":10,"charges":200,"venueLocationLink":"https://goo.gl/maps/1QzakRkJPHxT8GjRA","localTimeZone":"GMT+5:30","playerNameList":["Player1","Player2","sam","nooo"]}';
const expected = `HotFut GachiBowli (https://goo.gl/maps/1QzakRkJPHxT8GjRA)
20:44 - 21:44 11-10-2023 (Saturday)
5v5
₹200/- Per Person.

Confirmed Players:
1. Player1
2. Player2
3. sam
4. nooo

Please pay at play.flickmatch.in to confirm your spot.`;

function assertEqual(actual, expected, label) {
  const areEqual = JSON.stringify(actual) === JSON.stringify(expected);
  console.assert(areEqual, `Assertion failed for ${label}:`, actual);
}

assertEqual(
  createMessage(JSON.parse(jsonData)),
  expected,
  "createMessage test"
);

assertEqual(
  convertToTimeSlot(1711368000000, 1711389600000, "GMT-6:00"),
  "11:30 - 17:30 25-03-2024 (Monday)",
  "Date time conversion of time zone"
);
assertEqual(
  convertToTimeSlot(1711368000000, 1711389600000, "GMT+12:30"),
  "06:00 - 12:00 26-03-2024 (Tuesday)",
  "Date time conversion of time zone"
);
