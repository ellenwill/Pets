//Displays an array of pet objects.
//This should be formatted for the cards.

//Conditional rendering: If you feed it a single pet, it will render
//just that pet. If you feed it an array, it will render the whole array.
//If you feed it both, it will render both.

import React, {Component} from 'react';
import TestDBTools from './TestDBTools';

class PetDisplay extends Component{

  constructor(props){
    super(props);

    this.state= {
      //pets: props.pets,
      pet: props.pet,
    }
    //this.tools = new TestDBTools();
    this.delete = this.delete.bind(this)
  }

  generalPetDispay()
  {  }

  componentWillMount(){
  }

  delete(){
    new TestDBTools().deletePet(this.state.pet.id);
  }

  render(){
    return (
      <section>
        <div>
              Name: {this.state.pet.petName}<br/>
              Breed: {this.state.pet.petBreed}<br/>
              Age: {this.state.pet.petAge}<br/>
              Description: {this.state.pet.petDescription}<br/>
        </div>
        <button onClick={this.delete}>Delete</button>
      </section>
  )
  }

}
export default PetDisplay;