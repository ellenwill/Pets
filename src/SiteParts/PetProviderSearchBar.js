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
import {USSTATES} from '../constants'

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

  const location = USSTATES

  class PetProviderSearchBar extends React.Component {
    state = {
      Location: [],
    };

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value },
        () => { /*passing the new state to petlist */
              //console.log("In PetProviderSearchBar")
          this.props.addFilter(this.state)
        }
      );
    };

    render() {
      const { classes, theme } = this.props;

      return (
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
      );
    }
  }

  PetProviderSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(PetProviderSearchBar);
