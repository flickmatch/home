import fetch from "isomorphic-fetch";
import { parseGetEvents, parseGetPlayers } from "./responseParser.js";

var ENDPOINT = process.env.isProd
  ? "http://ec2-3-110-121-129.ap-south-1.compute.amazonaws.com:8080/platform-0.0.1-SNAPSHOT/graphql"
  : "http://localhost:8080/graphql";

const callGraqhQLService = (body) => {
  console.log("Endpoint: " + ENDPOINT);
  return fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
};

const ERR_REPLY = "Something went wrong.";

export const getEvents = () => {
  const body = JSON.stringify({
    query: `
      query {
      city(cityId: "1") {
        cityId
        cityName
        events {
          displayId
          displayTitle
          venueLocationLink
          charges
        }
      }
    }`,
  });
  const replyMsg = callGraqhQLService(body)
    .then((res) => res.json())
    .then((res) => {
      return parseGetEvents(res);
    })
    .catch((err) => {
      console.log(err);
      return ERR_REPLY;
    });
  return replyMsg;
};

export const joinEvent = (eventId, waNumber, name) => {
  const body = JSON.stringify({
    query: `
    mutation {
      joinEvent(input: {
          eventId : "${eventId}"
          cityId: "1"
          player: {
              waNumber: "${waNumber}"
              name: "${name}"
          }
      }) {
          isSuccessful
      }
  }`,
  });

  const replyMsg = callGraqhQLService(body)
    .then((res) => res.json())
    .then(async (res) => {
      //console.log(JSON.stringify(res));
      if (res?.data?.joinEvent.isSuccessful) {
        let msg = "Successfully added.";
        msg = msg.concat("\n", "Updated List:");
        const getPlayersResonse = await getPlayers(eventId);
        msg = msg.concat("\n", getPlayersResonse);
        return msg;
      }
      return "Can't add player.";
    })
    .catch((err) => {
      console.log(err);
      return ERR_REPLY;
    });
  return replyMsg;
};

export const getPlayers = (eventId) => {
  const body = JSON.stringify({
    query: `
      query {
      city(cityId: "1") {
        events {
          displayId
          reservedPlayersList {
            displayName
          }
          waitListPlayers {
            displayName
          }
        }
      }
    }`,
  });
  const replyMsg = callGraqhQLService(body)
    .then((res) => res.json())
    .then((res) => {
      return parseGetPlayers(res, eventId);
    })
    .catch((err) => {
      console.log(err);
      return ERR_REPLY;
    });
  return replyMsg;
};

export const updatePlayerList = (inputData) => {
  const body = JSON.stringify({
    variables: {
      reservedPlayersList: inputData.listOfPlayers,
      waitListPlayers: inputData.waitlist,
    },
    query: `
    mutation updatePlayers($reservedPlayersList: [PlayerInput!]!, 
      $waitListPlayers: [PlayerInput!]!) {
      updatePlayerList (input: {
        date : "${inputData.date}"
        startTime: "${inputData.startTime}"
        endTime: "${inputData.endTime}"
        charges: "${inputData.cost}"
        venueName: "${inputData.location}"
        format: "${inputData.format}"
        reservedPlayersList : $reservedPlayersList
        waitListPlayers : $waitListPlayers
      }) {
          isSuccessful
      }
    }`,
  });
  const replyMsg = callGraqhQLService(body)
    .then((res) => res.json())
    .then((res) => {
      if (res?.data?.updatePlayerList.isSuccessful) {
        return "Updated!";
      }
      return "Update Failed!";
    });
  return replyMsg;
};
