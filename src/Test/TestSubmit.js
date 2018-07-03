//This for some of the basic code: https://dev.to/aurelkurtula/creating-an-app-with-react-and-firebase---part-one-814
//Explanations of child('thing'), snap, thingRef, snap.val(), etc. https://www.youtube.com/watch?v=p4XTMvagQ2Q

import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ItemHolder from './ItemHolder'
import firebase from '../firebase'

class TestSubmit extends Component {
    state = {
      items: {
        1123: {
          item: 'item one',
          completed: false
        },
        2564321: {
          item: 'item two',
          completed: true
        },
        pets: [],
      }
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child('cosc412-pets');
        const petRef = rootRef.child('pets');

        petRef.on('value', snap =>
                this.setState({
                    pets: snap.val(),
                }),
            )
    }

    completeItem=(id)=>{
        let items =   {
            ...this.state.items, 
            [id]: {...this.state.items[id], completed: true      }
          }
        this.setState({ items })
      }
      deleteItem = (id) => {
        let  {[id]: deleted, ...items} = this.state.items;
        this.setState({ items })
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
            </ul>
            <Route exact path="/" render={props =>
                <ItemHolder  
                items={this.state.items} 
                done={false}
                action={this.completeItem}
                /> 
            }/>
            <Route exact path="/completed" render={props => 
                <ItemHolder   
                items={this.state.items} 
                done={true}
                action={this.deleteItem}
                /> 
            }/>
          </div>
        </BrowserRouter>
        {this.state.pets}
        </div>
      );
    }
  }
  export default TestSubmit;