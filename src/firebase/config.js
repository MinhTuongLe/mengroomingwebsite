import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj5n1D3H5FdHw3U_lo1mjR44iLiGx5MOg",
  authDomain: "mengroomingwebsite-2be03.firebaseapp.com",
  projectId: "mengroomingwebsite-2be03",
  storageBucket: "mengroomingwebsite-2be03.appspot.com",
  messagingSenderId: "837679980882",
  appId: "1:837679980882:web:9b5b459fc26e8557055a8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
