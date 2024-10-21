// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQ5qDb5mlB3aGJvu0_A3-rJRnD41AiJk",
  authDomain: "deeps-expense-tracker.firebaseapp.com",
  projectId: "deeps-expense-tracker",
  storageBucket: "deeps-expense-tracker.appspot.com",
  messagingSenderId: "376847433043",
  appId: "1:376847433043:web:2f72e23d3c7ebba8deb5a6",
  measurementId: "G-9WLHDL5NV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
//firebase-login
//firebase init
//firebase deploy