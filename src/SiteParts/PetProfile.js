import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProviderCards from './ProviderCards'
import Paper from '@material-ui/core/Paper';

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
        <h1><p>{new DBTools().getPetByID(props.match.params.petID).petName}</p></h1>
      </div>

    <div class="homeRow">
      <div class="homeMain">
        <center>
        <img src={pet.photoURL} width={500}/></center><br/>
        <b><center>{pet.petDescription}</center></b><br/>
      </div>
      <div class="homeSide">
      <Paper>
          <b><div style={{color:"#05349A"}}>Age: {pet.petAge} </div></b>
          <br/>
          <b><div style={{color:"#05349A"}}>Breed: {pet.petBreed} </div></b>
          <br/>
          <b><div style={{color:"#05349A"}}>Gender: {pet.gender} </div></b>
      </Paper>
          <br/>
          <center><a href={mailto} class="email"><Button size="large" color="primary">Adopt Me from the {petProvider.name}!</Button></a></center><br/>
          <center><ProviderCards petProvider={petProvider}/></center>

      </div>
    </div>
</div>

)
}

export default PetProfile;
