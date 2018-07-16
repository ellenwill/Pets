import React, { Component } from 'react'
import firebase from '../firebase';
import ProviderCards from '../SiteParts/ProviderCards'
import PetProviderSearchBar from '../SiteParts/PetProviderSearchBar'
import DBTools from '../DBTools/DBTools'
import {STATES} from '../constants'
import Loading from '../Test/Loading'

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
    this.setState({filters:newFilter})
  }

    render(){
      return(
        <div>
        <PetProviderSearchBar addFilter={this.handleFilterChange}/>
                <div class="flexCardContainer">
        {//!this.petArray ? <Loading/> :

          this.state.petProviderArray.filter(petProvider =>
            {if(this.state.filters.Location && this.state.filters.Location.length > 0)
              {
                if(!this.state.filters.Location.includes(petProvider.usstate))
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

