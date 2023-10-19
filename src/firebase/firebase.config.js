// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const all = import.meta.env
console.log(all);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Pn-CarTRPSXBo9XGbEzkA1Zg5WtQ7nY",
  authDomain: "auto-versa.firebaseapp.com",
  projectId: "auto-versa",
  storageBucket: "auto-versa.appspot.com",
  messagingSenderId: "761441577408",
  appId: "1:761441577408:web:c1ba7faaee189bf4e6c025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
