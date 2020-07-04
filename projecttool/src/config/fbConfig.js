  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCORLzeQXScfM44OGGJefVl8u-EJgu5rWE",
    authDomain: "project-management-tool-25019.firebaseapp.com",
    databaseURL: "https://project-management-tool-25019.firebaseio.com",
    projectId: "project-management-tool-25019",
    storageBucket: "project-management-tool-25019.appspot.com",
    messagingSenderId: "231340292167",
    appId: "1:231340292167:web:cb6dadc378594320ad1962",
    measurementId: "G-Y99RLG8FHE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;