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

function AddressPaper(props) {
  const { classes } = props;
  const address = props.address || "1234 Test Stree, Pittsburgh PA 15213"

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
<<<<<<< HEAD
        <div style={{color:"#05349A"}}>  Address </div>
        </Typography>
        <Typography component="p">
        1789 Pawson Street <br/>
        Lutherville, MD 21093
=======
          Address
        </Typography>
        <Typography component="p">
          {address}
>>>>>>> refs/remotes/origin/actualCode
        </Typography>
      </Paper>
    </div>
  );
}

AddressPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressPaper);
