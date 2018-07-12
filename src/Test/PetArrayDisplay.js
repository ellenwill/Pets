//This can do searching, retrieve "My Pets," or do any other thing
//that requires retrieving multiple pets at once.

import React, { Component } from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'
import Loading from './Loading'
import DBTools from '../DBTools/DBTools';

class PetArrayDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
          pets: props.pets,
          filters: props.filters,
          
          loaded: false,
        };
        this.tools = new DBTools();
        this.petsRef = firebase.database().ref('pets');
        this.setPets = this.setPets.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    //Lifecycle
    componentWillMount() {
      let newPets = this.tools.populatePets(this.props.filters);
      this.setPets(newPets)
    }

    componentWillUnmount(){
    }

    componentWillUpdate(){
      
    }

    //When anything in the PetDisplay object updates, this method is called.
    handleChange(){
      this.forceUpdate();
    }

    //Explicitly updates the state relating to the pets array.
    //Not used.
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
                  <PetDisplay pet={pet} onChange={this.handleChange}/>
            </div>
            )
          })
        }
        </ul>
        }</div>
      )}
  }
  export default PetArrayDisplay;