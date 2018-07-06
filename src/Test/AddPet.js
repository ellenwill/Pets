import React, { Component } from 'react'
import firebase from '../firebase';
import TestDBTools from './TestDBTools'
import PetDisplay from './PetDisplay'
import { database } from 'firebase';

class AddPet extends Component{

  constructor(props) {
    super(props);
    this.state = {
      key: props.key,    //Pet already exists.
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
  }

  componentDidMount(props){

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
                    this.state.animalType === 'Dog' &&
                    this.dogBreeds()
                  }
                  {
                    this.state.animalType === 'Cat' &&
                    this.catBreeds()
                  }
                  {
                    this.state.animalType === 'Other' &&
                    this.otherBreeds()
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
            {!this.state.key && <button> Add Pet </button>}
            {this.state.key && <button> Update Pet </button>}
            </div>}
           </form>
           </section>
         </div>
       </div>
    )
  }

  petTypeMenu(){
    return <div>
      <label>Animal Type: <select name="animalType" onChange={this.handleChange} >
    {!this.state.animalType && <option> Select </option>}
    <option value={'Dog'}> Dog </option>
    <option value={'Cat'}> Cat </option>
    <option value={'Other'}> Other </option>
    </select></label></div>
  }

  dogBreeds(){
    return <select name="petBreed" onChange={this.handleChange} >
    {!this.state.petBreed && <option> Select </option>}
    <option value={'Fuzzball'}> Fuzzball </option>
    <option value={'Roly Poly'}> Roly Poly </option>
    <option value={'Mutt'}> Mutt </option>
    </select>
  }

  catBreeds(){
    return <select name="petBreed" onChange={this.handleChange} >
    {!this.state.petBreed && <option> Select </option>}
    <option value={'Tortie'}> Tortie </option>
    <option value={'Cowico'}> Cowico </option>
    <option value={'Siamese'}> Siamese </option>
    </select>
  }

  otherBreeds(){
    return <select name="petBreed" onChange={this.handleChange} >
    {!this.state.petBreed && <option> Select </option>}
    <option value={'Bunny'}> Bunny </option>
    <option value={'Tuttle'}> Tuttle </option>
    <option value={'Birb'}> Birb </option>
    </select>
  }

  dogSpecificTraits(){
    return <label>Size: 
    <select name="petSize" onChange={this.handleChange} >
    {!this.state.petSize && <option> Select </option>}
    <option value={'Small'}> Small </option>
    <option value={'Medium'}> Medium </option>
    <option value={'Large'}> Large </option>
    </select>
    </label>
  }

  catSpecificTraits(){
    return <label>Hair: 
    <select name="petHair" onChange={this.handleChange} >
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
    e.preventDefault();
    var key = this.submitter.addPet(this);
    this.setState({
      //animalType: null,   //Commented out since it does dumb things to the form otherwise.
      petName: '',
      petBreed: '',
      petAge: '',
      petDescription: '',

      //Dog-specific
      petSize: '',
      petHair: '',
    });
    return key;
  }
}

export default AddPet