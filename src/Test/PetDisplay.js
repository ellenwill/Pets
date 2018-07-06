//Displays an array of pet objects.
//This should be formatted for the cards.

//Conditional rendering: If you feed it a single pet, it will render
//just that pet. If you feed it an array, it will render the whole array.
//If you feed it both, it will render both.

import React, {Component} from 'react';
import TestDBTools from './TestDBTools';
import AddPet from './AddPet';

class PetDisplay extends Component{

  constructor(props){
    super(props);

    this.state= {
      //pets: props.pets,
      pet: props.pet,
      confirm: false,
      editMode: false,
    }
    //this.tools = new TestDBTools();
    this.delete = this.delete.bind(this)
    this.requestConfirmation = this.requestConfirmation.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleConfirm = this.toggleConfirm.bind(this)
  }

  generalPetDispay()
  {  }

  componentDidMount(){
    
  }
  componentWillMount(){
  }

  //Deletion routine
  requestConfirmation(){
    return <label>Are you Sure?<button onClick={this.delete}> Confirm Delete </button></label>
  }
  delete(){
    new TestDBTools().deletePet(this.state.pet)
    this.setState({confirm: false})
  }

  //Setters, essentially.
  toggleConfirm(){
    this.setState({confirm: true});
  }
  toggleEdit(){
    if (this.state.editMode === false) {this.setState({editMode: true})}
    else {this.setState({editMode: false})}
  }

  render(){
    return (
      <section>
        <div>
              Name: {this.state.pet.petName}<br/>
              Breed: {this.state.pet.petBreed}<br/>
              Age: {this.state.pet.petAge}<br/>
              Description: {this.state.pet.petDescription}<br/>
              {//Dog-specific
              this.state.pet.petSize && <div>Size: {this.state.pet.petSize}<br/></div>}
              {//Cat-specific
              this.state.pet.petHair && <div>Hair: {this.state.pet.petHair}<br/></div>}
              <button onClick={this.toggleEdit}> Edit {this.state.petName}</button>
              {!this.state.confirm ? <button onClick={this.toggleConfirm}>Delete</button> :
              this.requestConfirmation()}

              {this.state.editMode && <AddPet animalType={this.state.pet.animalType} pet={this.state.pet}/>}
        </div>
      </section>
  )
  }

}
export default PetDisplay;