import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCGjGStlBZrqI0gPcDIhS39Esmxl2G2KI",
  authDomain: "disney-clone-cac4f.firebaseapp.com",
  projectId: "disney-clone-cac4f",
  storageBucket: "disney-clone-cac4f.appspot.com",
  messagingSenderId: "325015185028",
  appId: "1:325015185028:web:a477565a0e7a12c76584d1",
  measurementId: "G-1GJ0N887M1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const pics = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("picture", pics);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
