import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzyWFxxybeqJbP40_RhjGa7mAFqJHQmvg",
  authDomain: "mysns-9278d.firebaseapp.com",
  databaseURL: "https://mysns-9278d.firebaseio.com",
  projectId: "mysns-9278d",
  storageBucket: "mysns-9278d.appspot.com",
  messagingSenderId: "57157375825",
  appId: "1:57157375825:web:4b0f22ed15180125066570",
  measurementId: "G-YJ0H36KD1M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
