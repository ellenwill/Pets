//This can do searching, retrieve "My Pets," or do any other thing
//that requires retrieving multiple pets at once.

import React, { Component } from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'
import Formats from './Formats'
import Loading from './Loading'

class PetArrayDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
          pets: props.pets,

          //These are all arrays
          //If you add a filter, you must also
          //add it to the if statement below
          keyFilter: props.keyFilter,
          nameFilter: props.nameFilter,
          breedFilter: props.breedFilter,
          ageFliter: props.ageFilter,
          
          loaded: false,
        };
      this.petsRef = firebase.database().ref('pets');
      this.petsChildren = ['Dog', 'Cat', 'Other']
      this.setPets = this.setPets.bind(this)
      this.populatePets = this.populatePets.bind(this);
    }

    componentDidMount() {
      !this.props.pets && this.populatePets();
    }

    componentWillMount(){
    }

    componentWillUnmount(){
      //firebase.removeBinding(this.petsRef);
    }

    componentWillUpdate(){
      
    }

    populatePets(){
      let newPets = [];
      for (let i = 0; i < this.petsChildren.length; i++){
      this.petsRef.child(this.petsChildren[i]).on('value', snapshot => {
        let pets = snapshot.val();
        for (let pet in pets) {
          if (
              (!this.state.keyFilter || this.state.keyFilter.includes(pet))
              && (!this.state.nameFilter || this.state.nameFilter.includes(pets[pet].petName))
              && (!this.state.breedFilter || this.state.breedFilter.includes(pets[pet].petBreed))
              && (!this.state.ageFilter || this.state.ageFilter.includes(pets[pet].petAge))
              //Etc.
                )
              
            {
              newPets.push({
                id: pet,

                animalType: this.petsChildren[i],

                petName: pets[pet].petName,
                petBreed: pets[pet].petBreed,
                petAge: pets[pet].petAge,
                petDescription: pets[pet].petDescription,

                //dog-specific
                petSize: pets[pet].petSize,

                //cat-specific
                petHair: pets[pet].petHair,
              });
            }
        }
      });
    }
    this.setPets(newPets)
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
                <li key={pet.id}>
                    <PetDisplay pet={pet}/>
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