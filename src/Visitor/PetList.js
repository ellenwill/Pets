import React, { Component } from 'react'
import firebase from '../firebase';
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
      filters: {animalType:[],petBreed:[], Gender:[], Location:[]},
      /* {animalType:[dog,cat,other],petBreed:[doxie, lab, corgi], Gender:[female, male], Location:[Baltimore County, Baltimore City]} */
      petArray: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this) /* the function is now bound to component*/
  }

  componentDidMount(){
    let petArray = new TestDBTools().populatePets()
    this.setState({petArray: petArray})
  }

  componentWillUnmount(){}

  handleFilterChange(newFilter){
    console.log(newFilter)
    this.setState({filters:newFilter})
  }

    render(){
      return(
        <div>
        <PetSearchBar addFilter={this.handleFilterChange}/>
                <div class="flexCardContainer">
        {//!this.petArray ? <Loading/> && :

          this.state.petArray.filter(pet =>

            {if(this.state.filters.animalType && this.state.filters.animalType.length > 0)
              {
                if(!this.state.filters.animalType.includes(pet.animalType))
                {
                  return false;
                }
              }
            if(this.state.filters.petBreed && this.state.filters.petBreed.length > 0)
              {
                if(!this.state.filters.petBreed.includes(pet.petBreed))
                {
                  return false;
                }
              }
            if(this.state.filters.gender && this.state.filters.gender.length > 0)
              {
                if(!this.state.filters.gender.includes(pet.gender))
                {
                  return false;
                }
              }
            if(this.state.filters.Location && this.state.filters.Location.length > 0)
              {
                if(!this.state.filters.Location.includes(pet.Location))
                {
                  return false;
                }
              }
              return true;
            }
          ).map(pet => <PetCards pet={pet}/>)}
          </div>
        </div>
      )
    }

  }

  export default PetList;
