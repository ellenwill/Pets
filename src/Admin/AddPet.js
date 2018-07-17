import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import {PET_CONSTANTS, EXISTING_PET_STATE} from '../constants'
import * as constants from '../constants'

class AddPet extends Component{

  constructor(props) {
    super(props);

    //Check if the pets object was passed. If it was, then
    //we're editing an existing pet and we need to populate its
    //properties. Otherwise, we want the 
    //default state of a pet object from the constants file.
    if (props.pet) {this.state = EXISTING_PET_STATE(props.pet)}
    else {this.state = PET_CONSTANTS.DEFAULT_PET_STATE}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillInfo = this.fillInfo.bind(this)
    this.submitter = new DBTools();
    this.petTypes = PET_CONSTANTS.ANIMAL_TYPES;
  }

  componentDidMount(props){
    
    //If the pet doesn't already exist, we can't have filled in its info.
    if (!this.state.petID)
    {
        this.setState(PET_CONSTANTS.DEFAULT_PET_STATE);  
    }
    else
    {
      this.setState(this.submitter.getPetByID(this.state.petID))
    }
  }

  fillInfo(info){
    this.setState(info)
  }

  componentWillMount(props)
  {

  }

  render(){
    return(
      <div  class="homeMain">
         <div>
         <p>
           <h1> Enter pet information here: </h1>
         </p>
         <section className='testForm'>
           <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            {this.petTypeMenu()}
            {this.state.animalType &&
            <div>
            <input type="text" name="petName" placeholder="Pet's Name" onChange={this.handleChange} value={this.state.petName}/><br/>
                  {this.genderMenu()}
                  {
                    this.breedsMenu()
                  }
            
                  {
                    //Dog-specific traits
                    this.state.animalType === 'Dog' &&
                    this.dogSpecificTraits()
                  }
                  {
                    //Cat-specific traits
                    this.state.animalType === 'Cat' &&
                    this.catSpecificTraits()
                  }
                  <br/>
            <input type="text" name="petAge" placeholder="Pet's Age" onChange={this.handleChange} value={this.state.petAge}/><br/>
            <input type="text" name="petDescription" placeholder="Additional Details" onChange={this.handleChange} value={this.state.petDescription}/><br/>
            <input type="text" name="photoURL" placeholder="Photo URL" onChange={this.handleChange} value={this.state.photoURL}/><br/>
            {!this.state.petID && <button> Add Pet </button>}
            {this.state.petID && <button> Update Pet </button>
            }
            </div>}
           </form>
           </section>
         </div>
       </div>
    )
  }

  //A menu to select the type of pet. It will auto-fill options from the array in constants.
  petTypeMenu(){
    return <div>
    <label><select name="animalType" onChange={this.handleChange} value={this.state.animalType}>
    {!this.state.animalType && <option> Animal Type </option>}
    { PET_CONSTANTS.ANIMAL_TYPES.map(value => <option value={value}>{value}</option>) }
    </select></label></div>
  }

  //See above.
  genderMenu(){
    return <div>
    <label><select name="gender" onChange={this.handleChange} value={this.state.gender}>
    {!this.state.gender && <option> Gender </option>}
    { PET_CONSTANTS.GENDER.map(value => <option value={value}>{value}</option>) }
    </select></label></div>
  }

  //Same as above, but this must be manually updated whenever a new type of animal is added.
  //It's stupid, but react won't let you loop through nested objects, and there's no usable
  //method to convert a variable name/reference plus string like PET_CONSTANTS + 'dog' into just a
  //variable name.
  breedsMenu(){
    var i;
    if (this.state.animalType === 'Dog'){
      i = PET_CONSTANTS.DOG_BREEDS}
    else if (this.state.animalType === 'Cat'){
      i = PET_CONSTANTS.CAT_BREEDS}
    else if (this.state.animalType === 'Other'){
      i = PET_CONSTANTS.OTHER_BREEDS}
    
    return <select name="petBreed" onChange={this.handleChange} value={this.state.petBreed}>
    {!this.state.petBreed && <option> Breed </option>}
    { i.map(value => <option value={value}>{value}</option>) }
    </select>
    }

  //Loops through the {animal type}-specific traits in constants.
  dogSpecificTraits(){
    let list = PET_CONSTANTS.ANIMAL_TRAITS.DOG_SPECIFIC_TRAITS;
    return <div><select name="petSize" onChange={this.handleChange} value={this.state.petSize}>
        {!this.state.petSize && <option> Size </option>}
        { list.Size.map(value => <option value={value}>{value}</option>) }
        </select>
    </div>
  }

  catSpecificTraits(){
    return <label>Hair: 
    <select name="petHair" onChange={this.handleChange}  value={this.state.petHair}>
    {!this.state.petSize && <option> Select </option>}
    <option value={'Short'}> Short </option>
    <option value={'Medium'}> Medium </option>
    <option value={'Long'}> Long </option>
    </select>
    </label>
  }

  //When something is changed in the forms, this rewrites the state of this.
  handleChange(e) {
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value,
    });
  }

  //When the button is clicked on the form, this method is called.
  handleSubmit(e) {
    e.preventDefault();
    //Submit the pet if it doesn't exist, otherwise update it.
    if (!this.state.petID){var key = this.submitter.addPet(this.state);
    this.setState(PET_CONSTANTS.DEFAULT_PET_STATE);
    }
    else {this.submitter.updatePet(this.state)
    this.props.onSubmit(e.target.value)}
    return key;
  }
}

export default AddPet