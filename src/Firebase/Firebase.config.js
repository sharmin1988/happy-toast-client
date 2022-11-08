// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSP07Xd8IWnAB3Buzs8Cpj3ObhyMhGOYI",
  authDomain: "happy-toast-client.firebaseapp.com",
  projectId: "happy-toast-client",
  storageBucket: "happy-toast-client.appspot.com",
  messagingSenderId: "793874471842",
  appId: "1:793874471842:web:f232041185798849bdf0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app