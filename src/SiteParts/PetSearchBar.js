import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import {PET_CONSTANTS, ALL_BREEDS} from '../constants'

  const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

<<<<<<< HEAD
  const names = [
    'Dog',
    'Cat',
    'Other',
  ];

  const petBreed = [
    'Boopy',
    'Mutt',
    'Poopy',
  ];

  const gender = [
    'Male',
    'Female',
  ];

=======
>>>>>>> origin/actualCode
  const location = [
    'Poopyland',
    'Doopydoopboopland',
  ];

  class PetSearchBar extends React.Component {
    state = {
      animalType: [],
      petBreed: [],
      gender: [],
      Location: [],
    };

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value },
        () => { /*passing the new state to petlist */
              console.log("In PetSearchBar")
          this.props.addFilter(this.state)
        }
      );
    };

    render() {
      const { classes, theme } = this.props;

      return (
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple">Type</InputLabel>
            <Select
              multiple
              name="animalType"
              value={this.state.animalType}
              onChange={this.handleChange}
              input={<Input id="select-multiple" />}
              MenuProps={MenuProps}
            >
              {PET_CONSTANTS.ANIMAL_TYPES.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{
                    fontWeight:
                      this.state.animalType.indexOf(name) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium,
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
<<<<<<< HEAD
            <InputLabel htmlFor="select-multiple-checkbox">Breed</InputLabel>
=======
            <InputLabel htmlFor="select-multiple-checkbox">Pet Breed</InputLabel>
>>>>>>> origin/actualCode
            <Select
              multiple
              name="petBreed"
              value={this.state.petBreed}
              onChange={this.handleChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {ALL_BREEDS.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.petBreed.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Gender</InputLabel>
            <Select
              multiple
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {PET_CONSTANTS.GENDER.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.gender.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Location</InputLabel>
            <Select
              multiple
              name="Location"
              value={this.state.Location}
              onChange={this.handleChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {location.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.Location.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    }
  }

  PetSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(PetSearchBar);
