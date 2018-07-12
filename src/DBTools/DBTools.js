//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import {Component} from 'react'
import firebase from '../firebase'
import * as constants from '../constants'

class DBTools extends Component {
    constructor(props){
      super(props);
      //Items we may be required to store to pass around the DBTools object.
      //In general, you should not expect the DBTools to store things for you.
      this.state = {
          items: {},
          pets: [],
          pet: {}
        };

      //This is for test submissions, which you don't want contaminating the other references.
      this.itemsRef = firebase.database().ref('items');

      //The reference to the pet providers child of the database
      this.petProvidersRef = firebase.database().ref('petProviders');
      //The user child of the database
      this.usersRef = firebase.database().ref('users');

      //The top-level pets reference. No actual pets should go here -- they should be
      //categorized by their animal type.
      this.petsRef = firebase.database().ref('pets');

      //This is a place to store items that are "deleted".
      //Unused.
      this.removedItemsRef = firebase.database().ref('removedItems');
    }

    componentDidMount() {
      //Listeners. For example, this one should update the pets[] object of
      //an instance of DBTools whenever the data inside database pets child changes.
      //This is not actively used, it's as an example and may be needed in other components.
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

    //Returns a signal pet object with a specific ID (given as a string).
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

    //Returns an array of pet providers.
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

    //Returns a single pet provider based on its ID.
    populatePetProviders(petProviderID) {
      let newPetProvider = {};
      this.petProvidersRef.on('value', snapshot => {
        let petProviders = snapshot.val();
        for (let petProvider in petProviders) {
          //"petProvider" is the actual key for a pet child, e.g. LGnqMxecb_TSnm7E8wz
          //These are properties that might appear in the database entry.
          //These are essentially available search criteria.
            if (petProvider == petProviderID)
            {
              newPetProvider = constants.EXISTING_PET_STATE(petProviders[petProvider]);
            }
          }
        });
      return newPetProvider
    }

    //Returns a user given their userID.
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

    //Lifecycle
    componentWillMount(){
    }

    componentWillUnmount(){
      firebase.removeBinding(this.petsRef);
      firebase.removeBinding(this.itemsRef);
    }

    //Test method.
    addItem=(e)=> {
      e.preventDefault();
      this.itemsRef.push({
        item: this.todoItem.value, 
        completed: false     
      })
    }

    //Adds a pet to the database given a pet object with an animal type.
    //Requires the animal type and will not submit if the pet is missing it!
    addPet(petToBeAdded) {
      return this.petsRef.child(petToBeAdded.animalType).push(constants.EXISTING_PET_STATE(petToBeAdded));
    }

    //Updates a provided pet object
    updatePet(petToBeUpdated){
      this.petsRef.child(petToBeUpdated.animalType).child(petToBeUpdated.petID).update(constants.EXISTING_PET_STATE(petToBeUpdated));
    }

    //Deletes a pet with a provided ID. Used for testing only.
    deletePet (id) {
      let children = constants.PET_CONSTANTS.ANIMAL_TYPES
      this.petsRef.child(id).remove();
      for (let i = 0; i < children.length; i++)
        {
          this.petsRef.child(children[i]).child(id).remove();
        }
    }

    //Adds a petprovider to the database
    addPetProvider(petProviderToBeAdded) {
      return this.petProvidersRef.push(constants.EXISTING_PET_PROVIDER(petProviderToBeAdded));
    }

    //Updates a provided pet provider
    updatePetProvider(petProviderToBeUpdated){
      this.petProvidersRef.child(petProviderToBeUpdated).update(constants.EXISTING_PET_PROVIDER(petProviderToBeUpdated));
    }

    //Deletes a pet provider based on its ID.
    deletePetProvider (id) {
      this.petProvidersRef.child(id).remove();
    }

    //Adds a given user onject to the database, with properties filled in.
    addUserToDatabase(user){
      return this.usersRef.push(constants.EXISTING_USER(user));
    }

    //Updates a user object. Could be used for instance to set a user's access level.
    //Requires an existing user object.
    updateUserInDatabase(userToBeUpdated){
      this.usersRef.child(userToBeUpdated).update(constants.EXISTING_USER(userToBeUpdated));
    }

    //Sets the CURRENT_USER constant in the constants file to the user object retrieved
    //from the database with a given ID.
    setUser(userID){
      constants.SET_USER(this.getUserByID(userID));
    }

    //Was intending this to be a method to clone a stored database item into the removeditems ref.
    copyToRemoved(id)
    {
    }
    
  }
  export default DBTools;