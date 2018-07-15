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
    <div className={classes.root}>
    <br/>
    <div style={{color:"#05349A", fontSize:"300%", paddingLeft:"40%"}}>
      <b>Pet Care FAQ</b>
    </div>
    <br/>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>By comming, you have expressed an interest in adopting rather than shopping, and we congratulate you.</Paper>
        </Grid>

      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Info</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
