import React, { Component } from 'react'
import TestDBTools from './TestDBTools'
import {PET_CONSTANTS} from '../constants'

class AddPet extends Component{

  constructor(props) {
    super(props);
    this.state = {
      petID: props.petID,    //Pet already exists.
      animalType: props.animalType,
      petName: props.petName,
      petBreed: props.petBreed,
      petAge: props.petAge,
      petDescription: props.petDescription,

      //Dog-specific
      petSize: props.petSize,

      //Cat-specific
      petHair: props.petHair,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submitter = new TestDBTools();
    this.petTypes = this.submitter.databaseChildren('pets');
    this.concat = this.concat.bind(this)
  }

  componentDidMount(props){
    //If the pet doesn't already exist, we can't have filled in its info.
    if (!this.state.petID)
    {
      this.setState(PET_CONSTANTS.DEFAULT_PET_STATE);  
    }
  }

  render(){
    return(
      <div className="AppHeader">
         <div>
         <p className="App-intro">
           <h1> Enter pet information here: </h1>
         </p>
         <section className='testForm'>
           <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            {this.petTypeMenu()}
            {this.state.animalType &&
            <div>
            Name: <input type="text" name="petName" placeholder="What is the pet's name?" onChange={this.handleChange} value={this.state.petName}/><br/>
            <label>Breed:
                  {
                    this.breedsMenu()
                  }
            </label>
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
            <input type="text" name="petAge" placeholder="What is the pet's age?" onChange={this.handleChange} value={this.state.petAge}/><br/>
            <input type="text" name="petDescription" placeholder="Enter additional details." onChange={this.handleChange} value={this.state.petDescription}/><br/>
            {!this.state.petID && <button> Add Pet </button>}
            {this.state.petID && <button> Update Pet </button>}
            </div>}
           </form>
           </section>
         </div>
       </div>
    )
  }

  petTypeMenu(){
    return <div>
    <label>Animal Type: <select name="animalType" onChange={this.handleChange} value={this.state.animalType}>
    {!this.state.animalType && <option> Select </option>}
    { PET_CONSTANTS.ANIMAL_TYPES.map(value => <option value={value}>{value}</option>) }
    </select></label></div>
  }

  breedsMenu(){
    var i;
    if (this.state.animalType === 'Dog'){
      i = PET_CONSTANTS.DOG_BREEDS}
    else if (this.state.animalType === 'Cat'){
      i = PET_CONSTANTS.CAT_BREEDS}
    else if (this.state.animalType === 'Other'){
      i = PET_CONSTANTS.OTHER_BREEDS}
    
    return <select name="petBreed" onChange={this.handleChange} value={this.state.petBreed}>
    {!this.state.petBreed && <option> Select </option>}
    { i.map(value => <option value={value}>{value}</option>) }
    </select>
    }

  dogSpecificTraits(){
    let list = PET_CONSTANTS.ANIMAL_TRAITS.DOG_SPECIFIC_TRAITS;
    return <div>{ Object.keys(list).map((key, i) => 
      <label>{key}:<span> </span>
        <select name={key} onChange={this.handleChange}  value={this.state.key}>
        {!this.state.key && <option> {key} </option>}
        {//Object.values(PET_CONSTANTS.ANIMAL_TRAITS).map(value => <option value={value}>{value}</option>)
        }
        </select>
      </label>
    )}</div>
  }
  
  concat(obj, str){
    let newVarName = this[obj + '.Size']
    console.log(obj, str)
    return newVarName
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

  handleChange(e) {
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    //Submit the pet if it doesn't exist, otherwise update it.
    if (!this.state.petID){var key = this.submitter.addPet(this);
    e.preventDefault();
    this.setState(PET_CONSTANTS.DEFAULT_PET_STATE);
    }
    else {this.submitter.updatePet(this)
    this.props.onSubmit(e.target.value)}
    return key;
  }
}

export default AddPet