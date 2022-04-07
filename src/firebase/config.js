// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvGOj4p0VlYg_hAOrmk15Uv3xW0iwTGgU",
    authDomain: "ecomerce-coder-c3348.firebaseapp.com",
    projectId: "ecomerce-coder-c3348",
    storageBucket: "ecomerce-coder-c3348.appspot.com",
    messagingSenderId: "758340004407",
    appId: "1:758340004407:web:1243162ac780aac947adb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)