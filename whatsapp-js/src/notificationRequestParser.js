const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Function to convert timestamps to timeslot
export const convertToTimeSlot = (timestamp1, timestamp2, timeZone) => {
  // Convert timestamps to Date objects
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);

  // Parse timezone offset
  const offset = parseTimeZoneOffset(timeZone);

  // Adjust time according to the provided timezone offset
  date1.setMinutes(date1.getMinutes() + offset); // Adjusting minutes
  date2.setMinutes(date2.getMinutes() + offset); // Adjusting minutes

  // Extract hours and minutes from the adjusted Date objects
  const padZero = (value) => (value < 10 ? `0${value}` : value);
  const hours1 = date1.getHours();
  const minutes1 = date1.getMinutes();
  const date = date1.getDate();
  const month = date1.getMonth() + 1; // Months are zero-indexed
  const year = date1.getFullYear();
  const fullDate = `${padZero(date)}-${padZero(month)}-${year}`;
  const day = date1.getDay();

  const hours2 = date2.getHours();
  const minutes2 = date2.getMinutes();

  // Format the timeslots
  const timeSlot1 = `${padZero(hours1)}:${padZero(minutes1)}`;
  const timeSlot2 = `${padZero(hours2)}:${padZero(minutes2)}`;

  return `${timeSlot1} - ${timeSlot2} ${fullDate} (${daysOfWeek[day]})`;
};

function parseTimeZoneOffset(timeZone) {
  const parts = timeZone.split(/[+-]/); // Splitting by '+' or '-'
  const sign = timeZone.includes("-") ? -1 : 1; // Check if the offset is positive or negative
  const [hours, minutes] = parts[1].split(":").map(Number); // Splitting hours and minutes
  let offset = hours * 60 + minutes; // Calculate the offset in minutes
  return sign * offset; // Return the offset considering the sign
}

export const createMessage = (jsonData) => {
  //const jsonDataObject = JSON.parse(jsonData);
  const venueName = jsonData.venueName;
  const mapLink = jsonData.venueLocationLink;
  const format = jsonData.reservedPlayersCount / 2;
  const charges = jsonData.charges;
  const dateTime = convertToTimeSlot(
    jsonData.startTime,
    jsonData.endTime,
    jsonData.localTimeZone
  );

  var message = `${venueName} (${mapLink})
${dateTime}
${format}v${format}
₹${charges}/- Per Person.

Confirmed Players:`;
  for (const [index, value] of jsonData.playerNameList.entries()) {
    message = message + "\n" + `${index + 1}. ${value}`;
  }
  message =
    message + "\n\nPlease pay at play.flickmatch.in to confirm your spot.";
  return message;
};
