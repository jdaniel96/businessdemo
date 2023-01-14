import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../libs/firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../config/db";

export const registerUser = async (
  email = "test@gmail.com",
  password = "juan123456789072",
  name = "juan Daniel"
) => {
  const auth = getAuth(app);
  const adminUserCollection = collection(db, "adminUsers");
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCredential) {
      const addUserToCollection = await addDoc(adminUserCollection, {
        name,
        email: userCredential.user.email,
      });

      alert("success");
    }
  } catch (err) {
    console.log("error in register user", err.message);
    console.log("error in register user", err.code);
  }
};
