import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPet from './AddPet'
import * as routes from "../routes";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function AddPetsPaper(props) {
  const { classes } = props;

  return (

      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Add Pets
          </Typography>
          <Typography component="p">
                  <Link to = 'AddPet'> Add Pet </Link>
          </Typography>
        </Paper>
      </div>
    );
  }



AddPetsPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPetsPaper);
