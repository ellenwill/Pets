import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import FAQ from '../FAQ'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function FAQPaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Frequently Asked Questions
        </Typography>
        <Typography component="p">
                <Link to = 'FAQ'> Click here to learn more </Link>
        </Typography>
      </Paper>
    </div>
  );
}

FAQPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQPaper);
