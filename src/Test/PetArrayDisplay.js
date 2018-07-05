//This can do searching, retrieve "My Pets," or do any other thing
//that requires retrieving multiple pets at once.

import React, {Component} from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'
import Formats from './Formats'

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
          
        };
      this.petsRef = firebase.database().ref('pets');
      this.populatePets = this.populatePets.bind(this);
    }

    componentDidMount() {
      this.petsRef.on('value', data=> {
        this.setState({
          pets: data.val(),
        })
      })
      !this.props.pets && this.populatePets();
    }

    componentWillMount(){
    }

    componentWillUnmount(){
      //firebase.removeBinding(this.petsRef);
    }

    populatePets(){
      this.petsRef.on('value', snapshot => {
        let pets = snapshot.val();
        let newPets = [];
        for (let pet in pets) {
          if (
              (!this.state.keyFilter || this.state.keyFilter.includes(pet))
              && (!this.state.nameFilter || this.state.nameFilter.includes(pets[pet].petName))
              && (!this.state.breedFilter || this.state.breedFilter.includes(pets[pet].petBreed))
              && (!this.state.ageFilter || this.state.ageFilter.includes(pets[pet].petAge)))
              
            {
              newPets.push({
                id: pet,
                petName: pets[pet].petName,
                petBreed: pets[pet].petBreed,
                petAge: pets[pet].petAge,
                petDescription: pets[pet].petDescription,
              });
            }
        }
        this.setState({
          pets: newPets
        });
      });
    }

    render(){
        return(
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
        )
    }
  }
  export default PetArrayDisplay;