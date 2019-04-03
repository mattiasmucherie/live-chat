import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsbHbmqQ7cWoBUMVvQiNw2OuYCYA5plOg",
  authDomain: "live-chat-mattias.firebaseapp.com",
  databaseURL: "https://live-chat-mattias.firebaseio.com",
  projectId: "live-chat-mattias",
  storageBucket: "live-chat-mattias.appspot.com",
  messagingSenderId: "937412539236"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
