// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP3DRkkYVHq-mMzOosTFSSzMv8qcIBFK8",
  authDomain: "tazahome-13c97.firebaseapp.com",
  projectId: "tazahome-13c97",
  storageBucket: "tazahome-13c97.appspot.com",
  messagingSenderId: "963810546459",
  appId: "1:963810546459:web:aa50f4d30775b4055b39be",
  measurementId: "G-HEXWZ8P2C6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
