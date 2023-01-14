import { getFirestore } from "firebase/firestore/lite";
import { app } from "../libs/firebase";

export const db = getFirestore(app);
