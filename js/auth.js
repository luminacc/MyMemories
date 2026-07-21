import { auth, ALLOWED_EMAILS } from './firebase-config.js';
import { onAuthStateChanged, signInWithRedirect, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

function isAllowedEmail(email) {
  return ALLOWED_EMAILS.includes(email);
}

function showNotAllowed(user) {
  document.body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(135deg,#212121,#424242,#616161);font-family:'Poppins',sans-serif;color:#f5f5f5;text-align:center;padding:20px;">
      <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:20px;padding:40px;max-width:400px;box-shadow:0 10px 30px rgba(0,0,0,0.3);">
        <div style="font-size:4rem;margin-bottom:20px;">🚫</div>
        <h2 style="margin-bottom:15px;">Akses Ditolak</h2>
        <p style="color:#bbb;margin-bottom:25px;">Akun <strong>${user.email}</strong> tidak memiliki akses ke website ini.</p>
        <button onclick="window.location.href='login.html'" style="background:linear-gradient(135deg,#ff9a9e,#fad0c4);color:white;border:none;padding:12px 30px;border-radius:30px;cursor:pointer;font-size:16px;">Kembali ke Login</button>
      </div>
    </div>
  `;
}

export function requireAuth() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (!user) {
        window.location.href = 'login.html';
        resolve(null);
      } else if (!isAllowedEmail(user.email)) {
        showNotAllowed(user);
        signOut(auth);
        resolve(null);
      } else {
        resolve(user);
      }
    });
  });
}

export function getCurrentUser() {
  return auth.currentUser;
}

export async function doLogin() {
  try {
    await signInWithRedirect(auth, provider);
  } catch (err) {
    alert('Gagal login: ' + (err.message || err));
    return null;
  }
}

export async function doLogout() {
  await signOut(auth);
  window.location.href = 'login.html';
}
