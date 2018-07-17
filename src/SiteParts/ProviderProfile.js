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

        <h1>PawPaws Pets</h1>
        <b>pawpawspets.org</b>

        <h1>{provider.name}</h1>
        <p><EmailPaper email={provider.email}/></p>

        </div>

      <div class="homeRow">
        <div class="homeMain">
          <PhotoPaper photoURL={provider.photoURL}/>
          <DescriptionPaper description={provider.description}/>
        </div>
        <div class="homeSide">

        <h2>Contact Us: </h2>
            <PhonePaper/>
            <br/>
            <EmailPaper/>
            <br/>
            <HoursPaper/>

            <PhonePaper phoneNumber={provider.phoneNumber}/>
            <br/>
            <HoursPaper hours={provider.hours}/>

            <br/>
            <AddressPaper address={address}/>
        </div>
      </div>
      Our Pets
      {ourPets.map(pet => <PetCards pet={pet}/>)}
    </div>
    )
  }

export default ProviderProfile;
