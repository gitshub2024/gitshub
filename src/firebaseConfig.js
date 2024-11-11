import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSAvCoV3F-Ts9H49MSn7Hb2FGYEi0-Dkc",
  authDomain: "gitshub-35fb1.firebaseapp.com",
  projectId: "gitshub-35fb1",
  storageBucket: "gitshub-35fb1.appspot.com",
  messagingSenderId: "1071554356734",
  appId: "1:1071554356734:web:66257bc706b6622e1b4caf",
  measurementId: "G-MVSJ060J7K"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  hd: "saintgits.org", // Restrict login to saintgits.org domain
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, provider, db };