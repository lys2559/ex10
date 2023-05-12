// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5brOCh6EePq0S9N3qG4oOU9TYiyrLF6k",
  authDomain: "ex10-18705.firebaseapp.com",
  databaseURL: "https://ex10-18705-default-rtdb.firebaseio.com",
  projectId: "ex10-18705",
  storageBucket: "ex10-18705.appspot.com",
  messagingSenderId: "452759832583",
  appId: "1:452759832583:web:29d4c7495e1c10e20b02a2",
  measurementId: "G-XZ7WCJ03VW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);