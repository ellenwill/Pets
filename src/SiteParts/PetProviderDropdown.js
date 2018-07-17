import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {PAYPAL_CONSTANTS} from '../constants'

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class PetProviderDropdown extends React.Component {

    state = {
      petProvider: '',
      open: false,
    };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Donate to ...</InputLabel>
          <Select
            name = 'petProvider'
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.petProvider}
            onChange={this.handleChange}
          >
            <MenuItem value={PAYPAL_CONSTANTS.PET_PROVIDER_TEST1}>PetProvider1</MenuItem>
            <MenuItem value={PAYPAL_CONSTANTS.PET_PROVIDER_TEST2}>PetProvider2</MenuItem>
            <MenuItem value={30}>PetProvider3</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

PetProviderDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetProviderDropdown);
