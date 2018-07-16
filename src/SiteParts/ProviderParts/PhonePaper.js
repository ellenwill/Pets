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

function PhonePaper(props) {
  const { classes } = props;
  const phoneNumber = props.phoneNumber || ''

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Phone Number
        </Typography>
        <Typography component="p">
            {phoneNumber}
        </Typography>
      </Paper>
    </div>
  );
}

PhonePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhonePaper);
