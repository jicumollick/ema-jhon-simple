// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJXxp0Gf0lNLeDQm-jRyXQWV9u_IuJFg",
  authDomain: "ema-jhon-simple-1a265.firebaseapp.com",
  projectId: "ema-jhon-simple-1a265",
  storageBucket: "ema-jhon-simple-1a265.appspot.com",
  messagingSenderId: "582140126370",
  appId: "1:582140126370:web:c0d2f2235de2f20466a3fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
