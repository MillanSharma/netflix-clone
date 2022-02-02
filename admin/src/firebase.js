import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDD1XB1Eu1oNjWOFbsJ4GpdlZLoFZ1j2u8",
  authDomain: "netflix-54921.firebaseapp.com",
  projectId: "netflix-54921",
  storageBucket: "netflix-54921.appspot.com",
  messagingSenderId: "1078922250098",
  appId: "1:1078922250098:web:ea757ef8da7949cdf47feb",
  measurementId: "G-5L2SM5HP8W",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
