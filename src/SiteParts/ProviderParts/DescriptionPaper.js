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

function DescriptionPaper(props) {
  const { classes } = props;
  const description = props.description || "This a doop a boop a doop a poop a moop a doop.   This a doop a boop a doop a poop a moop a doop.   This a doop a boop a doop a poop a moop a doop.   This a doop a boop a doop a poop a moop a doop.   This a doop a boop a doop a poop a moop a doop."

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          About Us
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </Paper>
    </div>
  );
}

DescriptionPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DescriptionPaper);
