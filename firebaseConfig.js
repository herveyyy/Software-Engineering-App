// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZeibU97ZbORATbuAfvgy5YcH1q7-6w3I",
  authDomain: "sir-project-67f88.firebaseapp.com",
  projectId: "sir-project-67f88",
  storageBucket: "sir-project-67f88.appspot.com",
  messagingSenderId: "930223991308",
  appId: "1:930223991308:web:fe63f8c0658640347c1c29",
  measurementId: "G-XQLTRTTZB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();