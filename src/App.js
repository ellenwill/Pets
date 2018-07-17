import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import NavigationBar from './SiteParts/NavigationBar'
import AddPet from './Admin/AddPet'
import AddPetProvider from './Admin/AddPetProvider'
import PetList from './Visitor/PetList'
import PetProviderList from './Visitor/PetProviderList'
import LoginForm from './Visitor/LoginForm'
import ALoginForm from './Admin/ALoginForm'
import TestRouter from './Test/TestRouter'
import Home from './Visitor/Home'
import FAQ from './Visitor/FAQ'
import TestNavBar from './SiteParts/TestNavBar'
import PetDisplay from './Test/PetDisplay'
import PetArrayDisplay from './Admin/PetArrayDisplay'
import PetProfile from './SiteParts/PetProfile'
import ProviderProfile from './SiteParts/ProviderProfile'
import * as constants from "./constants"

import Donate from "./SiteParts/VisualParts/Donate"

import DBTools from './DBTools/DBTools'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {

  constructor(){
    super()

    //Store the user, which is updated when they login (or log out)
    this.state=({
      user: constants.GET_USER() || {}
    })
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    new DBTools().initialDBCalls()
  }

  //The application is forced to update if someone logs in/out
  handleChange(){
    this.setState({user: constants.GET_USER()})
    this.forceUpdate()
  }

  render() {
    return(
      <BrowserRouter>
      <div>
      {/*THIS WILL BE EVERYWHERE*/}
        <NavigationBar user={this.user}/>

        <div> {/*these are every PAGE that goes on the site. If you want something that is on every page, add as a div around*/}
          <Route path='/Home' component={Home} />
          <Route path='/AddPet' component={AddPet} /> {/*for the admin to add new pets*/}
          <Route path='/AddPetProvider' component={AddPetProvider} /> {/*for the global admin to add new petProviders*/}
          <Route path='/PetList' component={PetList} /> {/*the pets that the visitor sees after selecting what kind of pet/ search*/}
          <Route path='/PetProviderList' component={PetProviderList} />
          <Route path='/LoginForm' component={LoginForm} onChange={this.handleChange}/>
          <Route path ='/ALoginForm' component={ALoginForm}/>
          <Route path='/TestRouter' component={TestRouter} />
          <Route path='/TestRouter' component={TestRouter} />  
          <Route path = '/PetDisplay' component={PetDisplay} />
          <Route path = '/PetArrayDisplay' component={PetArrayDisplay} />
          <Route path='/FAQ' component={FAQ}/>
          <Route path='/Donate' component={Donate}/>
          <Route path='/pet/:petID' component={PetProfile}/>
          <Route path='/petProvider/:petProviderID' component={ProviderProfile}/>
        </div>
      </div>
      </BrowserRouter>
    )
  }

}


export default App;
