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
import PaypalRender from './SiteParts/PaypalRender'
import Home from './Visitor/Home'
import FAQ from './Visitor/FAQ'
import TestNavBar from './SiteParts/TestNavBar'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
      <div>
      {/*THIS WILL BE EVERYWHERE*/}
      <NavigationBar/>
            <TestNavBar/>
        <div> {/*these are every PAGE that goes on the site. If you want something that is on every page, add as a div around*/}
          <Route path='/Home' component={Home} />
          <Route path='/AddPet' component={AddPet} /> {/*for the admin to add new pets*/}
          <Route path='/AddPetProvider' component={AddPetProvider} /> {/*for the global admin to add new petProviders*/}
          <Route path='/PetList' component={PetList} /> {/*the pets that the visitor sees after selecting what kind of pet/ search*/}
          <Route path='/PetProviderList' component={PetProviderList} />
          <Route path='/LoginForm' component={LoginForm} />
          <Route path ='/ALoginForm' component={ALoginForm}/>
          <Route path='/TestRouter' component={TestRouter} />
          <Route path = '/PaypalRender' component={PaypalRender} />
          <Route path='/FAQ' component={FAQ}/>
        </div>
      </div>
      </BrowserRouter>
    )
  }

}


export default App;
