import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import PetDisplay from '../Test/PetDisplay'

const PetProfile = (props) => {
return(<div>{props.match.params.petID}<PetDisplay pet={new DBTools().getPetByID(props.match.params.petID)}/></div>)
}

export default PetProfile;
