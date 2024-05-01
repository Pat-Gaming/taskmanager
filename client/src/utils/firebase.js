// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-b3d4e.firebaseapp.com",
  projectId: "taskmanager-b3d4e",
  storageBucket: "taskmanager-b3d4e.appspot.com",
  messagingSenderId: "948861058149",
  appId: "1:948861058149:web:b63359224c9c0eb38b1a8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
