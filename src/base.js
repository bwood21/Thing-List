import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC1eTB329-qNd4waLmq8yvd_BpbkYcIhOs",
    authDomain: "thing-list-d0651.firebaseapp.com",
    databaseURL: "https://thing-list-d0651.firebaseio.com",
    projectId: "thing-list-d0651",
    storageBucket: "thing-list-d0651.appspot.com",
    messagingSenderId: "826894011283"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)

