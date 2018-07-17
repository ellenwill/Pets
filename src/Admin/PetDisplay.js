//Displays an array of pet objects.
//This should be formatted for the cards.

//Conditional rendering: If you feed it a single pet, it will render
//just that pet. If you feed it an array, it will render the whole array.
//If you feed it both, it will render both.

import React, {Component} from 'react';
import DBTools from '../DBTools/DBTools';
import AddPet from '../Admin/AddPet';
import {PET_CONSTANTS} from '../constants'

class PetDisplay extends Component{

  constructor(props){
    super(props);

    this.state= {
      //pets: props.pets,
      pet: props.pet,
      confirm: false,
      editMode: false,
      deleted: false,
      editedPet: {},
    }
    this.delete = this.delete.bind(this)
    this.requestConfirmation = this.requestConfirmation.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleConfirm = this.toggleConfirm.bind(this)
    //this.handleChange = this.handleChange.bind(this)
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

  componentDidUpdate(){
  }

  //Deletion routine
  requestConfirmation(){
    return <label>Are you Sure?<button onClick={this.delete}> Confirm Delete </button></label>
  }
  delete(){
    new DBTools().deletePet(this.state.pet.petID)
    this.setState({deleted: true})
  }

  //Setters, essentially.
  toggleConfirm(){
    this.setState({confirm: true});
  }

  //If they click "edit pet," this will display the edit form instead of the stuff pulled from the database.
  //They can keep editing and resubmitting, and it'll keep working, but the form will be what's displayed until
  //they refresh what pets they're viewing
  toggleEdit(){
    if (this.state.editMode === false) {this.setState({editMode: true})}
    //else {this.setState({editMode: false})}
  }

  //Don't seem to need to actually call it this.
  //handleChange(){
  //  this.toggleEdit()
  //}

  editForm(petID, pet){
    return <AddPet petID={pet.petID} pet={pet} onSubmit={this.toggleEdit}
    />
  }

  render(props){
    return (
      <section>
        <div>
          {//Display only if not deleted.
          }
          {!this.state.deleted && <div>
              { this.state &&
              <div>
              {this.state.pet.photoURL && <img src={this.state.pet.photoURL} width={200}/>}<br/>
              {!this.state.editMode && <div> Name: {this.state.pet.petName}<br/>
              Breed: {this.state.pet.petBreed}<br/>
              Age: {this.state.pet.petAge}<br/>
              Description: {this.state.pet.petDescription}<br/>
              {//Dog-specific
              this.state.pet.petSize && <div>Size: {this.state.pet.petSize}<br/></div>}
              {//Cat-specific
              this.state.pet.petHair && <div>Hair: {this.state.pet.petHair}<br/></div>}

              {
                <button onClick={this.toggleEdit}> Edit </button>
              }
              {
                //Display a button to delete and request confirmation when used.
              }
              {!this.state.confirm ? <button onClick={this.toggleConfirm}>Delete</button> :
              this.requestConfirmation()
              }
              </div>}
              {
                //Show the edit form (acutally the "AddPet" form, but already filled in)
              }
              {
                this.state.editMode && this.editForm(this.state.pet.petID, this.state.pet)
              }
            </div>}
          </div>}
        </div>
      </section>
  )
  }

}
export default PetDisplay;
