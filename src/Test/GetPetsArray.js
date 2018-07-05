//This can do searching, retrieve "My Pets," or do any other thing
//that requires retrieving multiple pets at once.

import React, {Component} from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'
import Formats from './Formats'

class GetPetsArray extends Component {
    constructor(props){
      super(props);
      this.state = {
          pets: [],

          //These are all arrays
          keyFilter: props.keyFilter,
          nameFilter: props.nameFilter,
          breedFilter: props.breedFilter,
          ageFliter: props.ageFilter,
          
        };
      this.petsRef = firebase.database().ref('pets');
    }

    componentDidMount() {
      this.petsRef.on('value', data=> {
        this.setState({
          items: data.val(),
        })
      })
      this.populatePets();
    }

    componentWillMount(){
    }

    componentWillUnmount(){
      //firebase.removeBinding(this.petsRef);
    }

    populatePets(){
      this.petsRef.on('value', snapshot => {
        
        let pets = snapshot.val();
        let newState = [];
        for (let pet in pets) {
          if ((!this.state.keyFilter || this.state.keyFilter.includes(pet))
              && (!this.state.nameFilter || this.state.nameFilter.includes(pets[pet].petName))
              && (!this.state.breedFilter || this.state.breedFilter.includes(pets[pet].petBreed))
              && (!this.state.ageFilter || this.state.ageFilter.includes(pets[pet].petAge))){
            newState.push({
              id: pet,
              petName: pets[pet].petName,
              petBreed: pets[pet].petBreed,
              petAge: pets[pet].petAge,
              petDescription: pets[pet].petDescription,
            });
          }
        }
        this.setState({
          pets: newState
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
  export default GetPetsArray;