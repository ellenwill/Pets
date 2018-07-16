import React, { Component } from 'react'
import PetSearchBar from '../SiteParts/PetSearchBar'
import PetCards from '../SiteParts/PetCards'
import DBTools from '../DBTools/DBTools'

class PetList extends Component{

  constructor(props){
    super(props);
    this.state = {
      filters: {animalType:[],petBreed:[], gender:[], Location:[]},
      /* {animalType:[dog,cat,other],petBreed:[doxie, lab, corgi], Gender:[female, male], Location:[Baltimore County, Baltimore City]} */
      petArray: props.petArray || new DBTools().populatePets()
    }
    this.handleFilterChange = this.handleFilterChange.bind(this) /* the function is now bound to component*/
  }

  componentDidMount(props){
    //let petArray = new DBTools().populatePets()
    
    //this.setState({petArray: petArray})
  }

  componentWillUnmount(){}

  handleFilterChange(newFilter){
    this.setState({filters:newFilter})
  }

    render(){
      return(
        <div>
        <PetSearchBar addFilter={this.handleFilterChange}/>
                <div class="flexCardContainer">
        {//!this.petArray ? <Loading/> :

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
                if(!this.state.filters.Location.includes(pet.usstate))
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
