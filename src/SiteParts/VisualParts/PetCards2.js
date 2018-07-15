import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function PetCards(props) {
  const { classes } = props;
  return (
    <div>
    <div class="flexCard">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://gdurl.com/Ymw4"
          title="GoodGirl"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Chandra
          </Typography>
          <Typography component="p">
            <p><b>Age:</b> 11   <b>Breed:</b> Tortie</p>
            Chandra is cute but not very bright.
            <br/>
            <Button size="small" color="primary">
            View More
            </Button>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

PetCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCards);
