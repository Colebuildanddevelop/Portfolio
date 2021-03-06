import React from 'react';
// REACT ROUTER
import { NavLink } from 'react-router-dom';
// MATERIAL-UI
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  navBarMain: {
    backgroundColor: 'black',
    color: 'white',    
    display: 'flex'
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bolder',
    fontSize: 20,
    padding: 12,
  },
  icon: {
    color: theme.palette.secondary,
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment >
      <HideOnScroll>
        <AppBar elevation={0} className={classes.navBarMain}>
          <Toolbar > 
            <Typography variant="h6" align="left" className={classes.title}>              
              <NavLink style={{ textDecoration: 'none', color: 'unset' }} to="/" color="inherit">
                {"< Cole Davis >"}
              </NavLink>
            </Typography>
            <IconButton>
              <Link href="https://github.com/Colebuildanddevelop">
                <GitHubIcon style={{color: 'white'}} />
              </Link>
            </IconButton>
          </Toolbar>         
        </AppBar>
      </HideOnScroll>
    </React.Fragment>    
  )
}


export default NavBar;