// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDB6KPQC6ghwheCSyUbh496EsQoFdYI3Co",
  authDomain: "coronavirus-statistics-880ae.firebaseapp.com",
  projectId: "coronavirus-statistics-880ae",
  storageBucket: "coronavirus-statistics-880ae.appspot.com",
  messagingSenderId: "1095838166060",
  appId: "1:1095838166060:web:8debf0e9817c45ee387589",
  measurementId: "G-P058W069KZ",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
