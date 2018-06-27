import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  {/* Everything that's static in the page  
  constructor() {
    super();
    this.state = {
      {
        
      }
    }
  }
*/}
  
  render() {
    return (
      <div className="AppHeader">
        <header className="App-header">
          <div><h1 className="App-title">Welcome to the Pet App</h1></div>
        </header>
        <div>
        <p className="App-intro">
          <h1> Enter pet information here: </h1>
        </p>
        <section className='testForm'>
          <form onSubmit={this.handleSubmit}>
           <input type="text" name="petName" placeholder="What is the pet's name?" onChange={this.handleChange} value={this.state.petName}/>
           <input type="text" name="petBreed" placeholder="What is the pet's breed?" onChange={this.handleChange} value={this.state.petBreed}/>
           <input type="text" name="petAge" placeholder="What is the pet's age?" onChange={this.handleChange} value={this.state.petAge}/>
           <input type="text" name="petDescription" placeholder="Enter additional pet details." onChange={this.handleChange} value={this.state.petDescription}/>
           <button> Add Pet </button>
          </form>
          </section>
        </div>
      </div>
    );
  }
  constructor() {
  super();
  this.state = {
    petName: '',
    petBreed: '',
    petAge: '',
    petDescription: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
handleSubmit(e) {
  e.preventDefault();
  const petsRef = firebase.database().ref('pets');
  const pet = {
    petName: this.state.petName,
    petBreed: this.state.petBreed,
    petAge: this.state.petAge,
    petDescription: this.state.petDescription,
  }
  petsRef.push(pet);
  this.setState({
    petName: '',
    petBreed: '',
    petAge: '',
    petDescription: ''
  });
}
}


export default App;
