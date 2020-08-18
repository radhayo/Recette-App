import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDX7LQqlHLXOhEYitOcoZPm5R0D9x0xjmc",
    authDomain: "recettes-app-ce7fe.firebaseapp.com",
    databaseURL: "https://recettes-app-ce7fe.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
