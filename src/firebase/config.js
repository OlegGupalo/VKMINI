import { initializeApp, firebase } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA3LVbFdtV2iFAPRwJZfi-3FmJpogX-OE",
  authDomain: "photo-gallery-9326f.firebaseapp.com",
  projectId: "photo-gallery-9326f",
  storageBucket: "photo-gallery-9326f.appspot.com",
  messagingSenderId: "830935575217",
  appId: "1:830935575217:web:4fc75cb3ce548465d4d090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore()