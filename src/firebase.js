import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD-zMt3LTWWae3YDYpbI5AoNqWBFJzg5Ds",
    authDomain: "cosc412-pets.firebaseapp.com",
    databaseURL: "https://cosc412-pets.firebaseio.com",
    projectId: "cosc412-pets",
    storageBucket: "cosc412-pets.appspot.com",
    messagingSenderId: "269254258874"
  };
  firebase.initializeApp(config);

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth

export default firebase;
