import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9cFVC1vIgLpr9SH8qvIQOqGTZnfBlgTQ",
  authDomain: "luminac-6437a.firebaseapp.com",
  projectId: "luminac-6437a",
  storageBucket: "luminac-6437a.firebasestorage.app",
  messagingSenderId: "476684760512",
  appId: "1:476684760512:web:ae8d4f26bd4f6d00194425",
  measurementId: "G-MVX1E12SY7"
};

const ALLOWED_EMAILS = [
  "rianakhlulfadli@gmail.com",
  "lunadindaaa2220@gmail.com"
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, ALLOWED_EMAILS };
