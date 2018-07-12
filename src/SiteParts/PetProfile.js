import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PetDisplay from '../Test/PetDisplay'

const PetProfile = (props) => {
return(
<div>
  <div>{props.match.params.petID}<PetDisplay pet={new DBTools().getPetByID(props.match.params.petID)}/></div>


      <div class="homeHeader">
        <h1>{props.match.params.petName}</h1>
      </div>

    <div class="homeRow">
      <div class="homeMain">
        Pic of pet
        Description of Pet
      </div>
      <div class="homeSide">
          Age
          <br/>
          Breed
          <br/>
          Etc
      </div>
    </div>
</div>

)
}

export default PetProfile;
