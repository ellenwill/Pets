import React, { Component } from 'react'
import firebase from '../firebase';
import PetCards from '../SiteParts/PetCards'

class PetList extends Component{

    render(){
      return(
        <div>
        <PetCards/>
        </div>
      )
    }

  }

  export default PetList;
