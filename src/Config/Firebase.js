// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxaIGISv6lcH-DKX9kjBgKTfhOsAEkTz0",
  authDomain: "test-f23b8.firebaseapp.com",
  projectId: "test-f23b8",
  storageBucket: "test-f23b8.appspot.com",
  messagingSenderId: "507599639487",
  appId: "1:507599639487:web:7a2e5d46d5c9783c68470a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db , app};
