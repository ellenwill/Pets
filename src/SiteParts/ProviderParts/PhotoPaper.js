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

const PhotoPaper = (props) => {
  const { classes } = props;
  const photoURL = props.photoURL || ''

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
<<<<<<< HEAD
        <Typography component="p">
            <img src="http://gdurl.com/FSgC" width="300px"/>
=======
        <Typography variant="headline" component="h3">
        </Typography>
        <Typography component="p">
            <img src={photoURL} width="300px"/>
>>>>>>> refs/remotes/origin/actualCode
        </Typography>
      </Paper>
    </div>
  );
}

PhotoPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoPaper);
