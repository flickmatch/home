const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currencyMap = {
  INR: "₹",
  USD: "$",
};

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
  const hours12 = (hours) => hours % 12 || 12; // Convert to 12-hour format
  const amPm = (hours) => (hours < 12 ? "AM" : "PM"); // AM or PM
  const hours1 = hours12(date1.getHours());
  const hours2 = hours12(date2.getHours());
  const minutes1 = date1.getMinutes();
  const minutes2 = date2.getMinutes();
  const date = date1.getDate();
  const month = date1.getMonth() + 1; // Months are zero-indexed
  const year = date1.getFullYear();
  const fullDate = `${padZero(date)}/${padZero(month)}/${year}`;
  const day = date1.getDay();

  // Format the timeslots in 12-hour format
  const timeSlot1 = `${padZero(hours1)}:${padZero(minutes1)} ${amPm(
    date1.getHours()
  )}`;
  const timeSlot2 = `${padZero(hours2)}:${padZero(minutes2)} ${amPm(
    date2.getHours()
  )}`;

  return `🕐 ${timeSlot1} - ${timeSlot2} \n📅 ${fullDate} (${daysOfWeek[day]})`;
};

function parseTimeZoneOffset(timeZone) {
  const parts = timeZone.split(/[+-]/); // Splitting by '+' or '-'
  const sign = timeZone.includes("-") ? -1 : 1; // Check if the offset is positive or negative
  const [hours, minutes] = parts[1].split(":").map(Number); // Splitting hours and minutes
  let offset = hours * 60 + minutes; // Calculate the offset in minutes
  return sign * offset; // Return the offset considering the sign
}

export const createMessage = (jsonData, url) => {
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

  const currency = currencyMap[jsonData.currency];

  var message = `Flickmatch football game at ${venueName}
📍 (${mapLink})
${dateTime}
${format} vs ${format}
${currency}${charges}/- Per Person.

Confirmed Players:`;
  for (const [index, value] of jsonData.playerNameList.entries()) {
    message = message + "\n" + `${index + 1}. ${value}`;
  }
  message =
    message +
    "\n\nPlease pay at (" +
    `${url}#${jsonData.uniqueEventId}` +
    ") to confirm your spot.";
  return message;
};
