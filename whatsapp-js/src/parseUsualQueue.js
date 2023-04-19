export function parseMessage(message) {
    const regex = /(?<=at\s)(.*)(?=\s\()/; // Regex to extract the location
    const location = regex.exec(message)[0];
  
    const timeRegex = /(\d{1,2}:\d{2}\s[AP]M)\s-\s(\d{1,2}:\d{2}\s[AP]M)/; // Regex to extract the start and end time
    const startTime = timeRegex.exec(message)[1];
    const endTime = timeRegex.exec(message)[2];
  
    const dateRegex = /(\d{2}-\d{2}-\d{4})/g; // Regex to extract the date
    const date = dateRegex.exec(message)[0];
  
    const formatRegex = /\d{1,2}v\d{1,2}/g; // Regex to extract the format
    const format = formatRegex.exec(message)[0];
  
    const costRegex = /(?<=₹)(\d+)/g; // Regex to extract the cost
    const cost = parseInt(costRegex.exec(message)[0]);
  
    const playersRegex = /(?<=Add your name to the list:\n)([\d\D]*)(?=\n\nWaitlist)/; // Regex to extract the list of players
    const playersStr = playersRegex.exec(message)[0];
    const players = playersStr.split('\n').slice(0, -1);
  
    const waitlistRegex = /(?<=Waitlist\n)([\d\D]*)/; // Regex to extract the waitlist
    const waitlistStr = waitlistRegex.exec(message)[0];
    const waitlist = waitlistStr.split('\n').slice(0, -1);
  
    return {
      location,
      startTime,
      endTime,
      date,
      format,
      cost,
      listOfPlayers: players,
      waitlist,
    };
  }
  