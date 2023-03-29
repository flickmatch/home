# /*
#  *  Copyright 2023 Flickmatch.
#  *
#  */

'''Game Information

@author ssflick on 03/28/2023.
'''

class Game:
    
    def __init__(
            self,
            date,
            location,
            player_list
        ):
        self.date = date
        self.location = location
        self.player_list = player_list
