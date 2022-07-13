import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8A7vKda9mJI9G5E4x7E90EQwLQVky3Vk",
  authDomain: "cart-c7aaf.firebaseapp.com",
  projectId: "cart-c7aaf",
  storageBucket: "cart-c7aaf.appspot.com",
  messagingSenderId: "295554590252",
  appId: "1:295554590252:web:76d39448dc21f45edd1389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
