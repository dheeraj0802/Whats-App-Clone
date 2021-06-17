import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCltCuQnZN9O_mw39c2MSSI3utbIrBupLE",
    authDomain: "whats-app-clone-b77bd.firebaseapp.com",
    projectId: "whats-app-clone-b77bd",
    storageBucket: "whats-app-clone-b77bd.appspot.com",
    messagingSenderId: "680183480979",
    appId: "1:680183480979:web:0900b60d6521d2f2744366",
    measurementId: "G-R7M4L6MFY1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;