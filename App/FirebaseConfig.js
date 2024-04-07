// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT1-VEYeC6krVZhKfXxDrRs19py1smtDE",
  authDomain: "heartcart-7e1b9.firebaseapp.com",
  databaseURL: "https://heartcart-7e1b9-default-rtdb.firebaseio.com",
  projectId: "heartcart-7e1b9",
  storageBucket: "heartcart-7e1b9.appspot.com",
  messagingSenderId: "798551774338",
  appId: "1:798551774338:web:3d7e4ecb854de1a665509b",
  measurementId: "G-G2JWX619TX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)