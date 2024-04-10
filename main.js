// Purpose: Firebase configuration for the project  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyAEKW9vHL8n590_UyFvP1Z7LTQamPCdOKc",
    authDomain: "gdsctwitterclone.firebaseapp.com",
    projectId: "gdsctwitterclone",
    storageBucket: "gdsctwitterclone.appspot.com",
    messagingSenderId: "869642590142",
    appId: "1:869642590142:web:606d278ffc934cad130bef",
    measurementId: "G-H3WFGFY6MD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.languageCode = 'en';

const googleLogin=document.getElementById('google-login-btn');
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    
    const user = result.user;
    alert("Login Successful");
    console.log(user);
    window.location.href = "dashboard.html";
   
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    
  });

});