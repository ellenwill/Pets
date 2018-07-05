//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ItemHolder from './ItemHolder';
//import PetHolder from './PetHolder';
import PetDisplay from './PetDisplay';
import firebase from '../firebase'
import AddPet from './AddPet'

class TestSubmit extends Component {
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
      this.populatePets();
    }

    populatePets(){
      this.petsRef.on('value', snapshot => {
        
        let pets = snapshot.val();
        let newState = [];
        for (let pet in pets) {
          newState.push({
            id: pet,
            petName: pets[pet].petName,
            petBreed: pets[pet].petBreed,
            petAge: pets[pet].petAge,
            petDescription: pets[pet].petDescription,
          });
        }
        this.setState({
          pets: newState
        });
      });
    }

    componentWillMount(){
      this.itemsRef.on('value', data=> {
        this.setState({
          items: data.val(),
        })
      })
      this.petsRef.on('value', data=> {
        this.setState({
          items: data.val(),
        })
      })
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

    render() {
      return (
        <div>
        <BrowserRouter>  
          <div className="wrap">
            <h2>A simple todo app</h2>
            <ul className="menu">
              <li><Link to={'/'}>To do</Link></li>
              <li><Link to={'/completed'}>Completed</Link></li>
              <li><Link to={'/AddPet'}>Add Pet</Link></li>
              <li><Link to={'/DisplayPets'}>Display Pets</Link></li>
            </ul>
            <Route exact path="/"
              render={props => 
                <ItemHolder  
                  items={this.state.items} 
                  done={false}
                  action={this.completeItem}
                  addItem={this.addItem}
                  inputRef={el => this.todoItem = el}
                  /> 
              }/>
            <Route exact path="/completed" 
              render={props => 
                <ItemHolder  
                  items={this.state.items} 
                  done={true}
                  action={this.deleteItem}
                  /> 
              }/>
              <Route exact path="/AddPet"
              render={props =>
                <AddPet/>
              }/>
              <Route exact path="/DisplayPets"
              render={props =>
                <PetDisplay pets={this.state.pets}/>
              }/>
              
          </div>
        </BrowserRouter>
        </div>
      );
    }
  }
  export default TestSubmit;