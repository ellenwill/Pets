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

function WebsitePaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>
          Our Website
        </div>
        </Typography>
        <Typography component="p">
          pawpawspets.org
        </Typography>
      </Paper>
    </div>
  );
}

WebsitePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebsitePaper);
