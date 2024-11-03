
import { initializeApp } from "firebase/app";

import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB48EVIaH7UNmhITOTbe-3V0DjXwtzFyT0",
  authDomain: "olx-clone-a3129.firebaseapp.com",
  projectId: "olx-clone-a3129",
  storageBucket: "olx-clone-a3129.firebasestorage.app",
  messagingSenderId: "1097207635097",
  appId: "1:1097207635097:web:1f22c83370558ec5276c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=  getAuth(app)
export const googleProvider=new GoogleAuthProvider();