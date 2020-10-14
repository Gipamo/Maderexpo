import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebase'

const fb = firebase.initializeApp(firebaseConfig)
export  const db = fb.firestore()