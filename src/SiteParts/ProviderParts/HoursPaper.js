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
  const hours = props.hours || ''

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Hours
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
