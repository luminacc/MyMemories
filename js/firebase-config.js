import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX-LrJEGQxODpEelbS8Pp-vm1CegLOceY",
  authDomain: "luminac-6437a.firebaseapp.com",
  projectId: "luminac-6437a",
  storageBucket: "luminac-6437a.appspot.com",
  messagingSenderId: "476684760512",
  appId: "1:476684760512:web:8a669df2e639cba4194425",
  measurementId: "G-E903BM0C2Q"
};

const ALLOWED_EMAILS = [
  "rianakhlulfadli@gmail.com",
  "lunadindaaa2220@gmail.com"
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, ALLOWED_EMAILS };
