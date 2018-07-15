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

function AboutUsPaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          <div style={{color:"#05349A"}}>
            <b>About Us</b>
          </div>
        </Typography>
        <Typography component="p">
            ADOPET is an organization dedicated to helping animals find loving homes. <br/>
            We team with our Pet Providers (various shelters) to present to you pets to browse.<br/>
            Our hope is that our service can people see pets that might otherwise be overlooked, and that we can help people see all of their options and find the best pet for them.
        </Typography>
      </Paper>
    </div>
  );
}

AboutUsPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsPaper);
