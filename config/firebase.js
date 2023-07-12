// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCELY8nLwor8hL7xbDNPrVFKbgI1s_44Xc",
  authDomain: "react-native-login-8d572.firebaseapp.com",
  projectId: "react-native-login-8d572",
  storageBucket: "react-native-login-8d572.appspot.com",
  messagingSenderId: "136482799553",
  appId: "1:136482799553:web:65f33cca84a01b1fd2f940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);