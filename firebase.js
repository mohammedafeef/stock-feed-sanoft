require('dotenv').config();
// import firebase from 'firebase'
const firebaseApp = {
    apiKey: process.env.FIREBASE_AUTH_K,
    authDomain: "stock-feed-sanoft.firebaseapp.com",
    projectId: "stock-feed-sanoft",
    storageBucket: "stock-feed-sanoft.appspot.com",
    messagingSenderId: "387778239264",
    appId: "1:387778239264:web:b1e5cc04594633f2f4d545",
    measurementId: "G-JHD5EDVQ22"
  };  
const db = firebaseApp.firestore();
//   const auth = firebaseApp.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
export {db,provider,auth};