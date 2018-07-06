//This can do searching, retrieve "My Pets," or do any other thing
//that requires retrieving multiple pets at once.

import React, { Component } from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'
import Loading from './Loading'
import TestDBTools from './TestDBTools';

class PetArrayDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
          pets: props.pets,

          //These are all arrays
          //If you add a filter, you must also
          //add it to the if statement below

          //**Moved to input argument of populate pets */

          //petIDFilters: props.petIDFilters,
          //nameFilters: props.nameFilters,
          //breedFilters: props.breedFilters,
          //ageFilters: props.ageFilters,
          
          loaded: false,
        };
        this.tools = new TestDBTools();
        this.petsRef = firebase.database().ref('pets');
        this.petsChildren = this.tools.databaseChildren('pets');
        this.setPets = this.setPets.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
     let newPets = this.tools.populatePets();
     this.setPets(newPets)
    }

    componentWillUnmount(){
      //firebase.removeBinding(this.petsRef);
    }

    componentWillUpdate(){
      
    }

    handleChange(){
      this.forceUpdate();
    }

    setPets(newPets){
      this.setState({
        pets: newPets,
        loaded: true,
      });
    }

    render(){
      return(
        <div>{!this.state.loaded ? <Loading/> :
        <ul>
        {Array.isArray(this.state.pets) &&
          this.state.pets.map((pet) => {
            return (
            <div>
                <li key={pet.petID}>
                    <PetDisplay pet={pet} onChange={this.handleChange}/>
                </li>
            </div>
            )
          })
        }
        </ul>
        }</div>
      )}
  }
  export default PetArrayDisplay;