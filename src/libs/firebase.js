import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApgWeuPNQD_Ls0E0vd_AGkDOF8HzZE6aA",
  authDomain: "businessdemo-9c772.firebaseapp.com",
  projectId: "businessdemo-9c772",
  storageBucket: "businessdemo-9c772.appspot.com",
  messagingSenderId: "317485345268",
  appId: "1:317485345268:web:69329a6518fa56ffad31a1",
  automaticDataCollectionEnabled: true,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "businessdemo");
export const analytics = getAnalytics(app);
