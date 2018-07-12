import React, { Component } from 'react'
import firebase from '../firebase';
import PetSearchBar from '../SiteParts/PetSearchBar'
import PetCards from '../SiteParts/PetCards'
import Loading from '../Test/Loading'
import PetArrayDisplay from '../Test/PetArrayDisplay'
import DBTools from '../DBTools/DBTools'
import {PET_CONSTANTS} from '../constants'
import PetCard from '../SiteParts/PetCards'

class PetsOfTheWeek extends Component{

  constructor(props){
    super(props);
    this.petsOfTheWeek = [];
  }

  componentWillMount(){
    this.petsOfTheWeek = this.randomPets();
  }

  componentDidMount(props){
  }

  componentWillUnmount(){}

  randomPets(){
      let pets = new DBTools().populatePets()
      return this.fisherYates(pets, 3)
  }

  //Fisher-Yates implementation from
  //https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  fisherYates(myArray,nb_picks)
    {
    for (let i = myArray.length-1; i > 1  ; i--)
    {
        var r = Math.floor(Math.random()*i);
        var t = myArray[i];
        myArray[i] = myArray[r];
        myArray[r] = t;
        console.log(myArray)
    }
    console.log(myArray.length)
    console.log(myArray.slice(0,nb_picks))
    console.log(myArray)
    return myArray.slice(0,nb_picks);
}

    render(){
      return(
        <div>{
            <ul>
            {this.petsOfTheWeek.length > 0 &&
              this.petsOfTheWeek.map((pet) => {
                return (
                <div>
                      <PetCards pet={pet}/>
                </div>
                )
              })
            
            }
            </ul>
        }</div>
      )
    }

  }

  export default PetsOfTheWeek;
