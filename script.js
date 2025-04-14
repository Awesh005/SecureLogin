// Firebase config (get this from Firebase > Project settings)

  const firebaseConfig = {
    apiKey: "AIzaSyABxG-srmZK-p6R0P0g3fHtwsU84V7Uhww",
    authDomain: "loginapp-bf117.firebaseapp.com",
    projectId: "loginapp-bf117",
    storageBucket: "loginapp-bf117.firebasestorage.app",
    messagingSenderId: "452287334774",
    appId: "1:452287334774:web:58c24f71405ce95cb75257",
    measurementId: "G-XEKVW62LBH"
  };
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // Register function
  window.register = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registered successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  