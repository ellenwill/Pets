import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function HoursPaper(props) {
  const { classes } = props;

  const hours = props.hours ||  "Mon-Thurs: 8am-6pm Fri-Sun: 8am-9pm"


  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>
          Hours
          </div>
        </Typography>
        <Typography component="p">

          {hours}
        </Typography>
      </Paper>
    </div>
  );
}

HoursPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HoursPaper);
