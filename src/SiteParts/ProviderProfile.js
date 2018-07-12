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
        <h1>PROVIDER NAME </h1>
        <p>Provider Email</p>

        </div>

      <div class="homeRow">
        <div class="homeMain">
          <PhotoPaper/>
          <DescriptionPaper/>
        </div>
        <div class="homeSide">
            <PhonePaper/>
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
