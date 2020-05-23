import React from 'react';
// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  qaBox: {
    marginBottom: 20
  }
}))

const Faq = () => {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container>

        <Typography variant='h3' align='center' style={{fontWeight: 'bolder', width: '100%', marginBottom: 20}}>
          FAQ    
        </Typography>  
        <Grid item xs={12} className={classes.qaBox}>
          <Typography variant='h6'>
            Why do you code?  
          </Typography>
          <Typography>
            I played professional poker successfully from 2017-2019. I will forever enjoy competing however I have forever aspired to build. 
            With the reality of poker being a zero sum game I knew only how to steal value and not create it. Given the leverage programming provides to individuals
            to create value, along with its never ending complexity, it was a natural decision to transition. 
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.qaBox}>
          <Typography variant='h6'>
            If you're not coding what are you doing?  
          </Typography>
          <Typography>
            - Disc Golf
          </Typography>
          <Typography>
            - Martial Arts
          </Typography>
          <Typography>
            - Hanging out with my dog
          </Typography>
          <Typography>
            - Craftsmanship
          </Typography>
        </Grid>     
        <Grid item xs={12} className={classes.qaBox}>
          <Typography variant='h6'>
            Favorite first generation starter Pokemon?
          </Typography>
          <Typography>
            Ivysaur!
          </Typography>

        </Grid>           
      </Grid> 
    </React.Fragment>

  )
}

export default Faq;