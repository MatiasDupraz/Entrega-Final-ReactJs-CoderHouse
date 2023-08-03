// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB58LJmy-Rl-dBFXDSQoxPMklLaOYur6Ko",
    authDomain: "react-ef5d9.firebaseapp.com",
    projectId: "react-ef5d9",
    storageBucket: "react-ef5d9.appspot.com",
    messagingSenderId: "886591979605",
    appId: "1:886591979605:web:7109d24827b6cbe866d4dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)