import { InputKey, Operation } from "./constants.js";
import { parseMessage } from "./parseUsualQueue.js";
import { getEvents, getPlayers, joinEvent, updatePlayerList } from "./proxy.js";

const pattern1 = /^[0-9][0-9]$/;
const pattern2 = /^[0-9]$/;

const removeEmpty = (splittedContent) => {
  const cleanContent = [];
  splittedContent.map((word) => {
    if (word !== "") {
      cleanContent.push(word);
    }
  });
  return cleanContent;
};

const validateEventId = (splittedContent, contentMap, operationValue) => {
  const eventId = splittedContent[1].split("-");
  if (eventId.length !== 3) {
    contentMap.set(InputKey.OPERATION, Operation.IGNORE);
    return;
  }
  if (
    pattern1.test(eventId[0]) &&
    pattern1.test(eventId[1]) &&
    pattern2.test(eventId[2])
  ) {
    contentMap.set(InputKey.OPERATION, operationValue);
    contentMap.set(InputKey.EVENT_ID, splittedContent[1]);
  } else {
    contentMap.set(InputKey.OPERATION, Operation.INVALID);
  }
};

export const processGroup = (msg) => {
  const contact = msg.getContact();
  const chat =  msg.getChat();
  let content = msg.body;
  try {
    const inputData = parseMessage(content);
    if(inputData?.isSuccessful) {
      Promise.resolve(updatePlayerList(inputData)).then(
        (message) => {
          {
            msg.reply(message);
          }
        }
      );
    }
  } catch (error) {
    console.error("Error while updating player List");
    console.error(error);
  }


  try {
    let contentMap = null;
    try {
      contentMap = parseContent(content);
    } catch (error) {
      console.error("Error while parsing content");
      console.error(error);
    }

    if (contentMap) {
      if (contentMap.get(InputKey.OPERATION) === Operation.SHOW_GAMES) {
        Promise.resolve(getEvents()).then((message) => {
          msg.reply(message);
        });
      } else if (
        contentMap.get(InputKey.OPERATION) === Operation.LIST_PLAYERS
      ) {
        Promise.resolve(getPlayers(contentMap.get(InputKey.EVENT_ID))).then(
          (message) => {
            {
              msg.reply(message);
            }
          }
        );
      } else if (contentMap.get(InputKey.OPERATION) === Operation.JOIN_GAME) {
        Promise.resolve(
          joinEvent(
            contentMap.get(InputKey.EVENT_ID),
            contact.number,
            contentMap.get(InputKey.NAME)
          )
        ).then((message) => {
          msg.reply(message);
        });
      } else if (contentMap.get(InputKey.OPERATION) === Operation.INVALID) {
        msg.reply("Invalid event");
      }
    }
  } catch (error) {
    console.error("Error while operation");
    console.error(error);
  }
}

export const parseContent = (content) => {
  const contentMap = new Map();
  content = content.trim();
  var case1 = content.replaceAll(" ", "").toLowerCase();
  if (case1 === "showgames" || case1 === "showgame" || case1 === "showgamess") {
    contentMap.set(InputKey.OPERATION, Operation.SHOW_GAMES);
    return contentMap;
  }
  const splittedContent = removeEmpty(content.split(" "));
  if (splittedContent.length < 2 || splittedContent.length > 3) {
    contentMap.set(InputKey.OPERATION, Operation.IGNORE);
    return contentMap;
  }

  const firstWord = splittedContent[0].toLowerCase();

  if (
    firstWord === "player" ||
    firstWord === "players" ||
    firstWord === "playerss"
  ) {
    validateEventId(splittedContent, contentMap, Operation.LIST_PLAYERS);
    return contentMap;
  }

  if (firstWord === "join") {
    validateEventId(splittedContent, contentMap, Operation.JOIN_GAME);
    if (contentMap.get(InputKey.OPERATION) === Operation.JOIN_GAME) {
      contentMap.set(InputKey.NAME, splittedContent[2]);
      return contentMap;
    }
  }
  contentMap.set(InputKey.OPERATION, Operation.IGNORE);
  return contentMap;
};
