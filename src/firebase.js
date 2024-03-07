// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCmNbFVLBZyDlDgMW3quObzx_8jnyjbRs0",
  authDomain: "ticket-login-2f97c.firebaseapp.com",
  projectId: "ticket-login-2f97c",
  storageBucket: "ticket-login-2f97c.appspot.com",
  messagingSenderId: "433027376559",
  appId: "1:433027376559:web:e36912c4b58293e2d23b5a",
  measurementId: "G-9ZN2BJSLP2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;