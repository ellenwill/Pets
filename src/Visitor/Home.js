import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-ro
import FAQ from './FAQ'
import PetList from './PetList'
import FindPetPaper from './HomeParts/FindPetPaper'
import PaypalPaper from './HomeParts/PaypalPaper'
import FAQPaper from './HomeParts/FAQPaper'
import AboutUsPaper from './HomeParts/AboutUsPaper'
import PetsOfTheWeekPaper from './HomeParts/PetsOfTheWeekPaper'
import DBTools from '../DBTools/DBTools';
import PetCards1 from '../SiteParts/VisualParts/PetCards1'
import PetCards2 from '../SiteParts/VisualParts/PetCards2'
import PetCards3 from '../SiteParts/VisualParts/PetCards3'
import Donate from '../SiteParts/VisualParts/Donate'


class Home extends Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  handleChange(){
    this.setState({loaded: true})
  }

  render(){
    return(
      <div>
        <div class="homeHeader">
          <h1>ADOPET</h1>
          <p>A site to help you find your cuddle bug.</p>
        </div>

      <div class="homeRow">
        <div class="homeMain">
          <div class="flexCardContainer">
            <PetsOfTheWeekPaper/>
          </div>
        <br/>
          <FindPetPaper/><br/>
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
