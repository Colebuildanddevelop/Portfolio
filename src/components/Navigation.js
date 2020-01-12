import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
// ROUTER
import { useRouteMatch } from 'react-router-dom';
// COMPONENTS
import NavBar from './NavBar';
import WorkDisplay from './WorkDisplay';
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.primary,
    marginTop: 60
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
            <Typography variant='h3' align='center' style={{fontWeight: 'bold'}}>
              Web Developer   
            </Typography>
            <Typography variant='h6' align='center' style={{marginTop: 10}}>
              React, Redux, Node.js, Firebase  
            </Typography>    
            <div style={{marginTop: 30}}>
              <WorkDisplay/>       
            </div> 
          </Route>   
        </Switch>
      </Container>
    </React.Fragment>
  );
};

export default Navigation;