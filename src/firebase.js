import firebase from "firebase"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfj_B5p6k9ROb2UOWrfVWu3NMan8xf7DE",
    authDomain: "bt3103-week-6-d9d73.firebaseapp.com",
    projectId: "bt3103-week-6-d9d73",
    storageBucket: "bt3103-week-6-d9d73.appspot.com",
    messagingSenderId: "1021504628704",
    appId: "1:1021504628704:web:9c70bdeb7724e7d9012d85",
    measurementId: "G-7RYJWKCGW6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;