
import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBmk0wEG0_bN8RlcNClayhvVD8fFOCZz_A",
    authDomain: "booksanta-eb95e.firebaseapp.com",
    projectId: "booksanta-eb95e",
    storageBucket: "booksanta-eb95e.appspot.com",
    messagingSenderId: "579342632210",
    appId: "1:579342632210:web:06ec08b8caf2bf2abb9fcb"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();