// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};





// .env for firebase configuration

// VITE_FIREBASE_API_KEY=AIzaSyC6rpLhDqVxkRz5KTynl4CK5O2e4EXOT4A
// VITE_FIREBASE_AUTH_DOMAIN=plant-care-tracker-bd.firebaseapp.com
// VITE_FIREBASE_PROJECT_ID=plant-care-tracker-bd
// VITE_FIREBASE_STORAGE_BUCKET=plant-care-tracker-bd.appspot.com
// VITE_FIREBASE_MESSAGING_SENDER_ID=824611666945
// VITE_FIREBASE_APP_ID=1:824611666945:web:d085a6836eb987f3e61400






// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase auth (optional)
export const auth = getAuth(app);
export default app;


export const db = getFirestore(app);


// import 
import { getFirestore } from "firebase/firestore";
