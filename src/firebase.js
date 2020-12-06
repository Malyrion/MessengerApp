import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDJBsysnlFJ0WSwVkwr4w4PlnS-36ICeOw",
  authDomain: "messenger-ca304.firebaseapp.com",
  projectId: "messenger-ca304",
  storageBucket: "messenger-ca304.appspot.com",
  messagingSenderId: "306696602887",
  appId: "1:306696602887:web:3d888b6a81171359d1b1a2",
  measurementId: "G-CBMEWBLY86"
});

const db = firebaseApp.firestore();

export default db;
