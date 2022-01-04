import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmNMeZhhkjmetpUJ2dXpcHgQ_-KueqJh0',
  authDomain: 'house-marketplace-app-36a0f.firebaseapp.com',
  projectId: 'house-marketplace-app-36a0f',
  storageBucket: 'house-marketplace-app-36a0f.appspot.com',
  messagingSenderId: '502741632651',
  appId: '1:502741632651:web:2c1a433bc87e5ce8be368e',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
