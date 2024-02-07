import { createMessage } from "../src/notificationRequestParser.js";

const jsonData = '{"startTime":1699715640000,"endTime":1699719240000,"venueName":"HotFut GachiBowli","reservedPlayersCount":10,"charges":200,"venueLocationLink":"https://goo.gl/maps/1QzakRkJPHxT8GjRA","localTimeZone":"GMT+5:30","playerNameList":["Player1","Player2","sam","nooo"]}';
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
  };

assertEqual(createMessage(JSON.parse(jsonData)), expected, 'createMessage test');