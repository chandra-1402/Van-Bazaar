/**
 * VAN BAZAAR - Firebase Phone Authentication Configuration & Service
 * 
 * Enables real-world SMS One-Time Passcode (OTP) delivery to physical mobile numbers
 * using Firebase Phone Authentication.
 * 
 * Setup Instructions:
 * 1. Visit https://console.firebase.google.com/ and create/open your project.
 * 2. In Authentication -> Sign-in method, enable "Phone".
 * 3. In Project Settings -> "Your apps", register a Web App and paste your credentials below:
 */

window.VAN_BAZAAR_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Check if user saved custom Firebase credentials in localStorage
(function() {
  try {
    const saved = localStorage.getItem('VAN_BAZAAR_FIREBASE_CONFIG');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey) {
        window.VAN_BAZAAR_FIREBASE_CONFIG = Object.assign({}, window.VAN_BAZAAR_FIREBASE_CONFIG, parsed);
      }
    }
  } catch (err) {
    console.warn("Could not load stored Firebase configuration:", err);
  }
})();

// Helper to determine if real Firebase is configured
window.isFirebaseConfigured = function() {
  const cfg = window.VAN_BAZAAR_FIREBASE_CONFIG;
  return Boolean(cfg && cfg.apiKey && cfg.apiKey.trim().length > 10 && !cfg.apiKey.includes("YOUR_"));
};

// Initialize Firebase App if configured and SDK is present
window.initFirebaseApp = function() {
  if (typeof firebase === 'undefined') {
    console.info("Firebase SDK not loaded yet.");
    return false;
  }
  if (!firebase.apps || firebase.apps.length === 0) {
    if (window.isFirebaseConfigured()) {
      try {
        firebase.initializeApp(window.VAN_BAZAAR_FIREBASE_CONFIG);
        console.log("✅ Firebase Phone Auth initialized successfully.");
        return true;
      } catch (err) {
        console.error("Firebase initialization failed:", err);
        return false;
      }
    }
  }
  return firebase.apps && firebase.apps.length > 0;
};
