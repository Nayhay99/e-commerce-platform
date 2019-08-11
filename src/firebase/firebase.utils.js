import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyDJsbqxJIl20B1AC3XvgPrZUgJktnOE5_I",
    authDomain: "e-comm-platform.firebaseapp.com",
    databaseURL: "https://e-comm-platform.firebaseio.com",
    projectId: "e-comm-platform",
    storageBucket: "",
    messagingSenderId: "375853929006",
    appId: "1:375853929006:web:891cf779f56dc8c8"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider() //for sign in with google
// provider.setCustomParameters({prompt : 'select_account'})
// const popUp = auth.signInWithPopup(provider);
// export const signInWithGoogle = () => popUp

// export default firebase;

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      console.log("success")
   }).catch(function(error) {		
      console.log("failure", error)
   });
}
export default googleSignin;

