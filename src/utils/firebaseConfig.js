// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGD4A2gj_Q8vCWGacBkiL8HgEwkzL_DMM",
  authDomain: "petsociety-27eb1.firebaseapp.com",
  projectId: "petsociety-27eb1",
  storageBucket: "petsociety-27eb1.appspot.com",
  messagingSenderId: "392854989785",
  appId: "1:392854989785:web:f71b91c9f908d06dfe47c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default db