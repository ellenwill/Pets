import DBTools from '../DBTools/DBTools';
import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PetList from './PetList'
import MyPets from '../Admin/MyPets'
import AddPetsPaper from '../Admin/AddPetsPaper'



class Homev extends Component {

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
          <p>Admin.</p>

        </div>

      <div class="homeRow">
      <MyPets/>
      <br/>
        <div class="homeMain">
        <br/>

        </div>
        <div class="homeSide">

        <AddPetsPaper/>
        <br/>


        </div>
      </div>
      <div class="homeFooter">
        Boopyloop made for COSC412 at Towson University
      </div>
    </div>
    )
  }
}


export default Homev;
