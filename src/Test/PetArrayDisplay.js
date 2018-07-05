import React, {Component} from 'react';

class PetArrayDisplay extends Component{

  constructor(props){
    super(props);

    this.pets = props.pets;
  }

  render(){
    return (
    <section>
    
    <div>
      <ul>
        {this.pets.map((pet) => {
          return (
            <li key={pet.id}>
              Name: {pet.petName}<br/>
              Breed: {pet.petBreed}<br/>
              Age: {pet.petAge}<br/>
              Description: {pet.petDescription}<br/>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
  )
  }

}
export default PetArrayDisplay;