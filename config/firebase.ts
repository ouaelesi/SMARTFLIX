// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' ; 

const firebaseConfig = {
  apiKey: "AIzaSyBvvthC4p15IyezzIpBmjwtYY2d7FMnrOo",
  authDomain: "smartflix-a1d9d.firebaseapp.com",
  projectId: "smartflix-a1d9d",
  storageBucket: "smartflix-a1d9d.appspot.com",
  messagingSenderId: "645699487103",
  appId: "1:645699487103:web:b6606fe7b471ff71b4864a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()