//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ItemHolder from './ItemHolder';
import PetDisplay from './PetDisplay';
import firebase from '../firebase'
import AddPet from './AddPet'
import TestDBTools from './TestDBTools'
import PetArrayDisplay from './PetArrayDisplay'

class TestRouter extends Component {
    constructor(props){
      super(props);
      this.dbTools = new TestDBTools();
      
    }

    componentWillMount() {
    }

    render() {
      return (
        <div>
        <BrowserRouter>  
          <div className="wrap">
            <h2>Testing Ground</h2>
            <ul className="menu">
              <li><Link to={'/AddPet'}>Add Pet</Link></li>
              <li><Link to={'/PetArrayDisplay'}>Display All Pets</Link></li>
            </ul>
              <Route exact path="/AddPet"
              render={props =>
                <AddPet/>
              }/>
              <Route exact path="/PetArrayDisplay"
              render={props =>
                <PetArrayDisplay />
              }/>
              
          </div>
        </BrowserRouter>
        </div>
      );
    }
  }
  export default TestRouter;