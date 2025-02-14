// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfJMKCIdEX9HKIiapksN2P1mHujAznZgc",
  authDomain: "ecommerce-f11dd.firebaseapp.com",
  projectId: "ecommerce-f11dd",
  storageBucket: "ecommerce-f11dd.firebasestorage.app",
  messagingSenderId: "2954127785",
  appId: "1:2954127785:web:c73a57f338faff8173bcb8",
  measurementId: "G-4RXZ5RK85G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider, signInWithPopup };
