import React, { useState } from 'react'
// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Zoom from '@material-ui/core/Zoom';
// MEDIA 
import stupidShirtsGif from '../StupidShirtsAddingItems.gif';
import predictBrGif from '../predictChoseGame.gif';
import friendsGif from '../fwv.gif';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      padding: 10
    }
  },
  workTitle: {
    display: 'block',
    width: '100%',  
    fontWeight: 'bold',
    fontSize: 35,
    padding: 10
  },
  cardGif: {
    margin: 'auto',
    height: 600, 
    width: 270, 
    marginBottom: 25, 
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
  },
  learnMoreButton: {
    marginBottom: 20,
    width: '90%'
  },
  descBox: {
    padding: 10
  }
}));

const WorkDisplay = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    PredictBr: false,
    FriendsWithVids: false,
    StupidShirts: false,
    clicked: false,
  })



  return (
    <React.Fragment>      
      <Grid container>
        <Grid className={classes.mainContainer} item xs={12} md={4} >
          <Zoom in={true} timeout={1000}>  
            <Card style={{backgroundColor: '#5ee07d', minHeight: 200, marginTop: 5}}>                
              <Typography align='left' variant='contained' className={classes.workTitle}>
                PredictBr 
              </Typography>                   
              <CardMedia className={classes.cardGif} image={predictBrGif}/>
              <Divider variant='middle' style={{backgroundColor: 'black'}}/>
              <Grid item xs={12}>
                <ButtonBase style={{display: 'block', width: '100%'}} >                         
                  <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                    Players compete by predicting the price of a given financial product at a given future date.
                  </Typography> 
                </ButtonBase>                     
              </Grid>  
              <Grid item xs={12} container className={classes.descBox} style={{width: '100%', flex: 1, }}>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://valueisright.firebaseapp.com/' variant='contained' style={{width: '100%', backgroundColor: 'black', color: '#5ee07d'}}>
                    Website    
                  </Button>    
                </Grid>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://github.com/Colebuildanddevelop/PredictBr' variant='contained' style={{width: '100%', backgroundColor: 'black', color: '#5ee07d'}}>
                    Code    
                  </Button>    
                </Grid>                       
              </Grid>                  
            </Card>
          </Zoom>  
        </Grid>
        <Grid className={classes.mainContainer} item xs={12} md={4} >          
          <Zoom in={true} timeout={1000}>
            <Card style={{backgroundColor: "#673ab7", color: 'white', minHeight: 200, marginTop: 5}}>                
              <Typography align='left' variant='contained' className={classes.workTitle}>
                FriendsWithVids
              </Typography>         
              <CardMedia className={classes.cardGif} image={friendsGif}/>
              <Divider variant='middle' style={{backgroundColor: 'white'}}/>   
              <Grid xs={12}>
                <ButtonBase style={{display: 'block', width: '100%'}} >        
                  <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                    Watch publicly queued Youtube videos in sync with others. Give credit, or vote to skip their queued video.
                  </Typography> 
                </ButtonBase>                       
              </Grid>    
              <Grid xs={12} item container className={classes.descBox} style={{width: '%100', flex: 1}}>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://friendswithvids.firebaseapp.com/' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: '#673ab7'}}>
                    Website    
                  </Button>    
                </Grid>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://github.com/Colebuildanddevelop/friendswithvids' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: '#673ab7'}}>
                    Code    
                  </Button>    
                </Grid>                       
              </Grid>                                                        
            </Card>
          </Zoom>       
        </Grid>
        <Grid className={classes.mainContainer} item xs={12} md={4} >
          <Zoom in={true} timeout={900}>
            <Card style={{backgroundColor: 'black', color: 'white', minHeight: 200, marginTop: 5}}>                
              <Typography align='left' variant='contained' className={classes.workTitle}>
                StupidShirts
              </Typography>   
              <CardMedia className={classes.cardGif} image={stupidShirtsGif}/>
              <Divider variant='middle' style={{backgroundColor: 'white'}} />
              <Grid xs={12} style={{marginBottom: 30}}>
                <ButtonBase style={{display: 'block', width: '100%'}} >
                  <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                    An E-commerce Website with a custom stripe payment integration. 
                  </Typography> 
                </ButtonBase>                    
              </Grid>      
              <Grid xs={12} item container className={classes.descBox} style={{width: '%100', flex: 1}}>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://stupid-shirts.firebaseapp.com/' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: 'black'}}>
                    Website    
                  </Button>    
                </Grid>
                <Grid item xs={6} style={{padding: 7, marginTop: 'auto'}}>
                  <Button href='https://github.com/Colebuildanddevelop/EcommerceProject' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: 'black'}}>
                    Code    
                  </Button>    
                </Grid>  
              </Grid>                  
            </Card>
          </Zoom>                     
        </Grid>                
      </Grid>  
    </React.Fragment>
  )
}

export default WorkDisplay; 
