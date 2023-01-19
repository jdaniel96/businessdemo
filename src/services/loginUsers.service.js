import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../libs/firebase";

export const login = async (
  email = "juandaniel961922@gmail.com",
  password = "juan123456789072"
) => {
  const auth = getAuth(app);
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log("in login", err.message, err.code);
  }
};
