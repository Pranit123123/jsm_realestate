// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyCiRWmVWIa0im-xYxv2oLIVXO2Oe2T-3Xw",
  authDomain: "puneet-realestate.firebaseapp.com",
  projectId: "puneet-realestate",
  storageBucket: "puneet-realestate.firebasestorage.app",
  messagingSenderId: "446449990064",
  appId: "1:446449990064:web:9958043d23b66e57d53e75",
  measurementId: "G-QLR3954ZTH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);