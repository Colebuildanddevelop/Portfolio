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
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// images
import predictBrLogo from '../predictBrLogo.png';

const useStyles = makeStyles(theme => ({
  workContainer: {
    minHeight: 200,
  },
  workTitle: {
    display: 'block',
    width: '100%',  
    fontWeight: 'bold',
    fontSize: 35,
    padding: 10
  },


}));

const WorkDisplay = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    PredictBr: false,
    FriendsWithVids: false,
    StupidShirts: false,
    clicked: false,
  })

  const handleClick = (item) => {
    console.log(state[item])
    if (state[item] === false) {
      setState(state => ({
          ...state,
          clicked: true,
          [item]: true
        }))
    } else {
      setState(state => ({
        ...state,
        clicked: false,
        [item]: false
      }))        
    }
  }

  return (
    <React.Fragment>
      
      <Divider variant='middle'/>
      <Typography align='center' variant='h6' style={{fontWeight: 'lighter'}}>
        recent work   
      </Typography>

      <Grid container>
        {state.PredictBr === false ? (
          <Zoom in={!state.PredictBr} timeout={350}>  
            <Grid item xs={12} style={{marginTop: 15}}>
              <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('PredictBr')}>
                <Card className={classes.workContainer} style={{backgroundColor: '#5ee07d'}}>                
                  <Typography align='left' className={classes.workTitle}>
                    PredictBr 
                  </Typography>                         
                </Card>
              </ButtonBase>                                       
            </Grid>     
          </Zoom>         
        ) : (
          <Grow in={state.PredictBr} timeout={350}>
            <Grid item xs={12} style={{marginTop: 15}}>
                <Card className={classes.workContainer} style={{backgroundColor: '#5ee07d'}}>     
                  <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('PredictBr')}>           
                    <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                      Players compete by predicting the price of a given financial product at a given future date.
                    </Typography> 
                  </ButtonBase>    
                  <Grid xs={12} item container style={{marginTop: 20}}>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://valueisright.firebaseapp.com/' variant='contained' style={{width: '100%', backgroundColor: 'black', color: '#5ee07d'}}>
                        Website    
                      </Button>    
                    </Grid>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://github.com/Colebuildanddevelop/PredictBr' variant='contained' style={{width: '100%', backgroundColor: 'black', color: '#5ee07d'}}>
                        Code    
                      </Button>    
                    </Grid>                       
                  </Grid>                             
                </Card>
            </Grid>                                                 
          </Grow>
        )}  
        {state.FriendsWithVids === false ? (
          <Zoom in={!state.FriendsWithVids} timeout={350}>
            <Grid item xs={12} style={{marginTop: 10}}>
              <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('FriendsWithVids')}>
                <Card className={classes.workContainer} style={{backgroundColor: "#673ab7", color: 'white'}}>                
                  <Typography align='left' variant='contained' className={classes.workTitle}>
                    FriendsWithVids
                  </Typography>                         
                </Card>
              </ButtonBase>     
            </Grid>  
          </Zoom>     
        ) : (
          <Grow in={state.FriendsWithVids}timeout={350}>
            <Grid item xs={12} style={{marginTop: 10}}>
                <Card className={classes.workContainer} style={{backgroundColor: "#673ab7", color: 'white'}}>        
                  <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('FriendsWithVids')}>        
                    <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                      Watch publicly queued Youtube videos in sync with others. Give credit, or vote to skip their queued video.
                    </Typography> 
                  </ButtonBase>     
                  <Grid xs={12} item container style={{marginTop: 10}}>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://friendswithvids.firebaseapp.com/' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: '#673ab7'}}>
                        Website    
                      </Button>    
                    </Grid>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://github.com/Colebuildanddevelop/friendswithvids' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: '#673ab7'}}>
                        Code    
                      </Button>    
                    </Grid>                       
                  </Grid>                          
                </Card>
            </Grid>  
          </Grow>    
        )}        
        {state.StupidShirts === false ? (
          <Zoom in={!state.StupidShirts} timeout={350}>
            <Grid item xs={12} style={{marginTop: 5}}>  
              <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('StupidShirts')}>
                <Card className={classes.workContainer} style={{backgroundColor: 'black', color: 'white'}}>                
                  <Typography align='left' variant='contained' className={classes.workTitle}>
                    StupidShirts
                  </Typography>                         
                </Card>
              </ButtonBase>   
            </Grid> 
          </Zoom>   
        ) : (
          <Grow in={state.StupidShirts} timeout={350}>
            <Grid item xs={12} style={{marginTop: 10}}>  
                <Card className={classes.workContainer} style={{backgroundColor: 'black', color: 'white'}}>      
                  <ButtonBase style={{display: 'block', width: '100%'}} onClick={() => handleClick('StupidShirts')}>
                    <Typography align='center' variant='h6' style={{padding: 15, fontWeight: 'bold'}}>
                      An Eccommerce Website with a custom stripe payment integration. 
                    </Typography> 
                  </ButtonBase>   
                  <Grid xs={12} item container style={{marginTop: 20}}>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://stupid-shirts.firebaseapp.com/' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: 'black'}}>
                        Website    
                      </Button>    
                    </Grid>
                    <Grid item xs={6} style={{padding: 7}}>
                      <Button href='https://github.com/Colebuildanddevelop/EcommerceProject' variant='contained' style={{width: '100%', margin: 'auto', backgroundColor: 'white', color: 'black'}}>
                        Code    
                      </Button>    
                    </Grid>                       
                  </Grid>                          
                </Card>
            </Grid> 
          </Grow>   
        )}              
      </Grid>
    </React.Fragment>
  )
}

export default WorkDisplay; 
