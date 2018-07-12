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
  .then(setUser)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

//Saves the user in the database and sets the constant for the current user
export function saveUser (user) {
  let tools = new DBTools()
  constants.SET_USER(user.user.uid)
  console.log(constants.GET_USER())
  return tools.usersRef
    .push({
      email: user.user.email,
      uid: user.user.uid,
      admin: false,
      globalAdmin: false,
    })
    .then(() => user)
}

export function setUser(user){
  let tools = new DBTools()
  tools.setUser(user.user.uid)
}
