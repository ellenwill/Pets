import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FAQ(props) {
  const { classes } = props;

  return (
    <div class="abox">
    <div className={classes.root}>
    <br/>
    <div style={{color:"#05349A", fontSize:"300%", paddingLeft:"40%"}}>
      <b>Pet Care FAQ</b>
    </div>
    <br/>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}> <b>By coming to ADOPET, you have expressed an interest in adopting rather than shopping, and we congratulate you.</b></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}><h2 style={{color:"#05349A"}}>Pet Care Tips (from our friends at petmd.com)</h2></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}><b>Feed your pet a high quality diet. <br/>A good diet can bring a variety of health benefits. <br/> Do not overfeed your pet and watch out for obesity.</b> <br/> <img src="http://gdurl.com/vs3R" alt="Food" width="150px"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>Take your pet to the vet regularly. <br/> ADOPET actually allows for your vet to update your pets information right on the site.</b> <br/> <img src="http://gdurl.com/gCxY" alt="Vet" width="100px"/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>Keep your pets mouth clean. <br/> You can use toothbrushes, or alternatives such as dental chews toys.</b><br/> <img src="http://gdurl.com/4c90" alt="Food" width="130px"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}><h2 style={{color:"#05349A"}}>Frequently Asked Questions</h2></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
                  <Paper className={classes.paper}><b>Once I get a pet, how I do I start harvesting cuddles?</b> <br/> Your pet will begin the cuddle producing process as soon as it realizes you have saved it. The more love you show your pet, the more cuddles it will produce.</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>Will my pet be visible to other people after I adopt it?</b> <br/> No, once your pet is adopted, we remove it from the public view and only you can see the pet. You can see a list of your pets under "Manage Acount" after you login.</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>How do I adopt one of your pets?</b> <br/> Once you see a pet you would like, simply contact the pet provider with the contact information provided on the pets page and set up an appointment for adoption.</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
