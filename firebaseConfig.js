// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPiZURRmihxZ0o1f8yUxpZvtlj1YxjH68",
  authDomain: "fshare-d2d6e.firebaseapp.com",
  projectId: "fshare-d2d6e",
  storageBucket: "fshare-d2d6e.appspot.com",
  messagingSenderId: "524506974656",
  appId: "1:524506974656:web:45b236ad69ecf800266025",
  measurementId: "G-HPFC7Q2CTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);