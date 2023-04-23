export function parseMessage(message) {
  const regex = /(?<=at\s)(.*)(?=\s\()/; // Regex to extract the location
  const locationSearchResult = regex.exec(message);
  var location = null;
  if (locationSearchResult) {
    location = locationSearchResult[0];
  }

  const timeRegex = /(\d{1,2}:\d{2}\s[AP]M)\s-\s(\d{1,2}:\d{2}\s[AP]M)/; // Regex to extract the start and end time
  const timeSearchResult = timeRegex.exec(message);
  var startTime = null;
  var endTime = null;
  if (timeSearchResult && timeSearchResult.length > 1) {
    startTime = timeSearchResult[1];
    endTime = timeSearchResult[2];
  }

  const dateRegex = /(\d{2}-\d{2}-\d{4})/g; // Regex to extract the date
  const dateRegexSearchResult = dateRegex.exec(message);
  var date = null;
  if (dateRegexSearchResult) {
    date = dateRegexSearchResult[0];
  }

  const formatRegex = /\d{1,2}v\d{1,2}/g; // Regex to extract the format
  const formatRegexSearchResult = formatRegex.exec(message);
  var format = null;
  if (formatRegexSearchResult) {
    format = formatRegexSearchResult[0];
  }

  const costRegex = /(?<=₹)(\d+)/g; // Regex to extract the cost
  const costRegexSearchResult = costRegex.exec(message);
  var cost = null;
  if (costRegexSearchResult) {
    cost = costRegexSearchResult[0];
  }

  const removeIndex = (line) => {
    var nameStartIdx = line.search("[.]");
    if (nameStartIdx == -1 || nameStartIdx >= line.length) {
      console.log("ERROR processing: " + line);
      return "";
    }
    return line.substring(nameStartIdx + 1).trim();
  };

  const playersRegex =
    /(?<=Add your name to the list:\n)([\d\D]*)(?=\n\nWaitlist)/; // Regex to extract the list of players
  const playersRegexSearchResult = playersRegex.exec(message);
  var playersStr = null;
  var playersWithIndex = null;
  var players = null;
  if (playersRegexSearchResult) {
    playersStr = playersRegexSearchResult[0];
    playersWithIndex = playersStr.split("\n");
    players = playersWithIndex.map((line) => {return {name : removeIndex(line)}});
  }

  const waitlistRegex = /(?<=Waitlist\n)([\d\D]*)(?=\nPlease)/; // Regex to extract the waitlist
  const waitlistRegexSearchResult = waitlistRegex.exec(message);
  var waitlistStr = null;
  var waitlistWithIndex = null;
  var waitlist = null;
  if (waitlistRegexSearchResult) {
    waitlistStr = waitlistRegexSearchResult[0];
    waitlistWithIndex = waitlistStr.split("\n").slice(0, -1);
    waitlist = waitlistWithIndex.map((line) => {return {name : removeIndex(line)}});
  }

  const isSuccessful = !(
    !location ||
    !endTime ||
    !date ||
    !format ||
    !cost ||
    !players ||
    !waitlist
  );
  return {
    isSuccessful,
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
