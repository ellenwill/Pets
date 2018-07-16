import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
};

/**
 * Props must contain a petProvider object. You can get an array of them
 * by calling DBTools().populatePetProviders(filter)
 * where filter is a string or array of strings, and then extracting
 * the petProvider.
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
            {!props.petProvider.name ? <div>{props.animalType}</div> : <div>{props.petProvider.name}</div>}
          </Typography>
          <Typography component="p">
            <span>Adopt our adorable pets. We are located at {props.petProvider.street}{', '}
            {props.petProvider.city}{', '}{props.petProvider.usstate}{ ' ' }{props.petProvider.zip}
            </span>
          </Typography>
        </CardContent>
          {props.petProvider.photoURL ? props.petProvider.photoURL &&
            <CardMedia className={classes.media}
                              image={props.petProvider.photoURL}/>
          : <CardMedia className={classes.media}
                              image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Trichoplax_adhaerens_photograph.png/60px-Trichoplax_adhaerens_photograph.png"  /*use gdurl.com*/
                              title="GoodGirl"

          /> }

          <CardActions>
          <Button size="small" color="primary">
            <Link to ={"/petProvider/" + props.petProvider.petProviderID}> View More </Link>
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
