import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import DBTools from '../DBTools/DBTools'
import AddressPaper from './ProviderParts/AddressPaper'
import DescriptionPaper from './ProviderParts/DescriptionPaper'
import EmailPaper from './ProviderParts/EmailPaper'
import HoursPaper from './ProviderParts/HoursPaper'
import PhonePaper from './ProviderParts/PhonePaper'
import PhotoPaper from './ProviderParts/PhotoPaper'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PetCards from './PetCards'

const ProviderProfile = (props) => {

  const tools = new DBTools();
  const provider = tools.getPetProviderByID(props.match.params.petProviderID)
  const ourPets = tools.populatePets(props.match.params.petProviderID)
  const address = provider.street + ", " + provider.city + ", " + provider.usstate + " " + provider.zip

    return(
      <div>
        <div class="homeHeader">
        <h1>{provider.name}</h1>

        </div>

      <div class="homeRow">
        <div class="homeMain">
          <center><PhotoPaper photoURL={provider.photoURL}/> </center>
          <DescriptionPaper description={provider.description}/>
        </div>
        <div class="homeSide">

        <h2>Contact Us: </h2>

            <EmailPaper email={provider.email}/>

            <br/>
            <PhonePaper phoneNumber={provider.phoneNumber}/>
            <br/>
            <HoursPaper hours={provider.hours}/>

            <br/>
            <AddressPaper address={address}/>
        </div>
        <div style={{color:"#05349A", fontSize:"300%"}}>
        <center>  <b>Our Available Pets</b> </center>
        </div>
        <br/>
        <div class="flexCardContainer">
        {ourPets.map(pet => <PetCards pet={pet}/>)}
        </div>
      </div>
    </div>
    )
  }

export default ProviderProfile;
