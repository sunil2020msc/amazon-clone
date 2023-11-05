// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxOP_1BTxLDBjn1jwxNnEF3b_FCaalKkM",
    authDomain: "clone-4bcac.firebaseapp.com",
    projectId: "clone-4bcac",
    storageBucket: "clone-4bcac.appspot.com",
    messagingSenderId: "389909983932",
    appId: "1:389909983932:web:54daf136dc04c1c55756b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
