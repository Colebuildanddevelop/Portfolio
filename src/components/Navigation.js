import React from 'react';
import { Route, Switch } from 'react-router-dom';
// ROUTER
import { useRouteMatch } from 'react-router-dom';
// COMPONENTS
import NavBar from './NavBar';
import WorkDisplay from './WorkDisplay';
import Faq from './Faq';
import Footer from './Footer';
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

// STATIC
import personalPhoto from '../personalPhoto.jpg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 100
    },
    backgroundColor: theme.palette.primary,
    marginTop: 60
  },
  avatar: {
    height: 200, 
    width: 200,
    margin: 'auto',
    marginTop: 20,
  }

}));

const Navigation = (props) => {
  const classes = useStyles();
  let {url} = useRouteMatch();

  return (
    <React.Fragment>
      <Container style={{height: '100vh'}} className={classes.mainContainer}>        
        <NavBar/>   
        <Switch>  
          <Route exact path="/">   
            <Grid container>
              <Grid item style={{width: '100%'}}>
                <Typography variant='h3' align='center' style={{fontWeight: 'bold'}}>
                  Web Developer   
                </Typography>
                <Typography variant='h6' align='center'>
                  React, Redux, Node.js, Firebase  
                </Typography>    
                <Avatar src={personalPhoto} className={classes.avatar} />
                <Typography variant='h6' align='center' style={{marginTop: 20, fontWeight: 'lighter'}}>
                  I am a self motivated, coachable candidate. If given the opportunity I will provide massive value to an organization as a Web Developer. To best understand my current capabilites I present the following. 
                </Typography> 
              </Grid>
              
              <Grid container item xs={12} style={{marginTop: 20}}>
                <Divider style={{width: '100%', marginBottom: 20}}/>

                <WorkDisplay/>       
              </Grid>         
              <Grid container item xs={12} style={{marginTop: 30}}>
                <Divider style={{width: '100%', marginBottom: 20}}/>
                <Faq/>  
              </Grid>      
            </Grid>         
          </Route>   
        </Switch>
        <Footer/>
      </Container>
    </React.Fragment>
  );
};

export default Navigation;