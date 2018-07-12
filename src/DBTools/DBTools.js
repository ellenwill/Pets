//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import firebase from '../firebase'
import * as constants from '../constants'

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
      this.userRef = firebase.database().ref('users');

      this.newPet = constants.PET_CONSTANTS.DEFAULT_PET_STATE
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
      for (let i = 0; i < constants.PET_CONSTANTS.ANIMAL_TYPES.length; i++){
        let type = constants.PET_CONSTANTS.ANIMAL_TYPES[i]
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
      //this.setState({pets: newPets,});
      return newPets
    }

    getPetByID(petID) {
      let newPet = {};
      for (let i = 0; i < constants.PET_CONSTANTS.ANIMAL_TYPES.length; i++){
        let type = constants.PET_CONSTANTS.ANIMAL_TYPES[i]
        this.petsRef.child(type).on('value', snapshot => {
        let pets = snapshot.val();
        for (let pet in pets) {

          //"Pet" is the actual key for a pet child, e.g. LGnqMxecb_TSnm7E8wz
          //These are properties that might appear in the database entry.
          //These are essentially available search criteria.
          if (pet == petID)
              
            {
              newPet = constants.EXISTING_PET_STATE(pets[pet]);
              //console.log(newPet)
            }
          }
        });
      }
      return newPet
    }

    populatePetProviders(filters) {
      let newPetProviders = [];
      this.petProvidersRef.on('value', snapshot => {
        let petProviders = snapshot.val();
        for (let petProvider in petProviders) {
          //"petProvider" is the actual key for a pet child, e.g. LGnqMxecb_TSnm7E8wz
          //These are properties that might appear in the database entry.
          //These are essentially available search criteria.
            if (
                !filters || filters.includes(petProvider)
                         || filters.includes(petProviders[petProvider].name)
                         || filters.includes(petProviders[petProvider].location.city)
                        //Etc.
                )
                    
            {
              petProviders[petProvider].petProviderID = petProvider
              newPetProviders.push(petProviders[petProvider]);
            }
          }
        });
      //this.setState({pets: newPetProviders,});
      return newPetProviders
    }

    getUserByID(userID) {
      let newUser = {};
      this.usersRef.on('value', snapshot => {
      let users = snapshot.val();
      for (let user in users) {
        if (user == userID)
              
            {
              newUser = constants.EXISTING_USER(users[user]);
              //console.log(newUser)
            }
          }
        });
      return newUser
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
      return this.petsRef.child(petToBeAdded.animalType).push(constants.EXISTING_PET_STATE(petToBeAdded));
    }

    updatePet(petToBeUpdated){
      this.petsRef.child(petToBeUpdated.animalType).child(petToBeUpdated.petID).update(constants.EXISTING_PET_STATE(petToBeUpdated));
    }

    deletePet (id) {
      let children = constants.PET_CONSTANTS.ANIMAL_TYPES
      this.petsRef.child(id).remove();
      for (let i = 0; i < children.length; i++)
        {
          this.petsRef.child(children[i]).child(id).remove();
        }
    }

    addPetProvider(petProviderToBeAdded) {
      return this.petProvidersRef.push(constants.EXISTING_PET_PROVIDER(petProviderToBeAdded));
    }

    updatePetProvider(petProviderToBeUpdated){
      this.petProvidersRef.child(petProviderToBeUpdated).update(constants.EXISTING_PET_PROVIDER(petProviderToBeUpdated));
    }

    deletePetProvider (id) {
      this.petProvidersRef.child(id).remove();
    }

    addUserToDatabase(user){
      return this.usersRef.push(constants.EXISTING_USER(user));
    }

    updateUserInDatabase(userToBeUpdated){
      this.usersRef.child(userToBeUpdated).update(constants.EXISTING_USER(userToBeUpdated));
    }

    setUser(userID){
      constants.SET_USER(this.getUserByID(userID));
    }

    copyToRemoved(id)
    {
    }
    
  }
  export default DBTools;