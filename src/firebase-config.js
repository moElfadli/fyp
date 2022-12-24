
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbHV906rDnSio1jwBvOXIvY11cnlwMOm0",
  authDomain: "online-quiz-fyp.firebaseapp.com",
  projectId: "online-quiz-fyp",
  storageBucket: "online-quiz-fyp.appspot.com",
  messagingSenderId: "109813636640",
  appId: "1:109813636640:web:b3034d1900175716aa6645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };