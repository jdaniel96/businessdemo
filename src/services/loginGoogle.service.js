import { app } from "../libs/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../config/db";

export const loginGoogle = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const adminUserCollection = collection(db, "adminUsers");

  try {
    const response = await signInWithPopup(auth, provider);

    if (response) {
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const user = response.user;

      const addUserToCollection = await addDoc(adminUserCollection, {
        email: user.email,
        name: user.displayName,
      });

      alert("success");
    }
  } catch (err) {
    console.log(
      "in signin with google",
      err.code,
      err.message,
      err.customData.email
    );
    const credential = GoogleAuthProvider.credentialFromError(err);
    console.log("error credential", credential);
  }
};
