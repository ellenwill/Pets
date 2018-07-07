//Displays an array of pet objects.
//This should be formatted for the cards.

//Conditional rendering: If you feed it a single pet, it will render
//just that pet. If you feed it an array, it will render the whole array.
//If you feed it both, it will render both.

import React, {Component} from 'react';
import TestDBTools from './TestDBTools';
import AddPet from './AddPet';
import {PET_CONSTANTS} from '../constants'

class PetDisplay extends Component{

  constructor(props){
    super(props);

    this.state= {
      //pets: props.pets,
      pet: props.pet,
      confirm: false,
      editMode: false,
    }
    this.delete = this.delete.bind(this)
    this.requestConfirmation = this.requestConfirmation.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleConfirm = this.toggleConfirm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount(props){
    if (this.props.pet){
      this.state.pet = this.props.pet
      //this.setState({pet.petID: props.petID})
      //console.log(this.state.pet.petID)
    }
  }

  componentWilMount(props){
    if (!props)
      this.setState({pet: PET_CONSTANTS.DEFAULT_PET_STATE})
  }

  //Deletion routine
  requestConfirmation(){
    return <label>Are you Sure?<button onClick={this.delete}> Confirm Delete </button></label>
  }
  delete(){
    new TestDBTools().deletePet(this.state.pet.petID)
    this.setState({confirm: false})
    this.forceUpdate()
  }

  //Setters, essentially.
  toggleConfirm(){
    this.setState({confirm: true});
    console.log(this.state.pet.petID)
  }
  toggleEdit(){
    if (this.state.editMode === false) {this.setState({editMode: true})}
    else {this.setState({editMode: false})}
  }

  handleChange(e){
    this.setState({editMode: false})
  }

  render(props){
    return (
      <section>
        <div>
              { this.state &&
              <div>
              {this.state.pet.photoURL && <img src={this.state.pet.photoURL} width={200}/>}<br/>
              Name: {this.state.pet.petName}<br/>
              Breed: {this.state.pet.petBreed}<br/>
              Age: {this.state.pet.petAge}<br/>
              Description: {this.state.pet.petDescription}<br/>
              {//Dog-specific
              this.state.pet.petSize && <div>Size: {this.state.pet.petSize}<br/></div>}
              {//Cat-specific
              this.state.pet.petHair && <div>Hair: {this.state.pet.petHair}<br/></div>}

              <button onClick={this.toggleEdit}> Edit </button>
              {!this.state.confirm ? <button onClick={this.toggleConfirm}>Delete</button> :
              this.requestConfirmation()}
              
              {this.state.editMode && <AddPet petID={this.state.pet.petID} pet={this.state.pet} onSubmit={this.handleChange}/>}
            </div>}
        </div>
      </section>
  )
  }

}
export default PetDisplay;