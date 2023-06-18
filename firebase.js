// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLuh9gJOSiAP1MPBy6Dn5w3kLS6GkT5h4",
  authDomain: "kryptonite-679d4.firebaseapp.com",
  projectId: "kryptonite-679d4",
  storageBucket: "kryptonite-679d4.appspot.com",
  messagingSenderId: "221316262393",
  appId: "1:221316262393:web:db16777bd49cff2d633528",
  measurementId: "G-P5Y571RRN0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
