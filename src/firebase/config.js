import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase Project Configuration
// Replace with your Firebase project credentials from Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDemoKey_ReplaceWithYourFirebaseKey",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "saalaram-website.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "saalaram-website",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "saalaram-website.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:demo123456789"
};

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);

// Firebase Services export
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
