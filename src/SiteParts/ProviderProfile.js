import React, { Component } from 'react'

const ProviderProfile = (props) => {
return(<div>{props.match.params.petID}</div>)
}

export default ProviderProfile;
