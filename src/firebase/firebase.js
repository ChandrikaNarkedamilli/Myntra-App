import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVyryCG9SHJZyiEMxKdRoffo8AbdtoXx4",
    authDomain: "myntra-84369.firebaseapp.com",
    projectId: "myntra-84369",
    storageBucket: "myntra-84369.appspot.com",
    messagingSenderId: "475366914408",
    appId: "1:475366914408:web:1eef595d59f24e3e43fedd",
    measurementId: "G-P17GEF3L1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth};