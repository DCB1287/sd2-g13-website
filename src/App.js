import * as React from 'react';
import "./styles.css";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import ReactGoogleSlides from "react-google-slides";
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    Divider,
    Grid, 
    Container, 
    ImageList,
    ImageListItem
  } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function App() {
  return (
    <>
    <Container sx={{bgcolor: "#e5f1e1", paddingBottom: 10}}>
        <Divider />
        
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign='center'>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
              
            }}>
             <Typography variant='h2'>Autonomous Hydroponic Drip System</Typography>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography variant='h2'>Group 13</Typography>
            </div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Demonstration Video</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={6}>
              <LiteYoutubeEmbed id='R1aW7OYngiU' />
          </Grid>
        </Grid>
        <div className="downloadlink">
        <a className = "downloadlink" href="https://drive.google.com/uc?id=1HzD6To7MQheOq3Gge3IbTkJ-SNL4Qshw&export=download">Download Demonstration</a>
        </div>
        
        <Divider />
        <Container>
        <Grid container direction='row' spacing={0}>
          <Grid item xs={3}>
            <Card sx={{width: "12vw" }}>
              <CardMedia
                className="selfie"
                component="img"
                height="300"
                image="/images/jacob.png"
                alt="Jacob Reichle"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jacob Reichle, CpE 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hardware Logic, PCB Design
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{width: "14vw"}}>
              <CardMedia
                component="img"
                height="300"
                image="/images/max.png"
                alt="Maximillian Gomer"
                className="selfie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Maximillian Gomer, CpE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  MCU Networking Software, Server Software
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: "76%" }}>
              <CardMedia
                component="img"
                height="300"
                image="/images/david.png"
                alt="David Babcock"
                className="selfie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  David Babcock, CpE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobile Application, MCU Software
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: "85%" }}>
              <CardMedia
                component="img"
                height="300"
                image="/images/marco.png"
                alt="Marco Bogani"
                className="selfie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Marco Bogani, CpE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Electrical Design, Support Structure
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Container>
        <Divider />
        <Grid container spacing={0} textAlign='center'>
          <Grid item xs={12}>
              <Typography variant='h2'>About Our Project</Typography>
          </Grid>
        </Grid>
        <Container>
        <Grid item>
          <Typography variant='h4'>Project Summary</Typography>
            <p>The objective of this project is to create a 
              microcontroller and client-oriented mobile application 
              for the purposes of monitoring and maintaining a hydroponic drip system. 
              Sensor information on system water-level and pH will be used to alert 
              the client and administer pH adjustment fluids appropriately. 
              The mobile application will be linked to the microcontroller so that 
              system can be controlled and monitored remotely over Wi-Fi connection. 
              Our group chose this project as a method to integrate software design and 
              computer engineering for the purposes of improving small-space hydroponics 
              in an increasingly remote society.</p>
          </Grid>
          <Typography variant='h4'>Problem to Tackle</Typography>
          <ul>
            <li>People have less agricultural space to grow their own food</li>
            <li>Global warming makes it more expensive to maintain outdoor plants</li>
            <li>Lack of time to maintain a garden</li>
            <li>What if someone already has hydroponics but doesn’t want to closely monitor the medium day-to-day?</li>
          </ul>
          <Typography variant='h4'>Project Goals and Objectives</Typography>
          <ul>
            <li>Reduce the horizontal space by going vertical</li>
            <li>Automate the pH balancing process</li>
            <li>Create a user-friendly interface to interact with the system</li>
            <li>Store system data for the user to visualize </li>
            <li>Prolong intervals between need for user-intervention </li>
          </ul>
          <Typography variant='h4'>Project Features</Typography>
          <ul>
            <li>System devices controlled through a mobile application</li>
            <li>Sensor data stored in a hosted database automatically</li>
            <li>Balances the pH of the water automatically</li>
            <li>Real-time data shown through the mobile application and LCD</li>
          </ul>
          <Divider />
          
          
        </Container>
        {/* <Grid container spacing={0} justifyContent='center'>
          <Grid item>
            <ImageList
                sx={{ width: 750, height: 1000}}
                variant="quilted"
                cols={4}
                rowHeight={200}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 200, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
          </Grid>
        </Grid> */}
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Critical Design Review Slides</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item>
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/15Pl4VFJCg_0LHbLFG9sLigHV356Dcctt_4ohLItGOog/edit#slide=id.gcf9ccdeff9_4_10"
            position={1}
            showControls
          />
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Final Design Review Slides</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item>
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink="https://docs.google.com/presentation/d/11Bsrrc9MzB1Gu6h4_EYVa-Q__xREGjoupdd0FoUhH5o/edit?usp=sharing"
            position={1}
            showControls
          />
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Committee Presentation Video</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={6}>
              <LiteYoutubeEmbed id='aqZ0y8QjShU' />
          </Grid>
        </Grid>
        <div className="downloadlink">
        <a className = "downloadlink" href="https://drive.google.com/uc?id=1Q4MYes3O7jH6NUIRdZsS2RS2EtcyMm6p&export=download">Download Presentation</a>
        </div>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Senior Design II Documentation</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={8}>
          <div className="documentdisplay">
          <iframe
            src={"/documents/SD2 Final Report.pdf"}
            title="file"
            width="800"
            height="900"
          /></div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>Senior Design I Documentation</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={8}>
          <div className="displaydocument">
          <iframe
            src={"/documents/SD1 Final Report.pdf"}
            title="file"
            width="800"
            height="900"
          /></div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>8 Page Conference Paper</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={8}>
          <div className="displaydocument">
          <iframe
            src={"/documents/SDCP.pdf"}
            title="file"
            width="800"
            height="900"
          /></div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={0} justifyContent='center'>
          <Typography variant='h4'>10 Page Divide and Conquer Documentation</Typography>
        </Grid>
        <Grid container spacing={0} justifyContent='center'>
          <Grid item xs={8}>
          <div className="displaydocument">
          <iframe
            src={"/documents/10 Page Divide and Conquer.pdf"}
            title="file"
            width="800"
            height="900"
          /></div>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </>
  );
}

const itemData = [
  {
    img: '/images/frontview.png',
    title: 'Front View',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/prototype.png',
    title: 'Prototype Sketch',
  },
  {
    img: '/images/lcd.jpg',
    title: 'LCD',
  },
  {
    img: '/images/dosers.jpg',
    title: 'Dosers',
    cols: 2,
  },
  {
    img: '/images/bucket.jpg',
    title: 'Bucket',
    cols: 2,
  },
  {
    img: '/images/schematic.jpg',
    title: 'Schematic',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/settings.jpg',
    title: 'Settings1',
  },
  {
    img: '/images/settings2.jpg',
    title: 'Settings2',
  },
  {
    img: '/images/graphs.jpg',
    title: 'Graphs',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/post.jpg',
    title: 'Post',
    cols: 2,
  },
  {
    img: '/images/phacc.jpg',
    title: 'pH Accuracy',
    cols: 2,
  },
];

export default App;
