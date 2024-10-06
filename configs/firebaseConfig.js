// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-data-fc16c.firebaseapp.com",
  databaseURL: "https://fir-data-fc16c-default-rtdb.firebaseio.com",
  projectId: "fir-data-fc16c",
  storageBucket: "fir-data-fc16c.appspot.com",
  messagingSenderId: "859736513582",
  appId: "1:859736513582:web:271b469b1ba63caa5e53bf",
  measurementId: "G-M1P8Q96NN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);