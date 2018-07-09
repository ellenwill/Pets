//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import firebase from '../firebase'
import {PET_CONSTANTS} from '../constants'

class TestDBTools extends Component {
    constructor(props){
      super(props);
      this.state = {
          items: {},
          pets: [],
          pet: {}
        };
      this.itemsRef = firebase.database().ref('items');
      this.usersRef = firebase.database().ref('users');
      this.petsRef = firebase.database().ref('pets');
      this.removedItemsRef = firebase.database().ref('removedItems');

      this.newPet = PET_CONSTANTS.DEFAULT_PET_STATE
      this.fillInfo = this.fillInfo.bind(this)
    }

    componentDidMount() {
      //listeners
      this.petsRef.on('value', data=> {
        this.setState({
          pets: data.val(),
        })
      })
    }

    /**
     * Populates an array of pets from the database based on filtering criteria.
     * Stores the result in this
     * @param {*} filters , an array of strings (including petIDs)
     */
    populatePets(filters) {
      let newPets = [];
      for (let i = 0; i < PET_CONSTANTS.ANIMAL_TYPES.length; i++){
        let type = PET_CONSTANTS.ANIMAL_TYPES[i]
        this.petsRef.child(type).on('value', snapshot => {
        let pets = snapshot.val();
        for (let pet in pets) {

          //"Pet" is the actual key for a pet child, e.g. LGnqMxecb_TSnm7E8wz
          //These are properties that might appear in the database entry.
          //These are essentially available search criteria.
          if (
                !filters || filters.includes(pet)
                        || filters.includes(pets[pet].petName)
                        || filters.includes(pets[pet].petBreed)
                        || filters.includes(pets[pet].petAge)
                        || filters.includes(pets[pet].petSize)
                        || filters.includes(pets[pet].petHair)
                        //Etc.
                )
              
            {
              //console.log(pet)
              pets[pet].petID = pet       
              newPets.push(pets[pet]);
            }
        }
      });
    }
    this.setPets(newPets)
    return newPets
    }

    setPets(newPets){
      this.setState({
        pets: newPets,
      });
    }

    componentWillMount(){
    }

    componentWillUnmount(){
      firebase.removeBinding(this.petsRef);
      firebase.removeBinding(this.itemsRef);
    }

    addItem=(e)=> {
      e.preventDefault();
      this.itemsRef.push({
        item: this.todoItem.value, 
        completed: false     
      })
    }

    //This is to enforce uniformity of entries.
    fillInfo(pet){
      this.state.pet = {
        photoURL: pet.state.photoURL,
        animalType: pet.state.animalType,
        petName: pet.state.petName,
        petBreed: pet.state.petBreed,
        petAge: pet.state.petAge,
        petDescription: pet.state.petDescription,
      }
      //Dogs
      if (pet.state.animalType === 'Dog') {
          this.state.pet.petSize = pet.state.petSize;
        }
      //Cats
      else if (pet.state.animalType === 'Cat') {
        this.state.pet.petHair = pet.state.petHair;
      }
      this.setState({})
    }
    addPet(petToBeAdded) {
      this.fillInfo(petToBeAdded);
      return this.petsRef.child(petToBeAdded.state.animalType).push(this.state.pet);
    }

    updatePet(petToBeUpdated){
      this.fillInfo(petToBeUpdated);
      this.petsRef.child(petToBeUpdated.state.animalType).child(petToBeUpdated.state.petID).update(this.state.pet);
    }

    deletePet (id) {
      console.log(id)
      let children = PET_CONSTANTS.ANIMAL_TYPES
      this.petsRef.child(id).remove();
      for (let i = 0; i < children.length; i++)
        {
          this.petsRef.child(children[i]).child(id).remove();
        }
    }

    copyToRemoved(id)
    {
    }
    
  }
  export default TestDBTools;