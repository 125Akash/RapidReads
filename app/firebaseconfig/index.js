// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//getAuth for authentication, getFirestore for database, getStorage to store any uploaded file/image
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYjjQ86HpqUTjSLuhBFvMJAk5JwIwICM",
  authDomain: "treviuos.firebaseapp.com",
  projectId: "treviuos",
  storageBucket: "treviuos.appspot.com",
  messagingSenderId: "234559228540",
  appId: "1:234559228540:web:53f5ec0679e35779ea97f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)