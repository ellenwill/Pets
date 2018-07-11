//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import firebase from '../firebase'
import {PET_CONSTANTS, EXISTING_PET_STATE} from '../constants'

class DBTools extends Component {
    constructor(props){
      super(props);
      this.state = {
          items: {},
          pets: [],
          pet: {}
        };
      this.itemsRef = firebase.database().ref('items');
      this.petProvidersRef = firebase.database().ref('petProviders');
      this.usersRef = firebase.database().ref('users');
      this.petsRef = firebase.database().ref('pets');
      this.removedItemsRef = firebase.database().ref('removedItems');

      this.newPet = PET_CONSTANTS.DEFAULT_PET_STATE
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
                        || filters.includes(pets[pet].petGender)
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

    addPet(petToBeAdded) {
      return this.petsRef.child(petToBeAdded.animalType).push(EXISTING_PET_STATE(petToBeAdded));
    }

    updatePet(petToBeUpdated){
      this.petsRef.child(petToBeUpdated.animalType).child(petToBeUpdated.petID).update(EXISTING_PET_STATE(petToBeUpdated));
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

    addPetProvider(petProviderToBeAdded) {
      return this.petProvidersRef.child(petProviderToBeAdded).push(EXISTING_PET_STATE(petProviderToBeAdded));
    }

    updatePetProvider(petProviderToBeUpdated){
      this.petProvidersRef.child(petProviderToBeUpdated.animalType).child(petProviderToBeUpdated.petID).update(EXISTING_PET_STATE(petProviderToBeUpdated));
    }

    deletePetProvider (id) {
      this.petProvidersRef.child(id).remove();
    }

    

    copyToRemoved(id)
    {
    }
    
  }
  export default DBTools;