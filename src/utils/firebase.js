import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'netflixgpt-eed8f.firebaseapp.com',
  projectId: 'netflixgpt-eed8f',
  storageBucket: 'netflixgpt-eed8f.appspot.com',
  messagingSenderId: '533256161238',
  appId: '1:533256161238:web:c045d9e03920c591988677',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
