import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_lad1eZ5OaPR0EbRNseAy8z1VIn4tCH8",
  authDomain: "cinemaven-27d04.firebaseapp.com",
  projectId: "cinemaven-27d04",
  storageBucket: "cinemaven-27d04.appspot.com",
  messagingSenderId: "855871118917",
  appId: "1:855871118917:web:ee6ef9fedf365a4e11cd2c",
  measurementId: "G-14C31H7CC6",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
