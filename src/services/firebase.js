// ./src/services/firebase.js
import firebase from 'firebase'
import 'firebase/firestore'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD5iebGtIKJl7jHHOBwsaNsCUujmb0mLOw',
  authDomain: 'porto-oculto.firebaseapp.com',
  databaseURL: 'https://porto-oculto.firebaseio.com',
  projectId: 'porto-oculto',
  storageBucket: 'porto-oculto.appspot.com',
  messagingSenderId: '1094386184011',
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get polls() {
    return this.store().collection('polls')
  }
}

export default new Firebase()
