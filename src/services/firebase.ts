// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'firebase/database';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: 'rpg-73e66',
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGID,
  appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.NEXT_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const auth = getAuth(app)
// const analytics = getAnalytics(app);