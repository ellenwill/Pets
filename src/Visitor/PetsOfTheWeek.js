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

  //Populates the full pet array, then calls a Fisher-Yates shuffler on the array.
  //The return value is an array of 3 (in this case) pet objects to be displayed.
  //Ideally, this array should be stored in the database, and updated once a week,
  //but I didn't know how to do that in the time remaining.
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

    //These three console logs are a prime example of just how terrible this language is.
    //console.log(myArray.length)
    //console.log(myArray.slice(0,nb_picks))
    //console.log(myArray)
    return myArray.slice(0,nb_picks);
  }

  render(){
    return(
      <div>
          {this.petsOfTheWeek.length > 0 &&
            this.petsOfTheWeek.map((pet) => {
              return (
              <div>
                    <PetCards pet={pet}/>
              </div>
              )
            })
        }</div>
      )
    }
  }

  export default PetsOfTheWeek;
