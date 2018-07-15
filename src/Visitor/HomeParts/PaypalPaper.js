import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PaypalRender from '../../SiteParts/PaypalRender'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaypalPaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>
          <b>Donate</b>
        </div>
        </Typography>
        <Typography component="p">
                <Link to = 'PaypalRender'> Click here to donate </Link>
        </Typography>
      </Paper>
    </div>
  );
}

PaypalPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaypalPaper);
