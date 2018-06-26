{/*
    If your component interacts with the database, call a function in here
    to actually interact with the database.

    For instance, if you add a name to a pet, call the function here that
    pushes a pet name to the database instead of calling Firebase locally
    to your component.

    This ensures that if the database ever changes, your old code stays the
    same, and only this file gets replaced/altered.

*/}

import React, { Component } from 'react';
import firebase from './firebase.js';

{/* This contains the code for how you want the stuff in ths class to display.
    You can put HTML and CSS in here as well.
    
    @return the display details to be implemented by the main app
    */}
class DBTools extends Component {
  render() {
    return (

      {/* Display details */}
      <div className="DBTools">

      </div>
    });
  }
}

{/* Remember to change the name here. This actually "uses" the component you've made */}
export default DBTools;
