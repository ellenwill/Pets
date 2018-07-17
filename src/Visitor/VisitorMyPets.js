import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PetCards1 from '../SiteParts/VisualParts/PetCards1'
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as constants from '../constants'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function VisitorMyPets(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          View My Profile
        </Typography>
        <Typography component="p">

                <Link to = 'PetCards1'> My pet(s) </Link>

        </Typography>
      </Paper>
    </div>
  );
}

VisitorMyPets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisitorMyPets);
