import React, { Component } from 'react'
import firebase from '../firebase';
// import PetCards from '../SiteParts/PetCards'
import PetSearchBar from '../SiteParts/PetSearchBar'
import PetCards from '../SiteParts/PetCards'
import Loading from '../Test/Loading'
import PetArrayDisplay from '../Test/PetArrayDisplay'
import TestDBTools from '../Test/TestDBTools'
import {PET_CONSTANTS} from '../constants'

class PetList extends Component{

  constructor(props){
    super(props);
    this.state = {
      filters: props.filters,
      petArray: []
    }
  }

  componentDidMount(){
    let petArray = new TestDBTools().populatePets()
    this.setState({petArray: petArray})
  }

  componentWillUnmount(){}


    render(){
      return(
        <div>
        <PetSearchBar/>
        {//!this.petArray ? <Loading/> && :
          this.state.petArray.map(pet => <PetCards pet={pet}/>)}

        </div>
      )
    }

  }

  export default PetList;
