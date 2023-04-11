import { InputKey, Operation } from "./constants.js";

const pattern1 = /^[0-9][0-9]$/;
const pattern2 = /^[0-9]$/;

const removeEmpty = (splittedContent) => {
    const cleanContent = [];
    splittedContent.map(word => {
        if (word !== '') {
            cleanContent.push(word);
        }
    });
    return cleanContent;
}

const validateEventId = (splittedContent, contentMap, operationValue) => {
    const eventId = splittedContent[1].split('-');
    if (eventId.length !== 3) {
        contentMap.set(InputKey.OPERATION, Operation.IGNORE);
        return;
    }
    if (pattern1.test(eventId[0]) &&
        pattern1.test(eventId[1]) &&
        pattern2.test(eventId[2])) {
        contentMap.set(InputKey.OPERATION, operationValue);
        contentMap.set(InputKey.EVENT_ID, splittedContent[1]);
    }
    else {
        contentMap.set(InputKey.OPERATION, Operation.INVALID);
    }
}

export const parseContent = (content) => {
    const contentMap = new Map();
    content = content.trim();
    var case1 = content.replaceAll(' ', '').toLowerCase();
    if (case1 === 'showgames' || case1 === 'showgame' || case1 === 'showgamess') {
        contentMap.set(InputKey.OPERATION, Operation.SHOW_GAMES);
        return contentMap;
    }
    const splittedContent = removeEmpty(content.split(' '));
    if (splittedContent.length < 2 || splittedContent.length > 3) {
        contentMap.set(InputKey.OPERATION, Operation.IGNORE);
        return contentMap;
    }

    const firstWord = splittedContent[0].toLowerCase();

    if (firstWord === 'player' || firstWord === 'players' || firstWord === 'playerss') {
        validateEventId(splittedContent, contentMap, Operation.LIST_PLAYERS);
        return contentMap;
    }

    if (firstWord === 'join') {
        validateEventId(splittedContent, contentMap, Operation.JOIN_GAME);
        if (contentMap.get(InputKey.OPERATION) === Operation.JOIN_GAME) {
            contentMap.set(InputKey.NAME, splittedContent[2]);
            return contentMap;
        }
    }
    contentMap.set(InputKey.OPERATION, Operation.IGNORE);
    return contentMap;
};


