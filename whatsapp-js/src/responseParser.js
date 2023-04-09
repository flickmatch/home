const NO_GAMES = 'There are no upcoming games';
export const parseGetEvents = (res) => {
    let replyMsg = '';

    const upcomingEvents = res?.data?.city?.events;
    if(!upcomingEvents || upcomingEvents.length === 0){
        return NO_GAMES;
    }
    upcomingEvents.forEach(event => {

      replyMsg = replyMsg.concat(event.displayTitle, '\n');
      replyMsg = replyMsg.concat(event.venueLocationLink, '\n');
      replyMsg = replyMsg.concat(event.charges, '/- Per Person', '\n');  
      replyMsg = replyMsg.concat('ID: ', event.displayId, '\n');  
      replyMsg = replyMsg.concat('\n');
    });
    return replyMsg;
}

export const parseGetPlayers = (res, eventId) => {
    let replyMsg = '';
    const events = res?.data?.city?.events;
    if(!events || events.length === 0){
        return NO_GAMES;
    }
    const selectedEvent = events.find(event => event.displayId === eventId);
    if (!selectedEvent) {
        return `${eventId} is invalid`;
    }
    const reservedPlayers = selectedEvent.reservedPlayersList;
    const waitListPlayers = selectedEvent.waitListPlayers;
    if(!reservedPlayers || reservedPlayers.length === 0) {
        replyMsg = replyMsg.concat('No player joined yet.', '\n');
        replyMsg = replyMsg.concat("Available slots: <>", '\n');
        replyMsg = replyMsg.concat("Available waitlist slots: <>", '\n');
        return replyMsg;
    }

    replyMsg = replyMsg.concat('Reserved players :', '\n');
    let playerNumber = 0;
    reservedPlayers.forEach(player => {
        playerNumber++;
        replyMsg = replyMsg.concat(playerNumber.toString(), '. ', player.displayName, '\n');
    });
    replyMsg = replyMsg.concat("Available slots- <>", '\n');
    playerNumber = 0;
    if(waitListPlayers && waitListPlayers.length > 0) {
        replyMsg = replyMsg.concat('Waitlist :', '\n');
        waitListPlayers.forEach(player => {
            playerNumber++;
            replyMsg = replyMsg.concat(playerNumber.toString() + player.displayName, '\n');
        });
    }
    replyMsg = replyMsg.concat("Available waitlist slots- <>", '\n');
    return replyMsg;
}

