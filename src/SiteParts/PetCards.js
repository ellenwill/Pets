import React from 'react'
import firebase from '../firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PetDisplay from '../Test/PetDisplay';

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
};

var showDeets = false;

/**
 * Props must contain a pet object. You can get an array of them
 * by calling TestDBTools().populatePets(filter)
 * where filter is a string or array of strings, and then extracting
 * the pet.
 * @param {*} props 
 */
function PetCards(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        {!props.pet.photoURL && <CardMedia
          className={classes.media}
                            image="http://gdurl.com/27XK"  /*use gdurl.com*/
                            title="GoodGirl"
       
        /> }
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {!props.pet.petName ? <div>Doggie</div> : <div>{props.pet.petName}</div>}
          </Typography>
          <Typography component="p">
            Adopt this adorable {props.pet.animalType}. She will give you so many good cuddles.
            {<PetDisplay pet={props.pet}/>}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PetCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCards);
