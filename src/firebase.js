import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrU-VbW-9GenH2bmpFzUZpM2KHDcz9grw",
  authDomain: "transbit-d9b05.firebaseapp.com",
  databaseURL: "https://transbit-d9b05.firebaseio.com",
  projectId: "transbit-d9b05",
  storageBucket: "transbit-d9b05.appspot.com",
  messagingSenderId: "340772379297",
  appId: "1:340772379297:web:12091b53baf60643446ee0",
  measurementId: "G-7GXRGKXPPF"
});

const db = firebaseApp.firestore();

export { db };
