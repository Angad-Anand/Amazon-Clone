// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGXl34erJ4Co2KDEaW2-0Wov_-7F-0CAg",
  authDomain: "clone-c43f0.firebaseapp.com",
  projectId: "clone-c43f0",
  storageBucket: "clone-c43f0.appspot.com",
  messagingSenderId: "517483317001",
  appId: "1:517483317001:web:42c0b6e9a4a04b0fc335d8",
  measurementId: "G-SRTTFYQCQR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
