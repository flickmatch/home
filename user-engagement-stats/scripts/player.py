# /*
#  *  Copyright 2023 Flickmatch.
#  *
#  */

'''Person Information

@author ssflick on 03/28/2023.
'''

class Player:
    
    def __init__(
            self,
            name,
            mobile=None
        ):
        self.name = name
        self.mobile = mobile
        self.num_games_played = 0
        self.game_info = {} # `date vs Game`` if any

    def add_game(
        self, 
        date, 
        game
    ):
        self.num_games_played = self.num_games_played + 1
        self.game_info[date] = game
