import Typography from '@mui/material/Typography';
import Meta from '@/components/Meta';
import Box from '@mui/material/Box';
import { FlexBox } from '@/components/styled';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CurrencyRupeeSharp } from '@mui/icons-material';

import delhiIcon from '/gate-of-india.png';
import charminar from '/hyderabad-charminar.png'
import './style.scss'
import useOrientation from '@/hooks/useOrientation';

function MatchQueue() {
    const isPortrait = useOrientation();
    console.log(isPortrait)

  return (
    <>
      <Meta title="Match Queues" />

      <div className='container'>
        <Typography className="cityname">Gurugram <img src={delhiIcon} alt="" /></Typography>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FlexBox className='flexbox'>
              <FlexBox className='area'>
                <Typography className="areaName"><SportsSoccerIcon className='sportsIcon' />Gallant Play Arena South City</Typography>
                {isPortrait ? null : <Button variant="contained" onClick={() => alert('Joined')}>Join Queue</Button>}
              </FlexBox>

              {/*Event Details*/ }
              <FlexBox className='eventDetails' sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='queDetails1'>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className="title">
                      Price <span><CurrencyRupeeSharp className='currencyIcon'/>200</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className="title">
                      Date <span>16/07/2023 8PM-9PM</span>
                    </Typography>
                  </Grid>
                </Grid>
              </FlexBox>
              <FlexBox className='eventDetails' sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='queDetails2'>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography className="title">
                        Google Map <LocationOnIcon className='locationIcon'/>
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography className="title">
                          Number of Players <span>14</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography className="title">
                          Players Required <span>2</span>
                      </Typography>
                    </Grid>
                    {isPortrait ? 
                      <Grid item xs={4} sm={4} md={4}>
                        <FlexBox className='area'>
                          <Button variant="contained" onClick={() => alert('Joined')}>Join Queue</Button>
                        </FlexBox>
                      </Grid>      
                    : null}            
                </Grid>
              </FlexBox>
            </FlexBox>
          </AccordionSummary>

          {/*Players Details*/ }
          <AccordionDetails>
            <Box className='box' sx={{ flexGrow: 1 }}>
                <Typography className="reserved">
                    Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s" />
                    <Typography className="playerNames">
                      Abhishek
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096" />
                    <Typography className="playerNames">
                      Uday
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s" />
                    <Typography className="playerNames">
                      Nishant
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU" />
                    <Typography className="playerNames">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OmtCTmW8kQi4I5LnRFkvVIhdKIs2RSnVTQ&usqp=CAU" />
                    <Typography className="playerNames">
                      Abhinav
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23" />
                    <Typography className="playerNames">
                      Vaibhav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg" />
                    <Typography className="playerNames">
                      Harsh
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <AccountCircleIcon className='accountIcon'/>
                    <Typography className="playerNames">
                      (Empty)
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <AccountCircleIcon className='accountIcon'/>
                    <Typography className="playerNames">
                      (Empty)
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className='box' sx={{ flexGrow: 1 }}>
                <Typography className="unreserved">
                    Un Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg" />
                    <Typography className="playerNames">
                      Sahil
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa23/img/players/p50529093.png" />
                    <Typography className="playerNames">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg" />
                    <Typography className="playerNames">
                      Gourav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* For Hyderabad */}
      <div className='container'>
        <Typography className="cityname">Hyderabad <img src={charminar} alt="" /></Typography>
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FlexBox className='flexbox'>
              <FlexBox className='area'>
                <Typography className='areaName'><SportsSoccerIcon className='sportsIcon' />Bsporty, Hyderabad</Typography>
                {isPortrait ? null : <Button variant="contained" onClick={() => alert('Joined')}>Join Queue</Button>}
              </FlexBox>

              <FlexBox className='eventDetails' sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='queDetails1'>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className='title'>
                      Price <span><CurrencyRupeeSharp className='currencyIcon'/>350</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className='title'>
                      Date <span>16/07/2023 8PM-9PM</span>
                    </Typography>
                  </Grid>
                </Grid>
              </FlexBox>

              <FlexBox className='eventDetails' sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='queDetails2'>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className='title'>
                      Google Map <LocationOnIcon className='locationIcon'/>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className='title'>
                        Number of Players <span>14</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography className='title'>
                        Players Required <span>2</span>
                    </Typography>
                  </Grid>
                  {isPortrait ? 
                      <Grid item xs={4} sm={4} md={4}>
                        <FlexBox className='area'>
                          <Button variant="contained" onClick={() => alert('Joined')}>Join Queue</Button>
                        </FlexBox>
                      </Grid>      
                    : null}
                </Grid>
             </FlexBox>
            </FlexBox>
          </AccordionSummary>

          <AccordionDetails>
            <Box className='box' sx={{ flexGrow: 1 }}>
                <Typography className='reserved'>
                    Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s" />
                    <Typography className="playerNames">
                      Abhishek
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096" />
                    <Typography className="playerNames">
                      Uday
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s" />
                    <Typography className="playerNames">
                      Nishant
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box className='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU" />
                    <Typography className="playerNames">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OmtCTmW8kQi4I5LnRFkvVIhdKIs2RSnVTQ&usqp=CAU" />
                    <Typography className="playerNames">
                      Abhinav
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23" />
                    <Typography className="playerNames">
                      Vaibhav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box className='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg" />
                    <Typography className="playerNames">
                      Harsh
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <AccountCircleIcon className='accountIcon'/>
                    <Typography className="playerNames">
                      (Empty)
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <AccountCircleIcon className='accountIcon'/>
                    <Typography className="playerNames">
                      (Empty)
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            
            <Box className='box' sx={{ flexGrow: 1 }}>
                <Typography className='unreserved'>
                    Un Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg" />
                    <Typography className="playerNames">
                      Sahil
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa23/img/players/p50529093.png" />
                    <Typography className="playerNames">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} className='grid'>
                    <Avatar className="avatar" alt="profile" src="https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg" />
                    <Typography className="playerNames">
                      Gourav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>

    </>
  );
}

export default MatchQueue;
