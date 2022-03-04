// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe5TNAhSjhYbsEXBPf3ghp5wq7mDr9xrs",
  authDomain: "ecommerce-coders.firebaseapp.com",
  projectId: "ecommerce-coders",
  storageBucket: "ecommerce-coders.appspot.com",
  messagingSenderId: "358880506117",
  appId: "1:358880506117:web:4691f86bcc395619ae076c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

