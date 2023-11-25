// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDXoOJCzP3pC7z1Sm_x84gWHp1s5fBPPvQ",
    authDomain: "quizmusicalfb.firebaseapp.com",
    projectId: "quizmusicalfb",
    storageBucket: "quizmusicalfb.appspot.com",
    messagingSenderId: "862678532253",
    appId: "1:862678532253:web:d66874d535b17311b11474",
    measurementId: "G-BF35MG0RP4"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;