// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// importing firebase
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCGyn_I66jlq-N80F2KYFQX0tiyAhVaU",
  authDomain: "fir-contact-app-65907.firebaseapp.com",
  projectId: "fir-contact-app-65907",
  storageBucket: "fir-contact-app-65907.appspot.com",
  messagingSenderId: "465455123198",
  appId: "1:465455123198:web:f4de0239e49db5e258b3af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//
export const db = getFirestore(app);
