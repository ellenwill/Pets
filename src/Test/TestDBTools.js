//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import firebase from '../firebase'
import AddPet from './AddPet'

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
      this.removedItems = firebase.database().ref('removedItems');
    }

    componentDidMount() {
      //listeners
      this.itemsRef.on('value', data=> {
        this.setState({
          items: data.val(),
        })
      })
      this.petsRef.on('value', data=> {
        this.setState({
          pets: data.val(),
        })
      })
    }

    componentWillMount(){
    }

    componentWillUnmount(){
      //firebase.removeBinding(this.petsRef);
      //firebase.removeBinding(this.itemsRef);
      //firebase.removeBinding(this.petsRef);
    }

    addItem=(e)=> {
      e.preventDefault();
      this.itemsRef.push({
        item: this.todoItem.value, 
        completed: false     
      })
    }

    fillInfo(petToBeAdded){
      this.state.pet = {
        animalType: petToBeAdded.state.animalType,
        petName: petToBeAdded.state.petName,
        petBreed: petToBeAdded.state.petBreed,
        petAge: petToBeAdded.state.petAge,
        petDescription: petToBeAdded.state.petDescription,
      }
      //Dogs
      if (petToBeAdded.state.animalType === 'Dog') {
          this.state.pet.petSize = petToBeAdded.state.petSize;
        }
      //Cats
      else if (petToBeAdded.state.animalType === 'Cat') {
        this.state.pet.petHair = petToBeAdded.state.petHair;
      }
    }
    addPet=(petToBeAdded)=> {
      this.fillInfo(petToBeAdded);
      return this.petsRef.child(petToBeAdded.state.animalType).push(this.state.pet);
    }

    updatePet(pet)
    {
      this.fillInfo();
      this.petsRef.update(this.state.pet);
    }

    completeItem=(id)=>{  
      this.itemsRef.update({
        [id]:{
          ...this.state.items[id], 
          completed: true      
        }
      })
    }

    deleteItem = (id) => {
      this.itemsRef.update({
        [id]: null
      })
    }

    deletePet = (pet) => {
      this.petsRef.update({
        [pet.id]: null
      })
    }

    moveTo(id)
    {
      //var newRef = firebase.database().ref(this.type);
      this.removedItems.push();
    }
  }
  export default TestDBTools;