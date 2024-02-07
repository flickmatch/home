const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Function to convert timestamps to timeslot
function convertToTimeSlot(timestamp1, timestamp2) {
    // Convert timestamps to Date objects
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
  
    // Extract hours and minutes from the Date objects
    const hours1 = date1.getHours();
    const minutes1 = date1.getMinutes();
    const date = date1.getDate();
    const month = date1.getMonth();
    const year = date1.getFullYear();
    const fullDate = `${date}-${month}-${year}`
    const day = date1.getDay();
  
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
  
    // Format the timeslots
    const timeSlot1 = `${padZero(hours1)}:${padZero(minutes1)}`;
    const timeSlot2 = `${padZero(hours2)}:${padZero(minutes2)}`;
  
    return `${timeSlot1} - ${timeSlot2} ${fullDate} (${daysOfWeek[day]})`;
  }
  
  // Function to pad zero for single-digit hours/minutes
  function padZero(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

export const createMessage = (jsonData) => {
    //const jsonDataObject = JSON.parse(jsonData);
    const venueName = jsonData.venueName;
    const mapLink = jsonData.venueLocationLink;
    const format = jsonData.reservedPlayersCount/2;
    const charges = jsonData.charges;
    const dateTime = convertToTimeSlot(jsonData.startTime, jsonData.endTime);

    var message = `${venueName} (${mapLink})
${dateTime}
${format}v${format}
₹${charges}/- Per Person.

Confirmed Players:`;
  for (const [index, value] of jsonData.playerNameList.entries()) {
    message = message + '\n' + `${index+1}. ${value}`;
  }
  message = message + '\n\nPlease pay at play.flickmatch.in to confirm your spot.';
    return message;
} 