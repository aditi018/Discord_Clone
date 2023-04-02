import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQfBRisrRQw6iVqwl8Gk9jTWygNdmDOvA",
    authDomain: "discord-clone-4972a.firebaseapp.com",
    projectId: "discord-clone-4972a",
    storageBucket: "discord-clone-4972a.appspot.com",
    messagingSenderId: "865156590143",
    appId: "1:865156590143:web:6af9c0f3c6295d8592268a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;