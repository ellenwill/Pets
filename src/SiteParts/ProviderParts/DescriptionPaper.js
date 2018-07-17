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
  const description = props.description

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>  About Us </div>
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
