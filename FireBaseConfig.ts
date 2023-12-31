// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT3wz4juBn3YRzp_dRbuGizEnYaM7tsZs",
  authDomain: "studysync-7fd78.firebaseapp.com",
  projectId: "studysync-7fd78",
  storageBucket: "studysync-7fd78.appspot.com",
  messagingSenderId: "800546861952",
  appId: "1:800546861952:web:7eebade26326e55f23c765",
  measurementId: "G-TX4G863PTM"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);