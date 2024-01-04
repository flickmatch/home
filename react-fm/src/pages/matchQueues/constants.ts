const avatars = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s',
  'https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU',
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Johan_Cruyff_1974c.jpg',
  'https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23',
  'https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg',
  'https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg',
  'https://cdn.futbin.com/content/fifa23/img/players/p50529093.png',
  'https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg',
  'https://assets.telegraphindia.com/telegraph/2023/May/1685237622_chhetri.gif',
  'https://sportzcraazy.com/wp-content/uploads/2018/10/Bhaichung-Bhutia-Images-1024x648.jpeg',
  'https://pbs.twimg.com/profile_images/1156116511284531200/L7eHjbtY_400x400.jpg',
  'https://tmssl.akamaized.net/images/foto/galerie/jeje-lalpekhlua-india-1588160906-37351.jpg?lm=1588160914',
  'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/let_kevin_de_bruyne_talk___the_turning_point-1ab24a5f934c2722495780a848aee4dc.jpg',
  'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/13012022/1642084625040.jpg?operations=fit(707:)&w=707&quality=100',
  'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQy7RBp3EsfDBhDYuaInI5xlPRQQvEoG-M7JMF_a05sG4jVHxox8s7vR95nBEbAAvJCNw0Ct3vYtZcMOFE',
  'https://digitalhub.fifa.com/transform/f74273d0-5e2e-457d-90dd-23d69324c6fd/Brazilian-legend-Pele',
];

const query = JSON.stringify({
  query: `query {
      cities {
        cityId
        cityName
        events {
          uniqueEventId
          eventId
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
          stripePaymentUrl
        }
      }
    }`,
});

const apiUrl = 'https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql';

export { avatars, query, apiUrl };

//fields to be add in the query inside events object
// team_division,
// team1_color,
// team2_color,
// team1_name=team1_color
// team2_name=team2_color
