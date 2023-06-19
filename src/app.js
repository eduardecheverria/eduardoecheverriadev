// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from 'react';
import * as ReactDOM from 'react-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-pyhKF-nSv4sHk1EQY4AYVJeV-GvkP80",
  authDomain: "eduardoecheverriadev.firebaseapp.com",
  projectId: "eduardoecheverriadev",
  storageBucket: "eduardoecheverriadev.appspot.com",
  messagingSenderId: "402741741674",
  appId: "1:402741741674:web:d5a8fce3390488767d2213",
  measurementId: "G-Y05REFJ0T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rootDomElement = document.getElementById('root');
const root = ReactDOM.findDOMNode(rootDomElement);
const appCode = React.createElement('h1',null,'hola mundo')
const analytics = getAnalytics(app);