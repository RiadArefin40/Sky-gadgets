// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQ4SyXh5jeav_gMdeICa9l0DDaitKVbQ",
  authDomain: "fitness-press-84846.firebaseapp.com",
  projectId: "fitness-press-84846",
  storageBucket: "fitness-press-84846.appspot.com",
  messagingSenderId: "306890811096",
  appId: "1:306890811096:web:f12d21b23ea3137cc859ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;