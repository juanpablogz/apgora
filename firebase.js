// Get a RTDB instance
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAnZp_0QVv4zRprBrypeLx0VaaSIr3DEN0",
  authDomain: "appgora-8ae35.firebaseapp.com",
  databaseURL: "https://appgora-8ae35.firebaseio.com",
  projectId: "appgora-8ae35",
  storageBucket: "appgora-8ae35.appspot.com",
  messagingSenderId: "183725934944",
  appId: "1:183725934944:web:32c32e0a7b2557cf51b605",
  measurementId: "G-0F17F4SKCK"
};
export const firebaseInstance = firebase.initializeApp(firebaseConfig)
export const dataBase = firebaseInstance.database()

