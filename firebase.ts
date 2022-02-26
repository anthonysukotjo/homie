// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR3Hcc32iiZ5Jk-fpLl0t7vz54lt4Ni4s",
    authDomain: "homie-7df1b.firebaseapp.com",
    projectId: "homie-7df1b",
    storageBucket: "homie-7df1b.appspot.com",
    messagingSenderId: "829211595380",
    appId: "1:829211595380:web:ca89f9723fa2cf97673721",
    measurementId: "G-6HT9EQX21Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {  app};
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');