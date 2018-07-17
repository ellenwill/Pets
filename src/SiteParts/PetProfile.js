import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProviderCards from './ProviderCards'

const PetProfile = (props) => {
  const tools = new DBTools();
  const pet = tools.getPetByID(props.match.params.petID)
  const petProvider = tools.getPetProviderByID(pet.petProviderID)
  const mailto = "mailto:" + petProvider.email + "?subject = I want to adopt " + pet.petName + "!"
return(
<div>
  <div>{//<PetDisplay pet={pet}/>
        }
  </div>

      <div class="homeHeader">
        <h1>Pet Name</h1>
        <p>{new DBTools().getPetByID(props.match.params.petID).petName}</p>
      </div>

    <div class="homeRow">
      <div class="homeMain">
        <center><Typography variant="display3" gutterBottom>{pet.petName}</Typography><br/>
        <img src={pet.photoURL} width={500}/></center><br/>
        <center>{pet.petDescription}</center><br/>
      </div>
      <div class="homeSide">
          Age: {pet.petAge}
          <br/>
          Breed: {pet.petBreed}
          <br/>
          etc.
          <br/>
          <a href={mailto} class="email"><Button size="large" color="primary">Adopt Me from the {petProvider.name}!</Button></a><br/>
          <ProviderCards petProvider={petProvider}/>
          
      </div>
    </div>
</div>

)
}

export default PetProfile;
