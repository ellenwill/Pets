import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PayPalRender from '../SiteParts/PaypalRender'
import FAQ from './FAQ'
import PetList from './PetList'


class Home extends Component {
  render(){
    return(
      <div>
      <Link to = '/FAQ' > Pet Care </Link>
      <Link to = 'PetList'> Find a Pet </Link>
      <Link to = '/PayPalRender' > Paypal </Link>
      And a little about us section
      </div>
    )
  }
}


export default Home;
