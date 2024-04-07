// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, inMemoryPersistence, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


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
const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with custom persistence
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: inMemoryPersistence
});

export { FIREBASE_APP, FIREBASE_AUTH };