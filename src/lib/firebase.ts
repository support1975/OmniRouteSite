"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-YY142s87K-TuiI9xga8Cpl0e-poJD10",
  authDomain: "omniroute-site.firebaseapp.com",
  projectId: "omniroute-site",
  storageBucket: "omniroute-site.firebasestorage.app",
  messagingSenderId: "514403784328",
  appId: "1:514403784328:web:6c3b8fb641a14c5c0ab13d",
  measurementId: "G-H7PSG5V6KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics 
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export default app;
