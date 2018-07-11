import { ref, firebaseAuth } from '../firebase';
import dbTools from '../DBTools/DBTools'
import DBTools from '../DBTools/DBTools';
import * as constants from '../constants';

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
  .then(saveUser)
  
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

//Saves the user in the database
export function saveUser (user) {
  let tools = new DBTools()
  return tools.usersRef
    .push({
      email: user.user.email,
      uid: user.user.uid,
      admin: false,
      globalAdmin: false,
    })
    .then(() => user)
}
