// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "application-7b376.firebaseapp.com",
    projectId: "application-7b376",
    storageBucket: "application-7b376.appspot.com",
    messagingSenderId: "35544230820",
    appId: "1:35544230820:web:db1210661c3c6ee8072f31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);