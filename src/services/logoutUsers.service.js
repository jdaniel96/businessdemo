import { getAuth, signOut } from "firebase/auth";
import { app } from "../libs/firebase";

export const logOut = async () => {
  try {
    const auth = getAuth(app);
    const response = await signOut(auth);
    console.log(response);
  } catch (err) {
    console.log("error in signout", err, err.code, err.message);
  }
};
