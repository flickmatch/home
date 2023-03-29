# /*
#  *  Copyright 2023 Flickmatch.
#  *
#  */

'''Script calculates user engagement statistics from data.

@author ssflick on 03/28/2023.
'''

import sys
sys.path.append("")

from collections import defaultdict
from game import Game
from player import Player
from utils import CONSTANT_PLAYERS_END_INDEX, CONSTANT_PLAYERS_START_INDEX, CONSTANT_GAME_OFF_ENUM, CONSTANT_GAME_START_STRING, CONSTANT_GAME_END_STRING, CONSTANT_GAME_OFF_STRING_LIST, get_date, get_games_per_player


def analyse_message(
    message, 
    all_players_unique=False,
    players_map=None, 
    games_map=None
):
    r'''Analyse the last message of the game to get details about the players and the game.

    Keyword Arguments:
        message: Last message - <input> to analyse.
        players_map: Map of <UniquePlayerIdentifier> vs <Player> where UniquePlayerIdentifier can be mobile/name.
        games_map: Map if <date> vs <Game>

    Returns:
        players_map: Updated players_map
        games_map: Updated games_map
    '''

    # get who all played and update their stats. 
    players = [player_.split(".")[1] for player_ in message[CONSTANT_PLAYERS_START_INDEX:CONSTANT_PLAYERS_END_INDEX+1]]

    # construct `Game`.
    date = message[1]
    game = Game(
        date=date,
        location='',
        player_list = players
    )
    games_map[date] = game

    # if all players are unique, we create a simple list of all players and all games.
    if all_players_unique:
        for player_name in players:
            new_player = Player(player_name)
            players_map[player_name] = new_player
            new_player.add_game(date, game)
        return players_map, games_map
    
    # update the stats of the game.
    for player_name in players:
        if player_name not in players_map:
            new_player = Player(player_name)
            players_map[player_name] = new_player
        players_map[player_name].add_game(date, game)
    return players_map, games_map


def game_held(message):

    r'''Check if the game was held. Conditions: >=12 players. 

    Keyword Arguments:
        message: Last message - <input> to analyse.

    Returns:
        True if game was held, else false.
    '''

    # check if the game was held -- at least 12 players were there. 
    i = CONSTANT_PLAYERS_START_INDEX
    while i <= CONSTANT_PLAYERS_END_INDEX:
        if len(message[i].split(".")) < 2:
            return False
        i = i + 1
    return True


def remove_games_with_less_players(
    messages
):
    r'''Filter the list of messages to find those messages when a game was held. 

    Keyword Argument:
        messages: List of messages from the bot/Abhishek. 

    Returns:
        game_messages: Last message from when a game was held.
    
    '''
    # extract date
    # get last message of every date
    # check if game has >= 12 people 
    # check if messages between this and next game message does not have `game is off` string.
    # return messages where we had games. 

    num_messages = len(messages)
    game_messages = []
    i = 0

    while i < num_messages:

        print(i)

        # extract date
        message = messages[i]
        date = message[1]

        # extract the last message of every date
        last_message = messages[i]
        while i < num_messages and last_message[1] == date:
            last_message = messages[i]
            i = i + 1

        # check if the game was held and mark it.
        if game_held(last_message):
            game_messages.append(last_message)

    return game_messages


def remove_games_with_logistical_errors(
    messages
):
    r'''Filter the list of messages when a game was not held. 
    
    Keyword Argument:
        messages: List of messages (list of (list of strings)) returned by read_chat()

    Returns:
        filtered_messages: List of filtered messages only when a game was held.
    '''
    
    keep_message_list = [True for i in range(len(messages))]

    for idx, message in enumerate(messages):

        # pick up a `game is off` message to signal that some previous messages are 
        # not part of a successful game.
        if len(message) == 1 and message[0] == CONSTANT_GAME_OFF_ENUM:

            # retrieve date and remove all messages of that date.
            date = get_date(messages[idx-1])
            remove_idx = idx-1
            while remove_idx >= 0 and (messages[remove_idx][1] == date):
                keep_message_list[remove_idx] = False
                remove_idx = remove_idx - 1

            keep_message_list[idx] = False

    filtered_messages = [i for (i, v) in zip(messages, keep_message_list) if v]
    return filtered_messages


def filter_games(
    messages
):
    r'''All business logic that is required to remove messages when a game was not held goes here.
    
    Keyword Argument:
        messages: List of List of Strings from read_chat along with CONSTANT_GAME_OFF_ENUM signal.
    
    Returns:
        games: filtered messages with the last message of when a game was held.
    '''
    # remove games that were not held because of any logistical issue such as
    # ground unavailable or rain.
    filtered_messages = remove_games_with_logistical_errors(messages)

    # remove games that did not have enough players.
    game_messages = remove_games_with_less_players(filtered_messages)

    return game_messages


def read_chat(
    chat_dump_path
):
    r'''Read exported chat and separate out game addition/subtraction messages by bot/people.
    
    Keyword Argument:
        chat_dump_path: Directory path to .txt chat file.

    Returns:
        lines: All lines of the chat file
        messages: List of messages (list of (list of strings))
    '''
    with open(chat_dump_path, 'r') as f:
        lines = f.readlines()
    
    num_lines = len(lines)
    messages = []
    i = 0
    while i < num_lines:
        line = lines[i]

        # append game-list related message.
        if CONSTANT_GAME_START_STRING in line:
            message = []
            while CONSTANT_GAME_END_STRING not in line: 
                line = lines[i].strip()
                message.append(line)
                i = i + 1
            messages.append(message)

        # if there is a line that contains any string pertaining to `game is off` 
        # save it as a successor to the message -- this is used to filter out 
        # those games that were not held in a later filter_function()
        game_off_signal = any([x in line for x in CONSTANT_GAME_OFF_STRING_LIST]) 
        if game_off_signal:
            print("appending at i - ", len(messages))
            messages.append([CONSTANT_GAME_OFF_ENUM])
        i = i + 1

    return messages


def main(
    args=None
):
    # TODO: Create an interface. 
    chat_dump_path = 'data/_chat.txt'

    # get all the messages pertaining to the floating list of the game.
    messages = read_chat(chat_dump_path)

    # get last messages from when a game was definitely held.
    game_messages = filter_games(messages)

    # TODO: get from arguments
    all_players_unique = False

    # construct players_map and games_map 
    # where players_map contains player_name vs Player object
    # and games_map contains date vs Game object
    players_map = dict()
    games_map = dict()

    if all_players_unique:
        players_map = defaultdict()

    for message in game_messages:
        players_map, games_map = analyse_message(
            message, 
            all_players_unique,
            players_map, 
            games_map
        )

    # number of games held
    num_games = len(games_map)
    print("Number of Games: ", num_games)

    # number of games played by each user -- only makes sense if all players are not unique
    # otherwise only 1 game will be played per user.
    if not all_players_unique:
        games_per_player = get_games_per_player(players_map)
        print("Games Per Player: ", games_per_player)

    num_unique_users = len(players_map)
    print("Number of Unique Users: ", num_unique_users)
    

if __name__ == '__main__':
    main()
    