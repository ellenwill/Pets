import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PetList from '../Visitor/PetList'
import * as constants from '../constants'
import {PET_PROFILE_JON} from '../constants'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function MyPets(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          View My Profile
        </Typography>
        <Typography component="p">

                <Link to ={"/SiteParts/VisualParts/PetCards1"}> My Pets </Link>

        </Typography>
      </Paper>
    </div>
  );
}

MyPets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyPets);
