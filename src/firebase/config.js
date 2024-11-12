// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl5gBKmwlzczy03pgjhftHirInpvRGVjs",
  authDomain: "react-cursos-96bc0.firebaseapp.com",
  projectId: "react-cursos-96bc0",
  storageBucket: "react-cursos-96bc0.firebasestorage.app",
  messagingSenderId: "54767890910",
  appId: "1:54767890910:web:339083de9c2e61e0ceed4f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)

