import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth'; // Importe os módulos que você precisa

const firebaseConfig = {
  apiKey: "AIzaSyDXoOJCzP3pC7z1Sm_x84gWHp1s5fBPPvQ",
  authDomain: "quizmusicalfb.firebaseapp.com",
  projectId: "quizmusicalfb",
  storageBucket: "quizmusicalfb.appspot.com",
  messagingSenderId: "862678532253",
  appId: "1:862678532253:web:d66874d535b17311b11474",
  measurementId: "G-BF35MG0RP4"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
