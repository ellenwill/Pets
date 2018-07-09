import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PayPalRender from '../SiteParts/PaypalRender'
import FAQ from './FAQ'
import PetList from './PetList'
import FindPetPaper from './HomeParts/FindPetPaper'
import PaypalPaper from './HomeParts/PaypalPaper'
import FAQPaper from './HomeParts/FAQPaper'
import AboutUsPaper from './HomeParts/AboutUsPaper'


class Home extends Component {
  render(){
    return(
      <div>

        <div class="homeHeader">
          <h1>ADOPET</h1>
          <p>A site to help you find your cuddle bug.</p>
        </div>

      <div class="homeRow">
        <div class="homeMain">
          <FindPetPaper/>
        </div>
        <div class="homeSide">
            <PaypalPaper/>
            <br/>
            <FAQPaper/>
            <br/>
            <AboutUsPaper/>
        </div>
      </div>
      <div class="homeFooter">
        Boopyloop made for COSC412 at Towson University
      </div>

    </div>
    )
  }
}


export default Home;
