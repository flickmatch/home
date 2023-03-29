# /*
#  *  Copyright 2023 Flickmatch.
#  *
#  */

'''Repeated Utilities.

@author ssflick on 03/28/2023.
'''

# Constants in Chat
CONSTANT_ABHISHEK_MOBILE = '+91 98186 78977'
CONSTANT_GAME_START_STRING = '*FlickMatch* pick-up game'
CONSTANT_GAME_END_STRING = 'Please pay'
CONSTANT_GAME_OFF_STRING_LIST = ['game is off', 'today is off', 'game off guys']
CONSTANT_GAME_OFF_ENUM = 'GAME_OFF'
CONSTANT_PLAYERS_START_INDEX = 6
CONSTANT_PLAYERS_END_INDEX = 17


def get_games_per_player(
    players_map
):
    num_games_map = dict()
    for player_name, player in players_map.items():
        num_games_played = player.num_games_played
        num_games_map[player_name] = num_games_played
    return num_games_map


def get_date(
    message
):
    if len(message) == 1 and message[0] == CONSTANT_GAME_OFF_ENUM:
        return False
    
    return message[1]
    

def export_chat():
    pass