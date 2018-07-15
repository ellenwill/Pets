import React, { Component } from 'react'
import firebase from '../firebase';
import ProviderCards from '../SiteParts/ProviderCards'
import PetProviderSearchBar from '../SiteParts/PetProviderSearchBar'
import DBTools from '../DBTools/DBTools'
import {STATES} from '../constants'

class PetProviderList extends Component{

  constructor(props){
    super(props);
    this.state = {
      filters: {usstate:[]},
      petProviderArray: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this) /* the function is now bound to component*/
  }

  componentDidMount(){
    let petProviderArray = new DBTools().populatePetProviders()
    this.setState({petProviderArray: petProviderArray})
  }

  componentWillUnmount(){}

  handleFilterChange(newFilter){
    console.log(newFilter)
    this.setState({filters:newFilter})
  }

    render(){
      return(
        <div>
        <PetProviderSearchBar addFilter={this.handleFilterChange}/>
        <div class="flexCardContainer">
        {//!this.petProviderArray ? <Loading/> && :

          this.state.petProviderArray.filter(petProvider =>

            {if(this.state.filters.usstate && this.state.filters.usstate > 0)
              {
                if(!this.state.filters.usstate.includes(petProvider.usstate))
                {
                  return false;
                }
              }
              return true;
            }
          ).map(petProvider => <ProviderCards petProvider={petProvider}/>)}
          </div>
        </div>
      )
    }

  }

  export default PetProviderList;
