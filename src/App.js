import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import { BrowserRouter, Route } from 'react-router-dom'
import AddPet from './Admin/AddPet'
import PetList from './Visitor/PetList'
import AdminLogin from './Admin/Login'
import VisitorLogin from './Visitor/Login'

class App extends Component {

  render() {
    return(
      <div>
      THIS WILL BE EVERYWHERE
      <BrowserRouter> //these are every PAGE that goes on the site. If you want something that is on every page, add as a div around
        <Route path='/addPet' component={AddPet} /> //for the admin to add new pets
        <Route path='/pets' component={PetList} /> //the pets that the visitor sees after selecting what kind of pet/ search
        <Route path='/adminLogin' component={AdminLogin} /> //the page an admin goes to to login
        <Route path='/vistorLogin' component={VisitorLogin} />
      </BrowserRouter>
      </div>
    )
  }

}


export default App;
