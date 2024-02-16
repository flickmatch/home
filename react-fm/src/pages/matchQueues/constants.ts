const avatars = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s',
  'https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096',
  'https://w0.peakpx.com/wallpaper/933/489/HD-wallpaper-karim-benzema-france.jpg',
  'https://w0.peakpx.com/wallpaper/765/864/HD-wallpaper-soccer-kevin-de-bruyne.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Johan_Cruyff_1974c.jpg',
  'https://c4.wallpaperflare.com/wallpaper/935/913/163/soccer-kylian-mbappe-french-wallpaper-preview.jpg',
  'https://w0.peakpx.com/wallpaper/260/681/HD-wallpaper-neymar-2018-brazil-brasil-neymar-jr-thumbnail.jpg',
  'https://w0.peakpx.com/wallpaper/62/853/HD-wallpaper-soccer-marco-reus-borussia-dortmund-thumbnail.jpg',
  'https://w0.peakpx.com/wallpaper/695/214/HD-wallpaper-zlatan-ibrahimovic-deporte-futbol-inter-de-milan-italia-serie-a-thumbnail.jpg',
  'https://w0.peakpx.com/wallpaper/174/8/HD-wallpaper-xavi-barcelona-fc-catalonia-spain-portrait-spanish-footballer-xavier-hernandez-creus.jpg',
  'https://w0.peakpx.com/wallpaper/719/1011/HD-wallpaper-soccer-iker-casillas-spanish-soccer-thumbnail.jpg',
  'https://w0.peakpx.com/wallpaper/201/986/HD-wallpaper-arsenal-mesut-ozil-football-stars-match-footballers-the-gunners-thumbnail.jpg',
  'https://pbs.twimg.com/profile_images/1156116511284531200/L7eHjbtY_400x400.jpg',
  'https://tmssl.akamaized.net/images/foto/galerie/jeje-lalpekhlua-india-1588160906-37351.jpg?lm=1588160914',
  'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/let_kevin_de_bruyne_talk___the_turning_point-1ab24a5f934c2722495780a848aee4dc.jpg',
  'https://w0.peakpx.com/wallpaper/205/999/HD-wallpaper-sadio-mane-sport-mane-liverpool-football-senegalese-sadio-mane-red-soccer-lfc-ynwa-thumbnail.jpg',
  'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQy7RBp3EsfDBhDYuaInI5xlPRQQvEoG-M7JMF_a05sG4jVHxox8s7vR95nBEbAAvJCNw0Ct3vYtZcMOFE',
  'https://w0.peakpx.com/wallpaper/984/231/HD-wallpaper-robert-lewandowski-bayern-munich-fc-black-uniform-polish-footballer-portrait-bundesliga-germany-football-thumbnail.jpg',
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

const gurugramGroupLink = 'https://chat.whatsapp.com/Hw9P3QVc7HcFE7aT9Khu04';
const hyderabadGroupLink = 'https://chat.whatsapp.com/C45og1xI1lk9HDCIzljQdL';

export { avatars, query, apiUrl, gurugramGroupLink, hyderabadGroupLink };

//fields to be add in the query inside events object
// team_division,
// team1_color,
// team2_color,
// team1_name=team1_color
// team2_name=team2_color
