import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import { FIREBASE_CONFIG } from './config'

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
 