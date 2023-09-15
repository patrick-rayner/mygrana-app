// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnUPzqEIZZXWdT1n1Ruqu5fjYFOdROQl4",
  authDomain: "mygrana-app.firebaseapp.com",
  projectId: "mygrana-app",
  storageBucket: "mygrana-app.appspot.com",
  messagingSenderId: "88847730853",
  appId: "1:88847730853:web:a6f56da038733ad73c254c",
  measurementId: "G-8RP66K2JV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);