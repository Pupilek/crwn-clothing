import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDQzOvI0Hv6NXjKE3xWUx43zLyqk4LQzmY",
  authDomain: "crwn-db-8c7a7.firebaseapp.com",
  databaseURL: "https://crwn-db-8c7a7.firebaseio.com",
  projectId: "crwn-db-8c7a7",
  storageBucket: "crwn-db-8c7a7.appspot.com",
  messagingSenderId: "1078150582218",
  appId: "1:1078150582218:web:251de18a828ea3c2e88933",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
