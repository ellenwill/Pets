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
 * by calling DBTools().populatePets(filter)
 * where filter is a string or array of strings, and then extracting
 * the pet.
 * @param {*} props
 */
function ProviderCards(props) {
  const { classes } = props;

  return (
    <div>
    <div class="flexCard">
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {!props.pet.petName ? <div>{props.animalType}</div> : <div>{props.pet.petName}</div>}
          </Typography>
          <Typography component="p">
            <span>Adopt this adorable {props.pet.animalType}. </span>
            {props.pet.gender === 'male' && <span>He</span>}{props.pet.gender === 'female' && <span>She</span>}
            {(props.pet.gender != 'male' && props.pet.gender != 'female') && <span>They</span>} will give you so many good cuddles.
            {//<PetDisplay pet={props.pet}/>
            }
          </Typography>
        </CardContent>

        {console.log(props.pet.photoURL)}
          {props.pet.photoURL ? props.pet.photoURL &&
            <CardMedia className={classes.media}
                              image={props.pet.photoURL}/>
          : <CardMedia className={classes.media}
                              image="http://gdurl.com/27XK"  /*use gdurl.com*/
                              title="GoodGirl"

          /> }

          <CardActions>
            <Button size="small" color="primary">
              View More
            </Button>
          </CardActions>
      </Card>
    </div>
    </div>
  );
}

ProviderCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProviderCards);
