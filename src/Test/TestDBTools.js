//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import firebase from '../firebase'
import PetDisplay from './PetDisplay'

class TestDBTools extends Component {
    constructor(props){
      super(props);
      this.state = {
          items: {},
          pets: [],
        };
      this.itemsRef = firebase.database().ref('items');
      this.usersRef = firebase.database().ref('users');
      this.petsRef = firebase.database().ref('pets');
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

    addPet=(petToBeAdded)=> {
      const pet = {
        petName: petToBeAdded.state.petName,
        petBreed: petToBeAdded.state.petBreed,
        petAge: petToBeAdded.state.petAge,
        petDescription: petToBeAdded.state.petDescription,
      }
      return this.petsRef.push(pet);
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

    deletePet = (id) => {
      this.petsRef.update({
        [id]: null
      })
    }
  }
  export default TestDBTools;