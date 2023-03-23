import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0l91j9cQ9xJAfK_SG9yVdCb8Xt-QUXU",
  authDomain: "sm-commerce-3ba94.firebaseapp.com",
  projectId: "sm-commerce-3ba94",
  storageBucket: "sm-commerce-3ba94.appspot.com",
  messagingSenderId: "731445868357",
  appId: "1:731445868357:web:3388730da0a647d969302c",
  measurementId: "G-HHF2X7FF32"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
)
