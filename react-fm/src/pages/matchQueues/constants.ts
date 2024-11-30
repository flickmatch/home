const avatars = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s',
  'https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096',
  'https://media.guim.co.uk/62b8158b7a882a7359c9c9a2640ba5dd0aee89b1/1912_169_1895_1894/500.jpg',
  'https://w0.peakpx.com/wallpaper/765/864/HD-wallpaper-soccer-kevin-de-bruyne.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Johan_Cruyff_1974c.jpg',
  'https://media.guim.co.uk/6785f708d698056c2cfb7f250f8a656e1fa80885/1262_380_1752_1752/500.jpg',
  'https://media.guim.co.uk/bc6cf8840be278113c3367b62a8d847046790c67/676_109_896_896/500.jpg',
  'https://w0.peakpx.com/wallpaper/62/853/HD-wallpaper-soccer-marco-reus-borussia-dortmund-thumbnail.jpg',
  'https://media.guim.co.uk/a26dfd2aba4a33e33dad8b1dea19bb21259ffa72/78_233_2099_2099/500.jpg',
  'https://media.guim.co.uk/9f7e9a95c6ee1e2b5a01d85b1d59383ee1433acb/816_140_2052_2051/500.jpg',
  'https://w0.peakpx.com/wallpaper/719/1011/HD-wallpaper-soccer-iker-casillas-spanish-soccer-thumbnail.jpg',
  'https://w0.peakpx.com/wallpaper/201/986/HD-wallpaper-arsenal-mesut-ozil-football-stars-match-footballers-the-gunners-thumbnail.jpg',
  'https://c7.alamy.com/zooms/9/ae59cae087d1400a8f94a2f94f0037c0/rmr3ny.jpg',
  'https://media.gettyimages.com/id/1246454084/photo/jesse-lingard-of-nottingham-forest-applauds-his-teams-supporters-during-the-premier-league.jpg?s=612x612&w=0&k=20&c=xKQOGQddp2X350KLf_5wg5jDilPy3mjwzmzSmIqSK54=',
  'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/let_kevin_de_bruyne_talk___the_turning_point-1ab24a5f934c2722495780a848aee4dc.jpg',
  'https://w0.peakpx.com/wallpaper/205/999/HD-wallpaper-sadio-mane-sport-mane-liverpool-football-senegalese-sadio-mane-red-soccer-lfc-ynwa-thumbnail.jpg',
  'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQy7RBp3EsfDBhDYuaInI5xlPRQQvEoG-M7JMF_a05sG4jVHxox8s7vR95nBEbAAvJCNw0Ct3vYtZcMOFE',
  'https://media.guim.co.uk/9c9753b599472d229c66286f3f9d33f3a2062a58/1717_23_926_926/500.jpg',
  'https://media.guim.co.uk/def091a2aad5c208079d1e8f5ebd263eedc3324a/538_60_1388_1389/500.jpg',
  'https://media.guim.co.uk/11730d65bb3c8d6a0816345f61ae3ae955479a0f/961_239_964_964/500.jpg',
  'https://media.guim.co.uk/61244efe4758e56c4f888bf06963201c6e38f0e7/1026_505_1165_1166/500.jpg',
  'https://media.guim.co.uk/afbad7e16ac659852dda1d47290375534a222baa/946_0_1409_1409/500.jpg',
  'https://media.guim.co.uk/b523142b10e3d5dc883925c46f9ea43326dbeae3/1312_24_2239_2239/500.jpg',
  'https://media.guim.co.uk/fe9ccc5857f45f88b4f33fc0213a8ecf8adb4b08/1198_40_1266_1266/500.jpg',
  'https://media.guim.co.uk/1e09b8313d5a16bbf8921acacb21e59f145b9443/393_107_1618_1618/500.jpg',
];

const query = JSON.stringify({
  query: `query {
      cities {
        cityId
        cityName
        events {
          testGame
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
          credits
          testGame
          team_division
          team1Color
          team2Color
        }
      }
    }`,
});

const apiUrl = `${import.meta.env.VITE_API_URL}`;

const gurugramGroupLink = 'https://chat.whatsapp.com/Hw9P3QVc7HcFE7aT9Khu04';
const hyderabadGroupLink = 'https://chat.whatsapp.com/C45og1xI1lk9HDCIzljQdL';
const flickMatchLink = 'https://wa.me/message/YM7GOPO75EHPG1';

export { avatars, query, apiUrl, gurugramGroupLink, hyderabadGroupLink, flickMatchLink };

//fields to be add in the query inside events object
// team_division,
// team1_color,
// team2_color,
// team1_name=team1_color
// team2_name=team2_color
