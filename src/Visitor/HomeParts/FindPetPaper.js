import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PetList from '../PetList'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function FindPetPaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>
          <b>Find Your Perfect Pet Today!</b>
        </div>
        </Typography>
        <Typography component="p">
                <Link to = 'PetList'> <Button variant="contained" color="primary">Find a Pet </Button></Link>
        </Typography>
      </Paper>
    </div>
  );
}

FindPetPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindPetPaper);
