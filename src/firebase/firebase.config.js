// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbeEYU_msqHNGTDw_BKJRmAFV2t7W3zXw",
  authDomain: "musicine-org.firebaseapp.com",
  databaseURL: "https://musicine-org-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "musicine-org",
  storageBucket: "musicine-org.appspot.com",
  messagingSenderId: "556574544235",
  appId: "1:556574544235:web:5dca8b0109d3fb4d827c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;