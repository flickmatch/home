export const avatars = 
[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s", 
    "https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OmtCTmW8kQi4I5LnRFkvVIhdKIs2RSnVTQ&usqp=CAU",
    "https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23", 
    "https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg",
    "https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg", 
    "https://cdn.futbin.com/content/fifa23/img/players/p50529093.png", 
    "https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg",
    "https://assets.telegraphindia.com/telegraph/2023/May/1685237622_chhetri.gif",
    "https://sportzcraazy.com/wp-content/uploads/2018/10/Bhaichung-Bhutia-Images-1024x648.jpeg",
    "https://pbs.twimg.com/profile_images/1156116511284531200/L7eHjbtY_400x400.jpg",
    "https://tmssl.akamaized.net/images/foto/galerie/jeje-lalpekhlua-india-1588160906-37351.jpg?lm=1588160914"
]

export const query = JSON.stringify({
    query: `query {
      cities {
        cityId
        cityName
        events {
          displayId
          date
          time
          venueName
          reservedPlayersCount
          waitListPlayersCount
          venueLocationLink
          charges
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