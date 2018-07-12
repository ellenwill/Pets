import React, { Component } from 'react'

const PetProfile = (props) => {
return(<div>{props.match.params.petID}</div>)
}

export default PetProfile;
