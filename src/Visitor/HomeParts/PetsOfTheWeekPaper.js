import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PetCards1 from '../../SiteParts/VisualParts/PetCards1'
import PetCards2 from '../../SiteParts/VisualParts/PetCards2'
import PetCards3 from '../../SiteParts/VisualParts/PetCards3'
import PetsOfTheWeek from '../PetsOfTheWeek'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PetsOfTheWeekPaper(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          <div style={{color:"#05349A"}}>
          <b>Pets Of The Week</b>
          </div>
        </Typography>
        <Typography component="p">
          <div>
            {<PetsOfTheWeek/> || <div class="flexCardContainer"><PetCards3/>
            <PetCards1/>
            <PetCards2/></div>}
          </div>
        </Typography>
      </Paper>
    </div>
  );
}

PetsOfTheWeekPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetsOfTheWeekPaper);
