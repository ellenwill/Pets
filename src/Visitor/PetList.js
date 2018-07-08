import React, { Component } from 'react'
import firebase from '../firebase';
// import PetCards from '../SiteParts/PetCards'
import PetSearchBar from '../SiteParts/PetSearchBar'

class PetList extends Component{

    render(){
      return(
        <div>
        <PetSearchBar/>

        </div>
      )
    }

  }

  export default PetList;
