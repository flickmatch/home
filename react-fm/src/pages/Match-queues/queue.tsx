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
import delhiIcon from './assets/gate-of-india.png';
import charminar from './assets/hyderabad-charminar.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CurrencyRupeeSharp } from '@mui/icons-material';
import './style.css'

function MatchQueue() {
  return (
    <>
      <Meta title="Match Queues" />

      <div id='container'>
        <Typography id="cityname">Gurugram <img style={{height: 40}} src={delhiIcon} alt="" /></Typography>
        <Accordion style={{background: '#1a1919', fontFamily: 'serif'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FlexBox style={{ flexFlow: 'column', width: '100%'}}>
              <FlexBox id='localtybar'>
                <Typography id="localty"><SportsSoccerIcon style={{marginRight: 5, color: '#4CE95A'}} />Gallant Play Arena South City</Typography>
                <Button variant="contained" style={{background: '#4CE95A', color: 'black'}} onClick={() => alert('Joined')}>Join Queue</Button>
              </FlexBox>

              <FlexBox style={{marginTop: 20, color: '#fff'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: 20}}>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography id="title">
                      Price <span><CurrencyRupeeSharp style={{fontSize: 22, marginBottom: -4}}/>200</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography id="title">
                      Date <span>16/07/2023 8PM-9PM</span>
                    </Typography>
                  </Grid>
                </Grid>
              </FlexBox>

              <FlexBox style={{marginTop: 25, color: '#fff'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: 20, alignItems: 'center', marginBottom: 10}}>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography id="title">
                      Google Map <LocationOnIcon style={{marginLeft: 15, marginBottom: -3, color: '#fff'}}/>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography id="title">
                        Number of Players <span>14</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4}>
                    <Typography id="title">
                        Players Required <span>2</span>
                    </Typography>
                  </Grid>
                </Grid>
             </FlexBox>
            </FlexBox>
          </AccordionSummary>

          <AccordionDetails>
            <Box id='box' sx={{ flexGrow: 1 }}>
                <Typography id="reserved">
                      Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s" />
                    <Typography id="names">
                      Abhishek
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096" />
                    <Typography id="names">
                      Uday
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s" />
                    <Typography id="names">
                      Nishant
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box id='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU" />
                    <Typography id="names">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OmtCTmW8kQi4I5LnRFkvVIhdKIs2RSnVTQ&usqp=CAU" />
                    <Typography id="names">
                      Abhinav
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23" />
                    <Typography id="names">
                      Vaibhav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box id='box' sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg" />
                    <Typography id="names">
                      Harsh
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <AccountCircleIcon style={{marginRight: 15, fontSize: 42}}/>
                    <Typography id="names">
                      (Empty)
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <AccountCircleIcon style={{marginRight: 15, fontSize: 42}}/>
                    <Typography id="names">
                      (Empty)
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            
            <Box id='box' sx={{ flexGrow: 1 }}>
                <Typography id="unreserved">
                      Un Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg" />
                    <Typography id="names">
                      Sahil
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa23/img/players/p50529093.png" />
                    <Typography id="names">
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} id='grid'>
                    <Avatar id="avatar" alt="profile" src="https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg" />
                    <Typography id="names">
                      Gourav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* For Hyderabad */}
      <div id='container'>
        <Typography id="cityname">Hyderabad <img style={{height: 40}} src={charminar} alt="" /></Typography>
        <Accordion style={{background: '#1a1919', fontFamily: 'serif'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FlexBox style={{ flexFlow: 'column', width: '100%'}}>
              <FlexBox id='localtybar'>
                <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: 21, display: 'flex', alignItems: 'center'}}><SportsSoccerIcon style={{marginRight: 5, color: 'rgb(76, 233, 90)'}} />Bsporty, Hyderabad</Typography>
                <Button variant="contained" style={{background: '#4CE95A', color: 'black'}} onClick={() => alert('Joined')}>Join Queue</Button>
              </FlexBox>

              <FlexBox style={{marginTop: 20, color: '#fff'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: 20}}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography style={{color: '#4CE95A', fontSize: 18, fontWeight: 'bold'}}>
                      Price <span style={{color: '#fff', marginLeft: 15}}><CurrencyRupeeSharp style={{fontSize: 22, marginBottom: -4}}/>350</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography style={{color: '#4CE95A', fontSize: 18, fontWeight: 'bold'}}>
                      Date <span style={{color: '#fff', marginLeft: 15}}>16/07/2023 8PM-9PM</span>
                    </Typography>
                  </Grid>
                </Grid>
              </FlexBox>

              <FlexBox style={{marginTop: 25, color: '#fff'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: 20, alignItems: 'center', marginBottom: 10}}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography style={{color: '#4CE95A', fontSize: 18, fontWeight: 'bold'}}>
                      Google Map <LocationOnIcon style={{marginLeft: 15, color: 'white', marginBottom: -3}}/>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography style={{color: '#4CE95A', fontSize: 18, fontWeight: 'bold'}}>
                        Number of Players <span style={{color: '#fff', marginLeft: 15}}>14</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Typography style={{color: '#4CE95A', fontSize: 18, fontWeight: 'bold'}}>
                        Players Required <span style={{color: '#fff', marginLeft: 15}}>2</span>
                    </Typography>
                  </Grid>
                </Grid>
             </FlexBox>
            </FlexBox>
            
          </AccordionSummary>

          <AccordionDetails>
            <Box style={{marginTop: 20, marginLeft: 25}} sx={{ flexGrow: 1 }}>
                <Typography style={{color: '#4CE95A', marginBottom: 15, fontSize: 20, fontWeight: 600}}>
                      Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gptEOLWU_ZFZQGMwF_EzTYAvGmeerm5aqZJG9hnWAA&s" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Abhishek
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Uday
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYZ5Ug1CDMppuput1FGd-kwYNoZwcJwDY2fCPmlsK8Q&s" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Nishant
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box style={{marginTop: 20, marginLeft: 25}} sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1f10Ha21IUV3t0oABQAcNI1ncGs5o3ohWA&usqp=CAU" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OmtCTmW8kQi4I5LnRFkvVIhdKIs2RSnVTQ&usqp=CAU" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Abhinav
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa19/img/players/p246525.png?v=23" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Vaibhav
                    </Typography>
                  </Grid>
                </Grid>
            </Box>

            <Box style={{marginTop: 20, marginLeft: 25}} sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Harsh
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <AccountCircleIcon style={{marginRight: 15, fontSize: 42}}/>
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      (Empty)
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <AccountCircleIcon style={{marginRight: 15, fontSize: 42}}/>
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      (Empty)
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            
            <Box style={{marginTop: 20, marginLeft: 25}} sx={{ flexGrow: 1 }}>
                <Typography style={{color: '#4CE95A', marginBottom: 15, fontSize: 20, fontWeight: 600}}>
                      Un Reserved Players
                </Typography> 
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://i.pinimg.com/736x/f0/8e/1e/f08e1ec7ab1589419d515b7fbb60d88b.jpg" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Sahil
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://cdn.futbin.com/content/fifa23/img/players/p50529093.png" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                      Shubham
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar id="avatar" alt="profile" src="https://e0.pxfuel.com/wallpapers/762/930/desktop-wallpaper-allison-becker-baseball-glove-sports-jersey-thumbnail.jpg" />
                    <Typography style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
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
