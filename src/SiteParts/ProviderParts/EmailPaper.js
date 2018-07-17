import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function EmailPaper(props) {
  const { classes } = props;
  const email = props.email || ''

  return (
    <div>
      <Paper className={classes.root} elevation={1}>

        <Typography variant="headline" component="h3">
        <div style={{color:"#05349A"}}>
          Email
          </div>
        </Typography>
        <Typography component="p">

        <Typography variant="" component="h3">
          {/*Email Us*/}
        </Typography>
        <Typography component="p">
        <a href={"mailto:" + email} class="email"><Button size="large" color="primary">{email}</Button></a>
        </Typography>
        </Typography>
      </Paper>
    </div>
  );
}

EmailPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailPaper);
