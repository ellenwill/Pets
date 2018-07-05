import React, { Component } from 'react'
import firebase from '../firebase';
import TestDBTools from './TestDBTools'
import PetDisplay from './PetDisplay'
import { database } from 'firebase';

class AddPet extends Component{

  constructor() {
    super();
    this.state = {
      animalType: null,
      petName: '',
      petBreed: '',
      petAge: '',
      petDescription: '',

      petSize: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.submitter = new TestDBTools();
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

            <label>Animal Type: <select name="animalType" onChange={this.handleChange} >
                  {!this.state.animalType && <option> Select </option>}
                  <option value={'Dog'}> Dog </option>
                  <option value={'Cat'}> Cat </option>
                  <option value={'Other'}> Other </option>
                </select></label>
            {this.state.animalType &&
            <div>
            Name: <input type="text" name="petName" placeholder="What is the pet's name?" onChange={this.handleChange} value={this.state.petName}/><br/>
            <label>Breed:
                  {
                    this.state.animalType === 'Dog' &&
                    <select name="petBreed" onChange={this.handleChange} >
                    <option value={'Fuzzball'}> Fuzzball </option>
                    <option value={'Roly Poly'}> Roly Poly </option>
                    <option value={'Mutt'}> Mutt </option>
                    </select>
                  }
                  {
                    this.state.animalType === 'Cat' &&
                    <select name="petBreed" onChange={this.handleChange} >
                    <option value={'Shorty Fuzz'}> Shorty Fuzz </option>
                    <option value={'Extra Fuzzy'}> Extra Fuzzy </option>
                    <option value={'No Fuzzy'}> No Fuzzy at All </option>
                    </select>
                  }
                  {
                    this.state.animalType === 'Other' &&
                    <select name="petBreed" onChange={this.handleChange} >
                    <option value={'Bunny'}> Bunny </option>
                    <option value={'Tuttle'}> Tuttle </option>
                    <option value={'Birb'}> Birb </option>
                    </select>
                  }
            </label>
            {
                    //Dog-specific traits
                    this.state.animalType === 'Dog' &&
                    <label>Size: 
                    <select name="petSize" onChange={this.handleChange} >
                    <option value={'Small'}> Small </option>
                    <option value={'Medium'}> Medium </option>
                    <option value={'Large'}> Large </option>
                    </select>
                    </label>
                  }
                  <br/>
            <input type="text" name="petAge" placeholder="What is the pet's age?" onChange={this.handleChange} value={this.state.petAge}/><br/>
            <input type="text" name="petDescription" placeholder="Enter additional details." onChange={this.handleChange} value={this.state.petDescription}/><br/>
            <button> Add Pet </button>
            </div>}
           </form>
           </section>
         </div>
       </div>
    )
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
      animalType: null,
      petName: '',
      petBreed: '',
      petAge: '',
      petDescription: ''
    });
    return key;
  }
}

export default AddPet
