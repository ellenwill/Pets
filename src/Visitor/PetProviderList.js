import React, { Component } from 'react'
import firebase from '../firebase';
import ProviderCards from '../SiteParts/ProviderCards'
import DBTools from '../DBTools/DBTools'
import {PET_CONSTANTS} from '../constants'

class PetProviderList extends Component{

    render(){
      return(
        <div>
        <ProviderCards pet={PET_CONSTANTS.DEFAULT_PET_STATE}/>

        </div>
      )
    }

  }

  export default PetProviderList;
