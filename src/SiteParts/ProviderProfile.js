import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddressPaper from './ProviderParts/AddressPaper'
import DescriptionPaper from './ProviderParts/DescriptionPaper'
import EmailPaper from './ProviderParts/EmailPaper'
import HoursPaper from './ProviderParts/HoursPaper'
import PhonePaper from './ProviderParts/PhonePaper'
import PhotoPaper from './ProviderParts/PhotoPaper'

// const ProviderProfile = (props) => {
// return(<div>{props.match.params.petID}</div>)
// }

class ProviderProfile extends Component {
  render(){
    return(
      <div>
        <div class="homeHeader">
        <h1>PawPaws Pets</h1>
        <b>pawpawspets.org</b>

        </div>

      <div class="homeRow">
        <div class="homeMain">
          <PhotoPaper/>
          <DescriptionPaper/>
        </div>
        <div class="homeSide">
        <h2>Contact Us: </h2>
            <PhonePaper/>
            <br/>
            <EmailPaper/>
            <br/>
            <HoursPaper/>
            <br/>
            <AddressPaper/>
        </div>
      </div>
    </div>
    )
  }
}

export default ProviderProfile;
